import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { CargoCard } from '../components/CargoCard';
import { useAuth } from '../context/AuthContext';
import { CARGOS_POLITICOS } from '../data/cargos';
import { MODALIDADES_QUIZ, PERGUNTAS } from '../data/perguntas';
import {
  finalizarRascunhoPendente,
  listarHistoricoUsuario,
} from '../database/db';
import { useTheme } from '../theme/ThemeProvider';

const FILTROS_ESFERA = ['Todos', 'Municipal', 'Estadual', 'Federal'];

export default function HomeScreen({ navigation }) {
  const { colors, isDark, toggleTheme, radius, spacing } = useTheme();
  const { usuario } = useAuth();

  const [modalidadeSelecionada, setModalidadeSelecionada] = useState('curto');
  const [filtroEsfera, setFiltroEsfera] = useState('Todos');
  const [resumo, setResumo] = useState({
    tentativas: 0,
    melhorPercentual: null,
    ultimoPercentual: null,
  });

  useFocusEffect(
    useCallback(() => {
      let ativo = true;

      async function carregarResumo() {
        if (!usuario) return;
        try {
          const tentativaInterrompida = await finalizarRascunhoPendente(
            usuario.id
          );

          const historico = await listarHistoricoUsuario(usuario.id);
          if (!ativo) return;

          if (historico.length === 0) {
            setResumo({
              tentativas: 0,
              melhorPercentual: null,
              ultimoPercentual: null,
            });
          } else {
            const melhor = Math.max(...historico.map((h) => h.percentual));
            setResumo({
              tentativas: historico.length,
              melhorPercentual: melhor,
              ultimoPercentual: historico[0].percentual,
            });
          }

          if (tentativaInterrompida) {
            Alert.alert(
              'Tentativa interrompida finalizada',
              `Seu quiz anterior foi interrompido e finalizado automaticamente (${tentativaInterrompida.percentual}% de acerto). As questões não respondidas foram consideradas incorretas.`,
              [
                { text: 'OK', style: 'cancel' },
                {
                  text: 'Ver estatísticas',
                  onPress: () =>
                    navigation.navigate('Resultado', {
                      tentativa: tentativaInterrompida,
                      interrompido: true,
                    }),
                },
              ]
            );
          }
        } catch (erro) {
          console.error('Erro ao carregar resumo:', erro);
        }
      }

      carregarResumo();

      return () => {
        ativo = false;
      };
    }, [navigation, usuario])
  );

  const cargosFiltrados = CARGOS_POLITICOS.filter((cargo) => {
    if (filtroEsfera === 'Todos') return true;
    return cargo.esfera.toLowerCase().includes(filtroEsfera.toLowerCase());
  });

  const modalidadeAtual = MODALIDADES_QUIZ[modalidadeSelecionada];

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.lg }}
      >

        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <AppText variant="caption" color="textMuted">
              Bem-vindo(a),
            </AppText>
            <AppText variant="title">{usuario?.nome}</AppText>
            <AppText
              variant="caption"
              color="textMuted"
              style={{ marginTop: 2 }}
            >
              Guia cívico e quiz legislativo ({PERGUNTAS.length} questões)
            </AppText>
          </View>

          <Pressable
            onPress={toggleTheme}
            accessibilityRole="button"
            accessibilityLabel={
              isDark ? 'Alternar para modo claro' : 'Alternar para modo escuro'
            }
            style={({ pressed }) => [
              styles.themeButton,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderRadius: radius.pill,
              },
              pressed && styles.pressed,
            ]}
          >
            <Ionicons
              name={isDark ? 'sunny-outline' : 'moon-outline'}
              size={20}
              color={colors.primary}
            />
          </Pressable>
        </View>

        <View style={{ gap: spacing.sm }}>
          <View style={styles.secaoTopo}>
            <AppText variant="subtitle">Como funciona cada cargo</AppText>
            <AppText variant="caption" color="textMuted">
              Toque em um cargo para ler as atribuições e fazer um mini-quiz
              focado na área
            </AppText>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: spacing.xs + 2, paddingVertical: 2 }}
          >
            {FILTROS_ESFERA.map((esfera) => {
              const ativo = filtroEsfera === esfera;
              return (
                <Pressable
                  key={esfera}
                  onPress={() => setFiltroEsfera(esfera)}
                  accessibilityRole="button"
                  style={[
                    styles.filtroChip,
                    {
                      backgroundColor: ativo ? colors.primary : colors.surface,
                      borderColor: ativo ? colors.primary : colors.border,
                      borderRadius: radius.pill,
                    },
                  ]}
                >
                  <AppText
                    variant="caption"
                    color={ativo ? colors.onPrimary : colors.textMuted}
                    style={{ fontWeight: '700' }}
                  >
                    {esfera}
                  </AppText>
                </Pressable>
              );
            })}
          </ScrollView>

          <View style={{ gap: spacing.sm }}>
            {cargosFiltrados.map((cargo) => (
              <CargoCard
                key={cargo.id}
                cargo={cargo}
                onPress={() =>
                  navigation.navigate('DetalheCargo', {
                    cargoId: cargo.id,
                    cargoNome: cargo.nome,
                  })
                }
              />
            ))}
          </View>
        </View>

        <Card level={2} style={{ gap: spacing.md }}>
          <View style={{ gap: spacing.xs }}>
            <View style={styles.secaoTituloRow}>
              <Ionicons
                name="ribbon-outline"
                size={20}
                color={colors.primary}
              />
              <AppText variant="subtitle">Teste seus conhecimentos</AppText>
            </View>

          </View>

          <View style={[styles.modalidadesRow, { gap: spacing.sm }]}>
            {Object.values(MODALIDADES_QUIZ).map((mod) => {
              const selecionada = modalidadeSelecionada === mod.id;
              return (
                <Pressable
                  key={mod.id}
                  onPress={() => setModalidadeSelecionada(mod.id)}
                  accessibilityRole="button"
                  accessibilityState={{ selected: selecionada }}
                  style={({ pressed }) => [
                    styles.modalidadeCard,
                    {
                      backgroundColor: selecionada
                        ? colors.primarySoft
                        : colors.background,
                      borderColor: selecionada
                        ? colors.primary
                        : colors.border,
                      borderRadius: radius.md,
                      padding: spacing.sm + 4,
                    },
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={styles.modalidadeTopo}>
                    <AppText
                      variant="label"
                      color={selecionada ? 'primary' : 'text'}
                    >
                      {mod.titulo}
                    </AppText>
                    <Ionicons
                      name={
                        selecionada ? 'checkmark-circle' : 'ellipse-outline'
                      }
                      size={18}
                      color={selecionada ? colors.primary : colors.textMuted}
                    />
                  </View>

                  <AppText
                    variant="title"
                    color={selecionada ? 'primary' : 'text'}
                    style={styles.modalidadeQtd}
                  >
                    {mod.quantidade}
                  </AppText>
                  <AppText variant="caption" color="textMuted">
                    questões · {mod.tempoEstimado}
                  </AppText>
                </Pressable>
              );
            })}
          </View>

          <AppText variant="caption" color="textMuted">
            {modalidadeAtual.descricao}
          </AppText>

          <View
            style={[
              styles.avisoBox,
              {
                backgroundColor: colors.warningSoft,
                borderRadius: radius.sm,
                padding: spacing.sm,
              },
            ]}
          >
            <Ionicons
              name="alert-circle-outline"
              size={16}
              color={colors.warning}
            />
            <AppText
              variant="caption"
              color="warning"
              style={{ flex: 1, fontSize: 12 }}
            >
              Sair do aplicativo durante o quiz finaliza a tentativa
              automaticamente, marcando questões não respondidas como incorretas.
            </AppText>
          </View>

          <Button
            title={`Iniciar ${modalidadeAtual.titulo} (${modalidadeAtual.quantidade} questões)`}
            onPress={() =>
              navigation.navigate('Quiz', { modalidade: modalidadeAtual.id })
            }
          />
        </Card>

        <Card style={{ gap: spacing.sm }}>
          <View style={styles.secaoTituloRow}>
            <Ionicons
              name="stats-chart-outline"
              size={19}
              color={colors.primary}
            />
            <AppText variant="subtitle">Seu desempenho geral</AppText>
          </View>

          <View style={[styles.metricasRow, { gap: spacing.sm }]}>
            <View
              style={[
                styles.metricaBox,
                { backgroundColor: colors.background, padding: spacing.sm + 4 },
              ]}
            >
              <AppText variant="title" color="primary">
                {resumo.tentativas}
              </AppText>
              <AppText variant="caption" color="textMuted">
                Tentativas
              </AppText>
            </View>

            <View
              style={[
                styles.metricaBox,
                { backgroundColor: colors.background, padding: spacing.sm + 4 },
              ]}
            >
              <AppText variant="title" color="success">
                {resumo.melhorPercentual !== null
                  ? `${resumo.melhorPercentual}%`
                  : '--'}
              </AppText>
              <AppText variant="caption" color="textMuted">
                Melhor nota
              </AppText>
            </View>

            <View
              style={[
                styles.metricaBox,
                { backgroundColor: colors.background, padding: spacing.sm + 4 },
              ]}
            >
              <AppText variant="title">
                {resumo.ultimoPercentual !== null
                  ? `${resumo.ultimoPercentual}%`
                  : '--'}
              </AppText>
              <AppText variant="caption" color="textMuted">
                Última nota
              </AppText>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  themeButton: {
    width: 44,
    height: 44,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secaoTopo: {
    gap: 2,
  },
  secaoTituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  filtroChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
  },
  modalidadesRow: {
    flexDirection: 'row',
  },
  modalidadeCard: {
    flex: 1,
    borderWidth: 1.5,
    gap: 2,
  },
  modalidadeTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  modalidadeQtd: {
    fontSize: 28,
    lineHeight: 32,
  },
  pressed: {
    opacity: 0.85,
  },
  avisoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  metricasRow: {
    flexDirection: 'row',
  },
  metricaBox: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
});
