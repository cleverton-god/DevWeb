// Theme Toggle - Dark/Light Mode Switcher
(function() {
  'use strict';

  const THEME_KEY = 'usersapp-theme';
  const THEME_ICONS = {
    light: 'bi-moon-stars-fill',
    dark: 'bi-sun-fill'
  };

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    updateToggleIcon(newTheme);
  }

  function updateToggleIcon(theme) {
    const toggles = document.querySelectorAll('#theme-toggle');
    const iconClass = THEME_ICONS[theme];
    
    toggles.forEach(toggle => {
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.className = `bi ${iconClass}`;
      }
    });
  }

  // Event listeners
  // Adiciona event listeners para todos os botões theme-toggle
  document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-toggle')) {
      toggleTheme();
    }
  });
  
  document.addEventListener('DOMContentLoaded', initTheme);
  
  // Global toggle function for all pages
  window.toggleTheme = toggleTheme;

  // Listen for theme changes across tabs
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_KEY) {
      document.documentElement.setAttribute('data-theme', e.newValue);
      updateToggleIcon(e.newValue);
    }
  });
})();

