document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navItems = document.getElementById('nav-items');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navItems.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (menuToggle && navItems && !menuToggle.contains(e.target) && !navItems.contains(e.target) && navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Button hover animation
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.5s ease';
        });
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});