import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  accessibilityLabel,
  style,
}) {
  const { colors, radius, spacing } = useTheme();
  const isDisabled = disabled || loading;

  const variantStyles = {
    primary: {
      bg: colors.primary,
      text: colors.onPrimary,
      border: 'transparent',
      ripple: 'rgba(255, 255, 255, 0.22)',
    },
    secondary: {
      bg: colors.primarySoft,
      text: colors.primary,
      border: 'transparent',
      ripple: 'rgba(30, 64, 175, 0.15)',
    },
    outline: {
      bg: 'transparent',
      text: colors.text,
      border: colors.border,
      ripple: 'rgba(128, 128, 128, 0.15)',
    },
    danger: {
      bg: colors.danger,
      text: '#FFFFFF',
      border: 'transparent',
      ripple: 'rgba(255, 255, 255, 0.22)',
    },
  }[variant];

  return (
    <View
      style={[
        styles.wrapper,
        { borderRadius: radius.md },
        style,
      ]}
    >
      <Pressable
        onPress={onPress}
        disabled={isDisabled}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? title}
        accessibilityState={{ disabled: isDisabled, busy: loading }}
        android_ripple={{ color: variantStyles.ripple }}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: variantStyles.bg,
            borderColor: variantStyles.border,
            borderRadius: radius.md,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.sm + 4,
          },
          pressed && !isDisabled && styles.pressed,
          isDisabled && styles.disabled,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={variantStyles.text} />
        ) : (
          <AppText
            variant="label"
            color={variantStyles.text}
            style={styles.label}
          >
            {title}
          </AppText>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.85,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    textAlign: 'center',
  },
});
