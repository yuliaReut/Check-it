import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
// Создание контекста
 const ThemeContext = createContext();

// Компонент-провайдер контекста
 const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Функция для переключения темы
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  // Оборачиваем объект, передаваемый в value провайдера, через useMemo
  const themeValue = useMemo(
    () => ({
      isDarkTheme,
      toggleTheme,
    }),
    [isDarkTheme]
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export  {ThemeProvider, ThemeContext};