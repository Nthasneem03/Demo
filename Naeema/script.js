// Function to set the theme based on the user's preference
function setTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);

    const navbar = document.getElementById('navbar');
    navbar.classList.remove('light-theme', 'dark-theme');
    navbar.classList.add(theme);

    // Update brand, nav links, and toggle icon
    const brand = document.querySelector('.navbar-brand');
    brand.classList.remove('light-theme', 'dark-theme');
    brand.classList.add(theme);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('light-theme', 'dark-theme');
        link.classList.add(theme);
    });

    // Toggle navbar-toggler icon color
    const togglerIcon = document.querySelector('.navbar-toggler-icon');
    togglerIcon.classList.remove('light-theme', 'dark-theme');
    togglerIcon.classList.add(theme);
}

// Load the theme from localStorage or default to light-theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setTheme(savedTheme);
});

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    
    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme);
});












const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('dark-theme');
    navbar.classList.toggle('light-theme');

    // Update brand, nav links, and toggle icon
    const brand = document.querySelector('.navbar-brand');
    brand.classList.toggle('dark-theme');
    brand.classList.toggle('light-theme');

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.toggle('dark-theme');
        link.classList.toggle('light-theme');
    });

    // Toggle navbar-toggler icon color
    const togglerIcon = document.querySelector('.navbar-toggler-icon');
    togglerIcon.classList.toggle('dark-theme');
    togglerIcon.classList.toggle('light-theme');
});

// Initialize the checkbox state based on the current theme
const isDarkTheme = document.body.classList.contains('dark-theme');
checkbox.checked = isDarkTheme;














document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});