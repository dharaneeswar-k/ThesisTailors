
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Modal functionality
const learnMoreButtons = document.querySelectorAll('.learn-more');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-modal');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    });
});

// Close modal when clicking outside
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .process-step, .contact-item');
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.85;
        
        if (elementPosition < screenPosition) {
            element.style.animationPlayState = 'running';
        }
    });
};

// Floating button visibility
const floatingBtn = document.querySelector('.floating-call');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        floatingBtn.classList.add('visible');
    } else {
        floatingBtn.classList.remove('visible');
    }
    
    // Trigger animations
    animateOnScroll();
});

// Initialize animations on load
window.addEventListener('load', () => {
    animateOnScroll();
});