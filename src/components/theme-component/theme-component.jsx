import React, {useContext} from 'react';
import { ThemeContext } from '../../providers/theme-provider';

const ThemeComponent = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="theme">
      <button className="user-block__button" onClick={toggleTheme}>
      <svg className="user-block__svg" viewBox="0 0 24 24" width="24" height="24" fill="none"><use xlinkHref={`#sun-${isDarkTheme?'dark':'light'}`}></use></svg>
      </button>
    </div>
  );
};

export default ThemeComponent;
