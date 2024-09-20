// scripts.js

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  
  // Check if a theme is already set
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Toggle dark mode
  toggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});
