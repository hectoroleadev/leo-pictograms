import { useEffect, useState } from 'react';

const getTheme = (): string => {
  return localStorage.getItem('theme') || 'light';
};

export const useTheme = () => {
  const themes = { dark: 'dark', light: 'light' };

  const [isDarkTheme, setDarkTheme] = useState(
    getTheme() === themes.dark ? true : false
  );

  const setTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
  };

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', getTheme());
  }, [isDarkTheme]);

  const toggleThemeChange = () => {
    setTheme(isDarkTheme ? themes.light : themes.dark);
    setDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleThemeChange };
};
