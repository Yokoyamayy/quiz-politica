import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function ScoreRing({
  percentual,
  label = 'ACERTO',
  color,
  size = 86,
}) {
  const { colors } = useTheme();
  const corBorda = color ?? colors.primary;

  return (
    <View
      style={[
        styles.anelExterno,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: corBorda,
          backgroundColor: colors.surface,
        },
      ]}
      accessibilityLabel={`${percentual}% de ${label.toLowerCase()}`}
    >
      <AppText
        variant="subtitle"
        color={corBorda}
        style={styles.valor}
      >
        {Math.round(percentual)}%
      </AppText>
      <AppText
        variant="caption"
        color="textMuted"
        style={styles.rotulo}
      >
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  anelExterno: {
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valor: {
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  rotulo: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
    lineHeight: 12,
  },
});
