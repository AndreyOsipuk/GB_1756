import React from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

export const defaultState = {
  dark: true,
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);
