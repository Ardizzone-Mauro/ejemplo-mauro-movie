// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Verificar si hay un tema guardado en localStorage, si no usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Aplicar el tema inicial
    applyTheme(initialTheme);
    
    // Event listener para el toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    function applyTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (theme === 'dark') {
                icon.classList.remove('bi-moon-fill');
                icon.classList.add('bi-sun-fill');
                themeToggle.setAttribute('title', 'Modo claro');
            } else {
                icon.classList.remove('bi-sun-fill');
                icon.classList.add('bi-moon-fill');
                themeToggle.setAttribute('title', 'Modo oscuro');
            }
        }
    }
});
