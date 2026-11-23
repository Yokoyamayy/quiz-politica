import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppText } from '../components/AppText';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { buscarCargoPorId } from '../data/cargos';
import {
  buscarAreaPorId,
  QUANTIDADE_MINI_QUIZ_AREA,
} from '../data/perguntas';
import { useTheme } from '../theme/ThemeProvider';

export default function DetalheCargoScreen({ route, navigation }) {
  const { cargoId } = route.params ?? {};
  const { colors, isDark, radius, spacing } = useTheme();

  const cargo = buscarCargoPorId(cargoId);

  if (!cargo) {
    return (
      <SafeAreaView
        edges={['bottom']}
        style={[
          styles.safeArea,
          styles.centralizado,
          { backgroundColor: colors.background, padding: spacing.lg },
        ]}
      >
        <AppText variant="body">Cargo político não encontrado.</AppText>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
          style={{ marginTop: spacing.md }}
        />
      </SafeAreaView>
    );
  }

  const areaRelacionada = buscarAreaPorId(cargo.areaId);
  const fundoHero = isDark ? cargo.corEscuraSuave : cargo.corSuave;
  const corDestaque = isDark ? '#F8FAFC' : cargo.cor;

  const fichaTecnica = [
    { rotulo: 'Mandato', valor: cargo.mandato, icone: 'time-outline' },
    { rotulo: 'Idade mínima', valor: cargo.idadeMinima, icone: 'person-outline' },
    { rotulo: 'Data de posse', valor: cargo.posse, icone: 'calendar-outline' },
    { rotulo: 'Reeleição', valor: cargo.reeleicao, icone: 'repeat-outline' },
  ];

  return (
    <SafeAreaView
      edges={['bottom']}
      style={[styles.safeArea, { backgroundColor: colors.background }]}
    >
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
      >

        <View
          style={[
            styles.heroCard,
            {
              backgroundColor: fundoHero,
              borderColor: corDestaque,
              borderRadius: radius.lg,
              padding: spacing.lg,
              gap: spacing.sm,
            },
          ]}
        >
          <View style={styles.heroTopRow}>
            <View
              style={[
                styles.heroIconBox,
                { backgroundColor: colors.surface, borderRadius: radius.md },
              ]}
            >
              <Ionicons name={cargo.icone} size={28} color={corDestaque} />
            </View>

            <View style={styles.badgesCol}>
              <View
                style={[
                  styles.pill,
                  { backgroundColor: colors.surface, borderRadius: radius.pill },
                ]}
              >
                <AppText
                  variant="caption"
                  color={corDestaque}
                  style={styles.pillTexto}
                >
                  Esfera {cargo.esfera} · Poder {cargo.poder}
                </AppText>
              </View>
              <AppText variant="caption" color="textMuted">
                {cargo.casa}
              </AppText>
            </View>
          </View>

          <AppText variant="title" style={{ marginTop: spacing.xs }}>
            {cargo.nome}
          </AppText>
          <AppText variant="body">{cargo.resumo}</AppText>
        </View>

        <Card level={1} style={{ gap: spacing.sm }}>
          <AppText variant="subtitle">Ficha constitucional</AppText>
          <View style={[styles.gridFicha, { gap: spacing.sm }]}>
            {fichaTecnica.map((item) => (
              <View
                key={item.rotulo}
                style={[
                  styles.fichaItem,
                  {
                    backgroundColor: colors.background,
                    borderRadius: radius.md,
                    padding: spacing.sm + 4,
                  },
                ]}
              >
                <View style={styles.fichaHeader}>
                  <Ionicons name={item.icone} size={15} color={corDestaque} />
                  <AppText variant="caption" color="textMuted">
                    {item.rotulo}
                  </AppText>
                </View>
                <AppText variant="label" style={{ marginTop: 4 }}>
                  {item.valor}
                </AppText>
              </View>
            ))}
          </View>

          <View
            style={[
              styles.sistemaBox,
              {
                backgroundColor: colors.background,
                borderRadius: radius.md,
                padding: spacing.sm + 4,
              },
            ]}
          >
            <AppText variant="caption" color="textMuted">
              Sistema eleitoral
            </AppText>
            <AppText variant="label" style={{ marginTop: 2 }}>
              {cargo.sistemaEleitoral}
            </AppText>
          </View>
        </Card>

        <Card level={1} style={{ gap: spacing.sm }}>
          <View style={styles.secaoHeader}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color={colors.primary}
            />
            <AppText variant="subtitle">Como funciona o trabalho</AppText>
          </View>
          <AppText variant="body" color="textMuted">
            {cargo.comoFunciona}
          </AppText>
        </Card>

        <Card level={1} style={{ gap: spacing.sm }}>
          <View style={styles.secaoHeader}>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              color={colors.success}
            />
            <AppText variant="subtitle">Principais atribuições</AppText>
          </View>
          <View style={{ gap: spacing.sm }}>
            {cargo.atribuicoes.map((item, idx) => (
              <View key={idx} style={styles.listaItem}>
                <Ionicons
                  name="checkmark-circle"
                  size={18}
                  color={colors.success}
                  style={styles.listaIcone}
                />
                <AppText variant="body" style={styles.listaTexto}>
                  {item}
                </AppText>
              </View>
            ))}
          </View>
        </Card>

        <Card level={1} style={{ gap: spacing.sm }}>
          <View style={styles.secaoHeader}>
            <Ionicons name="bulb-outline" size={20} color={colors.warning} />
            <AppText variant="subtitle">Exemplos no dia a dia</AppText>
          </View>
          <View style={{ gap: spacing.sm }}>
            {cargo.exemplosPraticos.map((exemplo, idx) => (
              <View
                key={idx}
                style={[
                  styles.exemploBox,
                  {
                    backgroundColor: colors.background,
                    borderRadius: radius.md,
                    padding: spacing.sm + 4,
                  },
                ]}
              >
                <AppText variant="body">{exemplo}</AppText>
              </View>
            ))}
          </View>
        </Card>

        <Card level={1} style={{ gap: spacing.xs }}>
          <View style={styles.secaoHeader}>
            <Ionicons
              name="git-compare-outline"
              size={20}
              color={colors.primary}
            />
            <AppText variant="subtitle">Limites e fiscalização</AppText>
          </View>
          <AppText variant="body" color="textMuted">
            {cargo.freiosEContrapesos}
          </AppText>
        </Card>

        <Card level={2} style={{ gap: spacing.sm }}>
          <View style={styles.secaoHeader}>
            <Ionicons name="flash-outline" size={20} color={colors.primary} />
            <AppText variant="subtitle">Treino focado nesta área</AppText>
          </View>
          <AppText variant="caption" color="textMuted">
            Responda {QUANTIDADE_MINI_QUIZ_AREA} questões sorteadas
            exclusivamente sobre{' '}
            {areaRelacionada?.nome ?? 'este tema legislativo'}.
          </AppText>
          <Button
            title={`Mini-Quiz: ${areaRelacionada?.nomeCurto ?? cargo.nome} (${QUANTIDADE_MINI_QUIZ_AREA} questões)`}
            onPress={() =>
              navigation.navigate('Quiz', {
                modalidade: 'area',
                areaId: cargo.areaId,
                areaNome: areaRelacionada?.nomeCurto ?? cargo.nome,
              })
            }
          />
          <Button
            title="Voltar ao início"
            variant="outline"
            onPress={() => navigation.goBack()}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centralizado: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroCard: {
    borderWidth: 1,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  heroIconBox: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgesCol: {
    flex: 1,
    gap: 4,
  },
  pill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pillTexto: {
    fontSize: 12,
    fontWeight: '700',
  },
  gridFicha: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  fichaItem: {
    width: '48%',
    flexGrow: 1,
  },
  fichaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sistemaBox: {
    width: '100%',
  },
  secaoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listaItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  listaIcone: {
    marginTop: 3,
  },
  listaTexto: {
    flex: 1,
  },
  exemploBox: {
    width: '100%',
  },
});
