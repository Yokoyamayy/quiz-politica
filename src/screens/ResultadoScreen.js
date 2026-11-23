import { Ionicons } from '@expo/vector-icons';
import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { DestaqueCard } from '../components/DestaqueCard';
import { EixoDesempenhoItem } from '../components/EixoDesempenhoItem';
import { ScoreRing } from '../components/ScoreRing';
import { buscarCargoPorId } from '../data/cargos';
import { buscarRespostasTentativa } from '../database/db';
import { useTheme } from '../theme/ThemeProvider';
import { calcularEstatisticasTentativa } from '../utils/estatisticas';

export default function ResultadoScreen({ route, navigation }) {
  const { tentativa, interrompido = false } = route.params;
  const { colors, radius, spacing } = useTheme();
  const { width } = useWindowDimensions();

  const numColunas = width < 480 ? 3 : width < 900 ? 5 : 6;
  const telaLarga = width >= 540;

  const [respostas, setRespostas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function carregarRespostas() {
      try {
        const lista = await buscarRespostasTentativa(tentativa.id);
        if (ativo) setRespostas(lista);
      } catch (erro) {
        console.error('Erro ao carregar respostas da tentativa:', erro);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarRespostas();

    return () => {
      ativo = false;
    };
  }, [tentativa.id]);

  const stats = useMemo(
    () => calcularEstatisticasTentativa(tentativa, respostas),
    [tentativa, respostas]
  );

  const erros = useMemo(
    () => respostas.filter((r) => r.acertou === 0),
    [respostas]
  );

  const corPerfil = colors[stats.perfil.corKey] ?? colors.primary;
  const corSuavePerfil =
    colors[`${stats.perfil.corKey}Soft`] ?? colors.primarySoft;

  const ehMiniQuiz = stats.modalidade === 'area';
  const etiquetaModo = ehMiniQuiz
    ? `Mini-Quiz · ${stats.areaUnica?.nomeCurto ?? 'Área'}`
    : stats.modalidade === 'longo'
    ? 'Quiz Longo · 60q'
    : 'Quiz Curto · 30q';

  function renderHeader() {
    return (
      <View style={{ gap: spacing.md, marginBottom: spacing.md }}>
        {interrompido ? (
          <View
            style={[
              styles.avisoInterrupcao,
              {
                backgroundColor: colors.warningSoft,
                borderColor: colors.warning,
                borderRadius: radius.md,
                padding: spacing.md,
              },
            ]}
          >
            <AppText
              variant="caption"
              color="warning"
              style={{ fontWeight: '600' }}
            >
              Quiz finalizado automaticamente porque o aplicativo foi
              interrompido. Questões não respondidas foram contabilizadas como
              incorretas.
            </AppText>
          </View>
        ) : null}

        <View
          style={[
            styles.heroCard,
            {
              backgroundColor: corSuavePerfil,
              borderColor: corPerfil,
              borderRadius: radius.lg,
              padding: spacing.lg,
              gap: spacing.md,
            },
          ]}
        >
          <View style={styles.heroTopoRow}>
            <View style={styles.heroTextoCol}>
              <View style={styles.badgesRow}>
                <View
                  style={[
                    styles.badgeEscuro,
                    { backgroundColor: corPerfil, borderRadius: radius.pill },
                  ]}
                >
                  <AppText
                    variant="caption"
                    color="#FFFFFF"
                    style={styles.badgeTexto}
                  >
                    {stats.perfil.badge}
                  </AppText>
                </View>

                <View
                  style={[
                    styles.badgeModo,
                    {
                      backgroundColor: colors.surface,
                      borderRadius: radius.pill,
                    },
                  ]}
                >
                  <AppText
                    variant="caption"
                    color="textMuted"
                    style={styles.badgeTexto}
                  >
                    {etiquetaModo}
                  </AppText>
                </View>
              </View>

              <AppText variant="title" style={styles.heroTitulo}>
                {stats.perfil.titulo}
              </AppText>
            </View>

            <ScoreRing
              percentual={stats.percentualAcertos}
              label="ACERTO"
              color={corPerfil}
              size={84}
            />
          </View>

          <View
            style={[
              styles.citacaoBox,
              {
                backgroundColor: colors.surface,
                borderRadius: radius.md,
                padding: spacing.md,
              },
            ]}
          >
            <AppText variant="body" style={styles.citacaoTexto}>
              “{stats.perfil.descricao}”
            </AppText>
            <AppText
              variant="caption"
              color="textMuted"
              style={{ marginTop: spacing.xs + 2 }}
            >
              Resumo geral: {stats.percentualAcertos}% de acertos (
              {stats.totalAcertos}) e {stats.percentualErros}% de erros (
              {stats.totalErros}) em {stats.totalQuestoes} questões.
            </AppText>
          </View>

          <View style={[styles.resumoStrip, { gap: spacing.sm }]}>
            <View
              style={[
                styles.miniStat,
                { backgroundColor: colors.surface, borderRadius: radius.md },
              ]}
            >
              <AppText variant="subtitle" color="success">
                {stats.percentualAcertos}%
              </AppText>
              <AppText variant="caption" color="textMuted">
                {stats.totalAcertos} acertos
              </AppText>
            </View>

            <View
              style={[
                styles.miniStat,
                { backgroundColor: colors.surface, borderRadius: radius.md },
              ]}
            >
              <AppText variant="subtitle" color="danger">
                {stats.percentualErros}%
              </AppText>
              <AppText variant="caption" color="textMuted">
                {stats.totalErros} erros
              </AppText>
            </View>

            <View
              style={[
                styles.miniStat,
                { backgroundColor: colors.surface, borderRadius: radius.md },
              ]}
            >
              <AppText variant="subtitle" color="primary">
                {stats.totalQuestoes}
              </AppText>
              <AppText variant="caption" color="textMuted">
                Questões
              </AppText>
            </View>
          </View>
        </View>

        {!ehMiniQuiz && stats.pontoForte ? (
          <Card level={1} style={{ gap: spacing.sm }}>
            <AppText variant="subtitle">Destaques do seu desempenho</AppText>
            <View
              style={[
                telaLarga ? styles.destaquesRow : styles.destaquesCol,
                { gap: spacing.sm },
              ]}
            >
              <DestaqueCard
                etiqueta="Onde você mais acertou"
                tituloArea={stats.pontoForte.nome}
                valorDestaque={`${stats.pontoForte.percentualAcertos}%`}
                descricao={`de acerto nesta área (${stats.pontoForte.acertos} de ${stats.pontoForte.total} questões).`}
                percentualBarra={stats.pontoForte.percentualAcertos}
                tipo="success"
              />

              {stats.focoEstudo ? (
                <DestaqueCard
                  etiqueta="Onde você deve estudar mais"
                  tituloArea={stats.focoEstudo.nome}
                  valorDestaque={`${stats.focoEstudo.percentualErros}%`}
                  descricao={`de erros nesta área (${stats.focoEstudo.erros} ${
                    stats.focoEstudo.erros === 1 ? 'erro' : 'erros'
                  } em ${stats.focoEstudo.total} questões).`}
                  percentualBarra={stats.focoEstudo.percentualErros}
                  tipo="danger"
                />
              ) : (
                <DestaqueCard
                  etiqueta="Desempenho impecável"
                  tituloArea="Todas as áreas dominadas"
                  valorDestaque="100%"
                  descricao="Você não errou nenhuma questão nesta tentativa!"
                  percentualBarra={100}
                  tipo="primary"
                />
              )}
            </View>
          </Card>
        ) : null}

        {stats.areas.length > 0 ? (
          <Card level={1} style={{ gap: spacing.md }}>
            <View style={{ gap: 2 }}>
              <AppText variant="subtitle">
                {ehMiniQuiz ? 'Desempenho na área treinada' : 'Seus eixos legislativos'}
              </AppText>
              <AppText variant="caption" color="textMuted">
                Percentual de acertos, erros e recomendações de estudo
              </AppText>
            </View>

            <View style={{ gap: spacing.md + 2 }}>
              {stats.areas.map((area) => (
                <EixoDesempenhoItem key={area.id} area={area} />
              ))}
            </View>
          </Card>
        ) : null}

        {!ehMiniQuiz && stats.rankingEstudo.length > 0 ? (
          <Card level={1} style={{ gap: spacing.sm }}>
            <View style={{ gap: 2 }}>
              <AppText variant="subtitle">Prioridades de estudo</AppText>
              <AppText variant="caption" color="textMuted">
                Toque em uma área para revisar o cargo e fazer um mini-quiz
                focado
              </AppText>
            </View>

            <View style={{ gap: spacing.xs + 2 }}>
              {stats.rankingEstudo.map((area, index) => {
                const cargoRelacionado = buscarCargoPorId(
                  area.cargoRelacionadoId
                );
                const corItem =
                  colors[area.classificacao.status] ?? colors.primary;

                return (
                  <Pressable
                    key={area.id}
                    onPress={() => {
                      if (cargoRelacionado) {
                        navigation.navigate('DetalheCargo', {
                          cargoId: cargoRelacionado.id,
                          cargoNome: cargoRelacionado.nome,
                        });
                      }
                    }}
                    style={({ pressed }) => [
                      styles.rankingItem,
                      {
                        backgroundColor: colors.background,
                        borderRadius: radius.md,
                        padding: spacing.sm + 4,
                      },
                      pressed && styles.pressed,
                    ]}
                  >
                    <AppText
                      variant="label"
                      color="textMuted"
                      style={styles.rankingNumero}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </AppText>

                    <View style={styles.rankingCentro}>
                      <AppText variant="label" numberOfLines={1}>
                        {area.nomeCurto}
                      </AppText>
                      <AppText variant="caption" color="textMuted">
                        {area.erros > 0
                          ? `${area.erros} ${
                              area.erros === 1 ? 'erro' : 'erros'
                            } · Revisar ${cargoRelacionado?.nome ?? 'conteúdo'}`
                          : `Sem erros · Domínio consolidado`}
                      </AppText>
                    </View>

                    <View style={styles.rankingDireita}>
                      <AppText
                        variant="label"
                        color={corItem}
                        style={{ fontWeight: '800' }}
                      >
                        {area.percentualAcertos}%
                      </AppText>
                      <Ionicons
                        name="chevron-forward"
                        size={15}
                        color={colors.textMuted}
                      />
                    </View>
                  </Pressable>
                );
              })}
            </View>
          </Card>
        ) : null}

        <View style={{ gap: spacing.xs, marginTop: spacing.xs }}>
          <AppText variant="subtitle">
            {erros.length > 0
              ? `Revisar questões erradas (${erros.length})`
              : 'Nenhuma questão errada!'}
          </AppText>
          {erros.length > 0 ? (
            <AppText variant="caption" color="textMuted">
              Toque no número de uma questão para ver o enunciado, o gabarito e
              a explicação constitucional.
            </AppText>
          ) : (
            <AppText variant="body" color="success">
              Parabéns! Você gabaritou todas as {stats.totalQuestoes} questões
              desta tentativa.
            </AppText>
          )}
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={{ gap: spacing.sm, marginTop: spacing.lg }}>
        {ehMiniQuiz && stats.areaUnica ? (
          <>
            <Button
              title={`Refazer Mini-Quiz (${stats.areaUnica.nomeCurto})`}
              onPress={() =>
                navigation.replace('Quiz', {
                  modalidade: 'area',
                  areaId: stats.areaUnica.id,
                  areaNome: stats.areaUnica.nomeCurto,
                })
              }
            />
            <Button
              title="Fazer Quiz Curto Geral (30 questões)"
              variant="secondary"
              onPress={() =>
                navigation.replace('Quiz', { modalidade: 'curto' })
              }
            />
          </>
        ) : (
          <>
            <Button
              title={
                stats.modalidade === 'longo'
                  ? 'Refazer Quiz Longo (60 questões)'
                  : 'Refazer Quiz Curto (30 questões)'
              }
              onPress={() =>
                navigation.replace('Quiz', { modalidade: stats.modalidade })
              }
            />
            {stats.modalidade === 'curto' ? (
              <Button
                title="Desafiar no Quiz Longo (60 questões)"
                variant="secondary"
                onPress={() =>
                  navigation.replace('Quiz', { modalidade: 'longo' })
                }
              />
            ) : null}
          </>
        )}
        <Button
          title="Voltar ao início"
          variant="outline"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      {carregando ? (
        <View style={styles.carregandoBox}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          key={`colunas-${numColunas}`}
          data={erros}
          numColumns={numColunas}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ padding: spacing.lg }}
          columnWrapperStyle={
            erros.length > 0
              ? { gap: spacing.sm, marginBottom: spacing.sm }
              : null
          }
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View style={[styles.itemWrapper, { borderRadius: radius.md }]}>
              <Pressable
                onPress={() =>
                  navigation.navigate('DetalheErro', { erro: item })
                }
                accessibilityRole="button"
                accessibilityLabel={`Ver detalhes da questão ${item.ordem_exibicao}`}
                android_ripple={{ color: 'rgba(220, 38, 38, 0.2)' }}
                style={({ pressed }) => [
                  styles.erroChip,
                  {
                    backgroundColor: colors.dangerSoft,
                    borderColor: colors.danger,
                    borderRadius: radius.md,
                    paddingVertical: spacing.md,
                  },
                  pressed && styles.pressed,
                ]}
              >
                <AppText variant="label" color="danger">
                  Questão {item.ordem_exibicao}
                </AppText>
                <AppText variant="caption" color="textMuted">
                  {item.resposta_usuario === 'SEM_RESPOSTA'
                    ? 'Não respondida'
                    : `Marcou ${item.resposta_usuario}`}
                </AppText>
              </Pressable>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  carregandoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avisoInterrupcao: {
    borderWidth: 1,
  },
  heroCard: {
    borderWidth: 1,
  },
  heroTopoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  heroTextoCol: {
    flex: 1,
    gap: 8,
  },
  badgesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  badgeEscuro: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeModo: {
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  badgeTexto: {
    fontSize: 11,
    fontWeight: '700',
  },
  heroTitulo: {
    fontSize: 22,
    lineHeight: 28,
  },
  citacaoBox: {
    width: '100%',
  },
  citacaoTexto: {
    fontWeight: '500',
    lineHeight: 22,
  },
  resumoStrip: {
    flexDirection: 'row',
  },
  miniStat: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  destaquesRow: {
    flexDirection: 'row',
  },
  destaquesCol: {
    flexDirection: 'column',
  },
  rankingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rankingNumero: {
    width: 24,
    fontWeight: '700',
  },
  rankingCentro: {
    flex: 1,
    gap: 2,
  },
  rankingDireita: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  itemWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  erroChip: {
    minHeight: 64,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  pressed: {
    opacity: 0.82,
  },
});
