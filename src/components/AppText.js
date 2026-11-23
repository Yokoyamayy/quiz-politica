import { Text } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export function AppText({
  variant = 'body',
  color = 'text',
  style,
  children,
  ...props
}) {
  const { colors, typography } = useTheme();
  const textColor = colors[color] ?? color;

  return (
    <Text style={[typography[variant], { color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
}
