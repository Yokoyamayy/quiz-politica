import { Platform } from 'react-native';

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 6,
  md: 12,
  lg: 16,
  pill: 999,
};

export const typography = {
  title: { fontSize: 24, fontWeight: '700', lineHeight: 32 },
  subtitle: { fontSize: 18, fontWeight: '600', lineHeight: 26 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  label: { fontSize: 14, fontWeight: '600', lineHeight: 20 },
  caption: { fontSize: 13, fontWeight: '400', lineHeight: 18 },
};

export const lightColors = {
  background: '#F3F5F9',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  border: '#D9E0EC',
  text: '#12141C',
  textMuted: '#5B6475',
  primary: '#1E40AF',
  primarySoft: '#DBEAFE',
  onPrimary: '#FFFFFF',
  success: '#15803D',
  successSoft: '#DCFCE7',
  danger: '#DC2626',
  dangerSoft: '#FEE2E2',
  warning: '#B45309',
  warningSoft: '#FEF3C7',
};

export const darkColors = {
  background: '#0F1117',
  surface: '#1A1D27',
  surfaceElevated: '#232838',
  border: '#2E3446',
  text: '#F3F4F6',
  textMuted: '#9CA3AF',
  primary: '#60A5FA',
  primarySoft: '#1E3A5F',
  onPrimary: '#0F1117',
  success: '#4ADE80',
  successSoft: '#143322',
  danger: '#F87171',
  dangerSoft: '#3B181C',
  warning: '#FBBF24',
  warningSoft: '#3A2A10',
};

export function shadow(level = 1, isDark = false) {

  if (isDark) {
    return {};
  }

  return Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: level * 2 },
      shadowOpacity: 0.06 + level * 0.03,
      shadowRadius: level * 3,
    },
    android: {
      elevation: level * 2,
    },
    default: {},
  });
}
