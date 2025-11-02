// ThemeProvider.jsx
'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Sun, Moon } from 'lucide-react';

// 1. Create the Context
const ThemeContext = createContext({
  theme: 'light', // Default theme
  toggleTheme: () => {}, // Placeholder function
  ThemeIcon: Sun, // Default Icon
});

// 2. Custom Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// 3. Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    // Apply the class to the root HTML element
    document.documentElement.className = savedTheme;
  }, []);

  // Effect to sync theme state to DOM and localStorage
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Memoize the icon component for the current theme
  const ThemeIcon = useMemo(() => {
      return theme === 'dark' ? Sun : Moon;
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme,
    ThemeIcon,
  }), [theme, ThemeIcon]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// NOTE: To make this work, you must ensure your main wrapper component (e.g., in _app.js or layout.js)
// is wrapped with <ThemeProvider> and your tailwind.config.js has 'darkMode: "class"'.