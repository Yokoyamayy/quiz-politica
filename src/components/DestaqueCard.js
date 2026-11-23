import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function DestaqueCard({
  etiqueta,
  tituloArea,
  valorDestaque,
  descricao,
  percentualBarra,
  tipo = 'success',
}) {
  const { colors, radius, spacing } = useTheme();

  const corPrincipal = colors[tipo] ?? colors.primary;
  const corFundo = colors[`${tipo}Soft`] ?? colors.primarySoft;
  const largura = Math.max(4, Math.min(100, percentualBarra));

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: corFundo,
          borderColor: corPrincipal,
          borderRadius: radius.lg,
          padding: spacing.md,
          gap: spacing.xs + 2,
        },
      ]}
    >
      <View
        style={[
          styles.etiquetaPill,
          { backgroundColor: colors.surface, borderRadius: radius.pill },
        ]}
      >
        <AppText variant="caption" color={corPrincipal} style={styles.etiqueta}>
          {etiqueta}
        </AppText>
      </View>

      <AppText variant="label" style={styles.area} numberOfLines={2}>
        {tituloArea}
      </AppText>

      <View style={styles.valorRow}>
        <AppText variant="title" color={corPrincipal} style={styles.valor}>
          {valorDestaque}
        </AppText>
        <AppText variant="caption" color="textMuted" style={styles.descricao}>
          {descricao}
        </AppText>
      </View>

      <View
        style={[
          styles.trilha,
          { backgroundColor: colors.surface, borderRadius: radius.pill },
        ]}
      >
        <View
          style={[
            styles.barra,
            {
              width: `${largura}%`,
              backgroundColor: corPrincipal,
              borderRadius: radius.pill,
            },
          ]}
        />
        <View
          style={[
            styles.ponto,
            {
              left: `${largura}%`,
              borderColor: corPrincipal,
              backgroundColor: colors.surface,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
  },
  etiquetaPill: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  etiqueta: {
    fontSize: 11,
    fontWeight: '700',
  },
  area: {
    fontWeight: '700',
    fontSize: 15,
  },
  valorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 2,
  },
  valor: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  descricao: {
    flex: 1,
    fontSize: 12,
    lineHeight: 16,
  },
  trilha: {
    height: 7,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
    marginTop: 4,
  },
  barra: {
    height: '100%',
  },
  ponto: {
    position: 'absolute',
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 2.5,
    marginLeft: -6.5,
  },
});
