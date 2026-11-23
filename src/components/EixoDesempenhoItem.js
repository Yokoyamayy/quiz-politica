import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function EixoDesempenhoItem({ area }) {
  const { colors, radius, spacing } = useTheme();

  const corStatus = colors[area.classificacao.status] ?? colors.primary;
  const corSuaveStatus =
    colors[`${area.classificacao.status}Soft`] ?? colors.primarySoft;

  const larguraBarra = Math.max(4, Math.min(100, area.percentualAcertos));

  return (
    <View style={[styles.container, { gap: spacing.xs + 2 }]}>
      <View style={styles.topoRow}>
        <AppText variant="label" style={styles.nomeArea} numberOfLines={2}>
          {area.nome}
        </AppText>
        <AppText
          variant="caption"
          color={corStatus}
          style={styles.percentualTexto}
        >
          {area.percentualAcertos}% acerto
        </AppText>
      </View>

      <View
        style={[
          styles.trilha,
          { backgroundColor: colors.border, borderRadius: radius.pill },
        ]}
      >
        <View
          style={[
            styles.preenchimento,
            {
              width: `${larguraBarra}%`,
              backgroundColor: corStatus,
              borderRadius: radius.pill,
            },
          ]}
        />
        <View
          style={[
            styles.marcador,
            {
              left: `${larguraBarra}%`,
              borderColor: corStatus,
              backgroundColor: colors.surface,
            },
          ]}
        />
      </View>

      <View style={styles.baseRow}>
        <View
          style={[
            styles.pill,
            {
              backgroundColor: corSuaveStatus,
              borderRadius: radius.pill,
            },
          ]}
        >
          <Ionicons name={area.icone} size={13} color={corStatus} />
          <AppText variant="caption" color={corStatus} style={styles.pillTexto}>
            {area.classificacao.label}
          </AppText>
        </View>

        <AppText variant="caption" color="textMuted" style={styles.contagem}>
          {area.acertos}/{area.total} acertos · {area.percentualErros}% erros
        </AppText>
      </View>

      {area.percentualAcertos < 70 ? (
        <View
          style={[
            styles.dicaBox,
            {
              backgroundColor: colors.background,
              borderRadius: radius.sm,
              paddingHorizontal: spacing.sm,
              paddingVertical: spacing.xs + 2,
            },
          ]}
        >
          <AppText variant="caption" color="textMuted" style={styles.dicaTexto}>
            Estude: {area.dicaEstudo}
          </AppText>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  nomeArea: {
    flex: 1,
    fontWeight: '700',
  },
  percentualTexto: {
    fontWeight: '700',
  },
  trilha: {
    height: 8,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    marginVertical: 4,
  },
  preenchimento: {
    height: '100%',
  },
  marcador: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    marginLeft: -7,
  },
  baseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    flexWrap: 'wrap',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  pillTexto: {
    fontSize: 12,
    fontWeight: '700',
  },
  contagem: {
    fontSize: 12,
  },
  dicaBox: {
    marginTop: 2,
  },
  dicaTexto: {
    fontSize: 12,
    lineHeight: 17,
  },
});
