import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { AppText } from './AppText';

export function CargoCard({ cargo, onPress }) {
  const { colors, isDark, radius, spacing, shadow } = useTheme();

  const fundoIcone = isDark ? cargo.corEscuraSuave : cargo.corSuave;
  const corIcone = isDark ? '#F8FAFC' : cargo.cor;

  return (
    <View style={[styles.wrapper, { borderRadius: radius.lg }, shadow(1)]}>
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Ver como funciona o cargo de ${cargo.nome}`}
        android_ripple={{ color: 'rgba(128, 128, 128, 0.14)' }}
        style={({ pressed }) => [
          styles.card,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
            borderRadius: radius.lg,
            padding: spacing.md,
            gap: spacing.sm + 4,
          },
          pressed && styles.pressed,
        ]}
      >
        <View
          style={[
            styles.iconBox,
            { backgroundColor: fundoIcone, borderRadius: radius.md },
          ]}
        >
          <Ionicons name={cargo.icone} size={22} color={corIcone} />
        </View>

        <View style={styles.conteudo}>
          <View style={styles.topRow}>
            <AppText variant="label" style={styles.titulo} numberOfLines={1}>
              {cargo.nome}
            </AppText>
            <View
              style={[
                styles.badgeEsfera,
                {
                  backgroundColor: fundoIcone,
                  borderRadius: radius.pill,
                },
              ]}
            >
              <AppText
                variant="caption"
                color={corIcone}
                style={styles.badgeTexto}
              >
                {cargo.esfera}
              </AppText>
            </View>
          </View>

          <AppText variant="caption" color="textMuted" numberOfLines={2}>
            {cargo.resumo}
          </AppText>

          <View style={styles.metaRow}>
            <AppText variant="caption" color="textMuted" style={styles.metaText}>
              Poder {cargo.poder} · Mandato de {cargo.mandato}
            </AppText>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={18}
          color={colors.textMuted}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  pressed: {
    opacity: 0.86,
  },
  iconBox: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    flex: 1,
    gap: 4,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  titulo: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  badgeEsfera: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  badgeTexto: {
    fontSize: 11,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  metaText: {
    fontSize: 12,
    fontWeight: '500',
  },
});
