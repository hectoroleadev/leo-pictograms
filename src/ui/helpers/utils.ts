export const themes = { dark: 'dark', light: 'light' };

export const getThemeFromLocalStorage = (): string => {
  return localStorage.getItem('theme') || 'light';
};

export const saveThemeInLocalStorage = (theme: string) => {
  localStorage.setItem('theme', theme);
};
