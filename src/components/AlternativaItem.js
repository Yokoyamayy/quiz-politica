import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function AlternativaItem({
  letra,
  texto,
  status = 'padrao',
  onPress,
  disabled = false,
}) {
  const { colors, radius, spacing } = useTheme();

  const paleta = {
    padrao: {
      bg: colors.surface,
      border: colors.border,
      badgeBg: colors.background,
      badgeText: colors.text,
      tag: null,
    },
    selecionada: {
      bg: colors.primarySoft,
      border: colors.primary,
      badgeBg: colors.primary,
      badgeText: colors.onPrimary,
      tag: null,
    },
    correta: {
      bg: colors.successSoft,
      border: colors.success,
      badgeBg: colors.success,
      badgeText: '#FFFFFF',
      tag: 'Correta',
    },
    errada: {
      bg: colors.dangerSoft,
      border: colors.danger,
      badgeBg: colors.danger,
      badgeText: '#FFFFFF',
      tag: 'Sua resposta',
    },
  }[status];

  return (
    <View style={[styles.wrapper, { borderRadius: radius.md }]}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={`Alternativa ${letra}: ${texto}`}
        accessibilityState={{ selected: status === 'selecionada', disabled }}
        android_ripple={{ color: 'rgba(128, 128, 128, 0.15)' }}
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: paleta.bg,
            borderColor: paleta.border,
            borderRadius: radius.md,
            padding: spacing.md,
            gap: spacing.sm + 4,
          },
          pressed && !disabled && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.badge,
            {
              backgroundColor: paleta.badgeBg,
              borderRadius: radius.pill,
            },
          ]}
        >
          <AppText variant="label" color={paleta.badgeText}>
            {letra}
          </AppText>
        </View>

        <View style={styles.textoContainer}>
          <AppText variant="body">{texto}</AppText>
          {paleta.tag ? (
            <AppText
              variant="caption"
              color={status === 'correta' ? 'success' : 'danger'}
              style={{ marginTop: spacing.xs, fontWeight: '600' }}
            >
              {paleta.tag}
            </AppText>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  container: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
  },
  pressed: {
    opacity: 0.85,
  },
  badge: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoContainer: {
    flex: 1,
  },
});
