import { useEffect, useState } from 'react';
import {
  getThemeFromLocalStorage,
  saveThemeInLocalStorage,
  themes,
} from '../helpers';

export const useTheme = () => {
  const [isDarkTheme, setDarkTheme] = useState(
    getThemeFromLocalStorage() === themes.dark ? true : false
  );

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', getThemeFromLocalStorage());
  }, [isDarkTheme]);

  const toggleThemeChange = () => {
    saveThemeInLocalStorage(isDarkTheme ? themes.light : themes.dark);
    setDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleThemeChange };
};
