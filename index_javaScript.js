// Enhanced menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const topnav = document.getElementById('myTopnav');

    // Function to show responsive menu
    window.showMenu = function() {
        topnav.classList.add('responsive');
        menuIcon.setAttribute('onclick', 'hideMenu()');
        menuIcon.innerHTML = '✕';
    };

    // Function to hide responsive menu
    window.hideMenu = function() {
        topnav.classList.remove('responsive');
        menuIcon.setAttribute('onclick', 'showMenu()');
        menuIcon.innerHTML = '☰';
    };

    // Add click event listeners to menu items to close menu on mobile
    const navLinks = topnav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 600) {
                hideMenu();
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = this.querySelector('input[name="email"]');
            const messageInput = this.querySelector('textarea[name="message"]');
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailInput.value)) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }
            
            if (messageInput.value.trim() === '') {
                alert('Please enter a message.');
                messageInput.focus();
                return;
            }
            
            // In a real-world scenario, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple image lightbox effect
    const cardImage = document.querySelector('.card img');
    if (cardImage) {
        cardImage.addEventListener('click', function() {
            // Create a modal overlay
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            const fullImage = this.cloneNode(true);
            fullImage.style.maxWidth = '90%';
            fullImage.style.maxHeight = '90%';
            fullImage.style.objectFit = 'contain';

            overlay.appendChild(fullImage);
            document.body.appendChild(overlay);

            // Close overlay on click
            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
    
        });
    }
});