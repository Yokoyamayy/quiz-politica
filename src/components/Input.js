import { StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function Input({
  label,
  error,
  style,
  containerStyle,
  ...props
}) {
  const { colors, radius, spacing } = useTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <AppText variant="label" style={{ marginBottom: spacing.xs }}>
          {label}
        </AppText>
      ) : null}

      <TextInput
        placeholderTextColor={colors.textMuted}
        style={[
          styles.input,
          {
            backgroundColor: colors.surface,
            color: colors.text,
            borderColor: error ? colors.danger : colors.border,
            borderRadius: radius.md,
            paddingHorizontal: spacing.md,
            paddingVertical: spacing.sm + 4,
          },
          style,
        ]}
        {...props}
      />

      {error ? (
        <AppText
          variant="caption"
          color="danger"
          style={{ marginTop: spacing.xs }}
        >
          {error}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    fontSize: 16,
  },
});
