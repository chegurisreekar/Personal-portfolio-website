// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Cycling Typing Animation
const texts = [
    "Embedded Systems & IoT Enthusiast",
    "Python & C Programmer"
];

let speed = 100;
let textIndex = 0;
let charIndex = 0;

const changingText = document.getElementById("changing-text");

function typeText() {
    if (charIndex < texts[textIndex].length) {
        changingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    if (changingText.textContent.length > 0) {
        changingText.textContent = changingText.textContent.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeText, 500);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    if (changingText) {
        typeText();
    }
});

// Navigation Link Active State
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const messageDiv = document.getElementById('message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Show success message (in real scenario, you'd send this to a server)
        messageDiv.textContent = '✓ Message sent successfully! Thank you for reaching out.';
        messageDiv.classList.add('success');
        messageDiv.classList.remove('error');
        
        // Reset form
        contactForm.reset();
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.classList.remove('success');
        }, 5000);
    });
}

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = (e.clientX - 50) + 'px';
        cursorGlow.style.top = (e.clientY - 50) + 'px';
    });
}

// Scroll to Projects Function
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}
