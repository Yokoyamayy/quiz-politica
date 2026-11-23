import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOnline } from '../hooks/useOnline';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function BannerOffline() {
  const online = useOnline();
  const insets = useSafeAreaInsets();
  const { colors, spacing } = useTheme();

  if (online) return null;

  return (
    <View
      accessibilityRole="alert"
      accessibilityLiveRegion="polite"
      style={[
        styles.banner,
        {
          backgroundColor: colors.warningSoft,
          borderBottomColor: colors.warning,
          paddingTop: insets.top + spacing.xs,
          paddingBottom: spacing.xs + 2,
          paddingHorizontal: spacing.md,
          gap: spacing.xs + 2,
        },
      ]}
    >
      <Ionicons name="cloud-offline-outline" size={16} color={colors.warning} />
      <AppText
        variant="caption"
        color="warning"
        style={styles.texto}
        numberOfLines={2}
      >
        Sem conexão com a internet. O quiz segue funcionando normalmente offline.
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  texto: {
    flexShrink: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
});
