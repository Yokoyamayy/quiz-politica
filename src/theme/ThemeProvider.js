import { createContext, useContext, useState } from 'react';
import {
  darkColors,
  lightColors,
  radius,
  shadow,
  spacing,
  typography,
} from './tokens';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {

  const [themeMode, setThemeMode] = useState('dark');
  const isDark = themeMode === 'dark';
  const colors = isDark ? darkColors : lightColors;

  function toggleTheme() {
    setThemeMode((atual) => (atual === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        setThemeMode,
        toggleTheme,
        isDark,
        colors,
        spacing,
        radius,
        typography,
        shadow: (level = 1) => shadow(level, isDark),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider.');
  }
  return ctx;
}
