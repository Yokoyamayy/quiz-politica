import { StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export function Card({ level = 1, style, children }) {
  const { colors, radius, spacing, shadow } = useTheme();

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderRadius: radius.md,
          padding: spacing.md,
        },
        shadow(level),
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: StyleSheet.hairlineWidth,
  },
});
