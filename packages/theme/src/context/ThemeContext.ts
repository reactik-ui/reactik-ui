import { createContext, Context } from 'react';
import theme, { Theme } from '../theme';

export const ThemeContext: Context<Theme> = createContext(theme);
export const ThemeProvider = ThemeContext.Provider;
