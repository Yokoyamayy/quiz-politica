import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, AppState, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AlternativaItem } from '../components/AlternativaItem';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { useAuth } from '../context/AuthContext';
import { embaralharPerguntas } from '../data/perguntas';
import { salvarRascunhoQuiz, salvarTentativa } from '../database/db';
import { useTheme } from '../theme/ThemeProvider';

const LETRAS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({ route, navigation }) {
  const {
    modalidade = 'curto',
    areaId = null,
    areaNome = null,
  } = route?.params ?? {};

  const { colors, radius, spacing } = useTheme();
  const { usuario } = useAuth();

  const [perguntas] = useState(() => embaralharPerguntas(modalidade, areaId));
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [salvando, setSalvando] = useState(false);

  const respostasRef = useRef({});
  const finalizadoRef = useRef(false);

  const perguntaAtual = perguntas[indiceAtual];
  const respostaSelecionada = respostas[perguntaAtual.id] ?? null;
  const ehUltima = indiceAtual === perguntas.length - 1;
  const progresso = ((indiceAtual + 1) / perguntas.length) * 100;

  const rotuloModo =
    modalidade === 'area'
      ? `Mini-Quiz · ${areaNome ?? 'Área'}`
      : modalidade === 'longo'
      ? 'Modo Longo'
      : 'Modo Curto';

  const finalizarTentativa = useCallback(
    async ({ interrompido = false } = {}) => {
      if (finalizadoRef.current || !usuario) return;
      finalizadoRef.current = true;
      setSalvando(true);

      try {
        const respostasAtuais = respostasRef.current;
        const listaRespostas = perguntas.map((pergunta, idx) => {
          const respostaUsuario = respostasAtuais[pergunta.id] ?? 'SEM_RESPOSTA';
          return {
            ordemExibicao: idx + 1,
            perguntaId: pergunta.id,
            respostaUsuario,
            respostaCorreta: pergunta.correta,
            acertou: respostaUsuario === pergunta.correta,
          };
        });

        const tentativaSalva = await salvarTentativa({
          usuarioId: usuario.id,
          respostas: listaRespostas,
        });

        navigation.replace('Resultado', {
          tentativa: tentativaSalva,
          interrompido,
        });
      } catch (erro) {
        console.error('Erro ao salvar tentativa:', erro);
        finalizadoRef.current = false;
        if (!interrompido) {
          Alert.alert(
            'Erro',
            'Não foi possível salvar o resultado do quiz. Tente novamente.'
          );
        }
      } finally {
        setSalvando(false);
      }
    },
    [navigation, perguntas, usuario]
  );

  useEffect(() => {
    if (!usuario) return;
    salvarRascunhoQuiz({
      usuarioId: usuario.id,
      perguntasIds: perguntas.map((p) => p.id),
      respostas: {},
    }).catch((erro) =>
      console.error('Erro ao iniciar rascunho do quiz:', erro)
    );
  }, [perguntas, usuario]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'background' && !finalizadoRef.current) {
        finalizarTentativa({ interrompido: true });
      }
    });

    return () => {
      subscription.remove();
    };
  }, [finalizarTentativa]);

  function selecionarAlternativa(letra) {
    const novasRespostas = {
      ...respostasRef.current,
      [perguntaAtual.id]: letra,
    };

    respostasRef.current = novasRespostas;
    setRespostas(novasRespostas);

    if (usuario) {
      salvarRascunhoQuiz({
        usuarioId: usuario.id,
        perguntasIds: perguntas.map((p) => p.id),
        respostas: novasRespostas,
      }).catch((erro) =>
        console.error('Erro ao atualizar rascunho do quiz:', erro)
      );
    }
  }

  function voltarQuestao() {
    if (indiceAtual > 0) {
      setIndiceAtual((i) => i - 1);
    }
  }

  async function avancarOuFinalizar() {
    if (!respostaSelecionada) {
      Alert.alert(
        'Selecione uma alternativa',
        'Escolha uma resposta antes de continuar.'
      );
      return;
    }

    if (!ehUltima) {
      setIndiceAtual((i) => i + 1);
      return;
    }

    await finalizarTentativa({ interrompido: false });
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <View
        style={[
          styles.topo,
          {
            paddingHorizontal: spacing.lg,
            paddingTop: spacing.md,
            paddingBottom: spacing.sm,
            gap: spacing.xs,
          },
        ]}
      >
        <View style={styles.topoRow}>
          <AppText variant="label" color="primary">
            Questão {indiceAtual + 1} de {perguntas.length}
          </AppText>
          <AppText variant="caption" color="textMuted">
            {rotuloModo} · {Math.round(progresso)}%
          </AppText>
        </View>

        <View
          style={[
            styles.barraFundo,
            { backgroundColor: colors.border, borderRadius: radius.pill },
          ]}
        >
          <View
            style={[
              styles.barraPreenchida,
              {
                width: `${progresso}%`,
                backgroundColor: colors.primary,
                borderRadius: radius.pill,
              },
            ]}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          paddingVertical: spacing.sm,
          gap: spacing.md,
        }}
      >
        <Card level={2} style={{ gap: spacing.sm }}>
          <View
            style={[
              styles.categoriaBadge,
              {
                backgroundColor: colors.primarySoft,
                borderRadius: radius.sm,
                paddingHorizontal: spacing.sm,
                paddingVertical: spacing.xs,
              },
            ]}
          >
            <AppText
              variant="caption"
              color="primary"
              style={{ fontWeight: '600' }}
            >
              {perguntaAtual.categoria}
            </AppText>
          </View>

          <AppText variant="subtitle">{perguntaAtual.enunciado}</AppText>
        </Card>

        <View style={{ gap: spacing.sm }}>
          {LETRAS.map((letra) => (
            <AlternativaItem
              key={letra}
              letra={letra}
              texto={perguntaAtual.alternativas[letra]}
              status={respostaSelecionada === letra ? 'selecionada' : 'padrao'}
              onPress={() => selecionarAlternativa(letra)}
              disabled={salvando}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={[
          styles.rodape,
          {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            padding: spacing.md,
            gap: spacing.sm,
          },
        ]}
      >
        <Button
          title="Anterior"
          variant="outline"
          onPress={voltarQuestao}
          disabled={indiceAtual === 0 || salvando}
          style={styles.botaoRodape}
        />
        <Button
          title={ehUltima ? 'Finalizar quiz' : 'Próxima'}
          onPress={avancarOuFinalizar}
          disabled={!respostaSelecionada}
          loading={salvando}
          style={styles.botaoRodape}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  topo: {
    width: '100%',
  },
  topoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  barraFundo: {
    height: 8,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
  },
  categoriaBadge: {
    alignSelf: 'flex-start',
  },
  rodape: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  botaoRodape: {
    flex: 1,
  },
});
