// Navigation Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    } else {
    navbar.classList.remove('scrolled');
    }
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navItems = document.getElementById('nav-items');
    
    menuToggle.addEventListener('click', function() {
    navItems.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    
    if (navItems.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    }
    });
    
    // Scroll Indicator
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
    });
    }
    
    // Testimonial Slider
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    
    testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
    // Remove active class from all dots and slides
    testimonialDots.forEach(d => d.classList.remove('active'));
    testimonialSlides.forEach(s => s.classList.remove('active'));
    
    // Add active class to current dot and slide
    dot.classList.add('active');
    testimonialSlides[index].classList.add('active');
    });
    });
    
    // Auto slide testimonials every 5 seconds
    let testimonialIndex = 0;
    setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialDots.length;
    testimonialDots.forEach(d => d.classList.remove('active'));
    testimonialSlides.forEach(s => s.classList.remove('active'));
    
    testimonialDots[testimonialIndex].classList.add('active');
    testimonialSlides[testimonialIndex].classList.add('active');
    }, 5000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
    item.classList.toggle('active');
    });
    });
    
    // Animation on Scroll
    function animateOnScroll() {
    const elements = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .process-step, .pricing-card, .faq-item, .cta-title, .cta-text, .btn');
    
    elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 50) {
        if (element.classList.contains('section-title') || element.classList.contains('cta-title')) {
            element.style.animation = 'fadeIn 1s ease forwards';
        } else if (element.classList.contains('section-subtitle') || element.classList.contains('cta-text')) {
            element.style.animation = 'fadeIn 1s ease 0.2s forwards';
        } else if (element.classList.contains('service-card') || element.classList.contains('pricing-card')) {
            const delay = Array.from(element.parentNode.children).indexOf(element) * 0.2;
            element.style.animation = `slideUp 1s ease ${delay}s forwards`;
        } else if (element.classList.contains('process-step')) {
            const delay = Array.from(element.parentNode.children).indexOf(element) * 0.3;
            element.style.animation = `fadeIn 1s ease ${delay}s forwards`;
            element.style.transform = 'translateY(0)';
            
            // Update progress bar based on active steps
            const progressBar = document.getElementById('process-progress');
            if (progressBar) {
                const activeStepIndex = Array.from(element.parentNode.children).indexOf(element);
                const progressWidth = ((activeStepIndex + 1) / element.parentNode.children.length) * 100;
                progressBar.style.width = `${progressWidth}%`;
            }
        } else if (element.classList.contains('faq-item')) {
            const delay = Array.from(element.parentNode.children).indexOf(element) * 0.15;
            element.style.animation = `slideUp 1s ease ${delay}s forwards`;
        } else if (element.classList.contains('btn')) {
            element.style.animation = 'fadeIn 1s ease 0.4s forwards';
        }
    }
    });
    }
    
    // Run animation function on scroll and on page load
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);