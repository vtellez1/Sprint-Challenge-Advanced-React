import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1 data-testid="welcome">Welcome!</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        /> <p> Dark Mode </p>
      </div>
    </nav>
  );
};

export default Navbar;