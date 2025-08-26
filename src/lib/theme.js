const THEME_KEY = 'Suraj Portfolio-theme';
export const THEMES = ['neon', 'ocean', 'sunset', 'light'];

export function applyTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

export function ensureInitialTheme() {
  applyTheme(localStorage.getItem(THEME_KEY) || 'neon');
}
