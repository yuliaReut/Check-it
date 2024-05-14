import React, {createContext, useState, useMemo} from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const themeValue = useMemo(
    () => ({
      isDarkTheme,
      toggleTheme,
    }),
    [isDarkTheme],
  );

  return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {ThemeProvider, ThemeContext};
