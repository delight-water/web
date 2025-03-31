// Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileNavToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileNavToggle.querySelector('i').classList.toggle('fa-bars');
        mobileNavToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Water animation in hero section
    const waterAnimation = document.getElementById('water-animation');
    
    function createRipple() {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: ripple 3s linear infinite;
            pointer-events: none;
        `;
        
        const size = Math.random() * 100 + 50;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        waterAnimation.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 3000);
    }
    
    setInterval(createRipple, 300);
    
    // Water drops animation
    function createWaterDrop() {
        const drop = document.createElement('div');
        drop.classList.add('water-drop');
        drop.style.left = Math.random() * window.innerWidth + 'px';
        drop.style.animationDuration = Math.random() * 2 + 1 + 's';
        document.querySelector('.water-drops').appendChild(drop);
        
        setTimeout(() => {
            drop.remove();
        }, 3000);
    }
    
    setInterval(createWaterDrop, 100);
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        document.querySelector('.hero-bg').style.transform = `translateY(${scroll * 0.5}px)`;
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
    
    // Fixed water drops animation
    const waterDrops = document.querySelector('.water-drops');
    if (waterDrops) {
        function createWaterDrop() {
            const drop = document.createElement('div');
            drop.classList.add('water-drop');
            
            // Random position and animation duration
            const posX = Math.random() * window.innerWidth;
            const duration = (Math.random() * 3 + 2);
            
            drop.style.left = `${posX}px`;
            drop.style.animationDuration = `${duration}s`;
            
            waterDrops.appendChild(drop);
            
            // Remove drop after animation completes to prevent memory leaks
            setTimeout(() => {
                if (drop && drop.parentNode) {
                    drop.remove();
                }
            }, duration * 1000);
        }
        
        // Limit the number of drops to improve performance
        const dropInterval = setInterval(createWaterDrop, 300);
        
        // Clear interval when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(dropInterval);
            } else {
                setInterval(createWaterDrop, 300);
            }
        });
    }
    
    // Add ripple effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        // Create ripple container if it doesn't exist
        let rippleContainer = document.querySelector('.ripple-container');
        if (!rippleContainer) {
            rippleContainer = document.createElement('div');
            rippleContainer.classList.add('ripple-container');
            hero.appendChild(rippleContainer);
        }
        
        function createRipple() {
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            const size = Math.random() * 50 + 20;
            const posX = Math.random() * window.innerWidth;
            const posY = Math.random() * window.innerHeight / 2 + window.innerHeight / 4;
            
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${posX}px`;
            ripple.style.top = `${posY}px`;
            
            rippleContainer.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                if (ripple && ripple.parentNode) {
                    ripple.remove();
                }
            }, 3000);
        }
        
        // Create ripples at a reasonable interval
        const rippleInterval = setInterval(createRipple, 1000);
        
        // Clear interval when page is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(rippleInterval);
            } else {
                setInterval(createRipple, 1000);
            }
        });
    }
    
    // Improved parallax effect with throttling for better performance
    let lastScrollTime = 0;
    const scrollThrottle = 10; // ms between scroll updates
    
    window.addEventListener('scroll', () => {
        const now = Date.now();
        
        if (now - lastScrollTime > scrollThrottle) {
            lastScrollTime = now;
            
            const scroll = window.pageYOffset;
            const heroBg = document.querySelector('.hero-bg');
            
            if (heroBg) {
                heroBg.style.transform = `translateY(${scroll * 0.3}px)`;
            }
        }
    });
    
    // Remove the dynamically added CSS for ripple animation as we've added it to the CSS file
    const existingStyle = document.querySelector('style');
    if (existingStyle && existingStyle.textContent.includes('@keyframes ripple')) {
        existingStyle.remove();
    }
    
    // Interactive fish movement
    const fishContainer = document.querySelector('.fish-container');
    const allFish = document.querySelectorAll('.fish');
    
    if (fishContainer && allFish.length) {
        // Mouse movement interaction with fish
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Check if mouse is in the services section
            const serviceSection = document.querySelector('.services');
            const sectionRect = serviceSection.getBoundingClientRect();
            
            if (
                mouseY >= sectionRect.top && 
                mouseY <= sectionRect.bottom && 
                mouseX >= sectionRect.left && 
                mouseX <= sectionRect.right
            ) {
                allFish.forEach(fish => {
                    const fishRect = fish.getBoundingClientRect();
                    const fishCenterX = fishRect.left + fishRect.width / 2;
                    const fishCenterY = fishRect.top + fishRect.height / 2;
                    
                    // Calculate distance between mouse and fish
                    const deltaX = mouseX - fishCenterX;
                    const deltaY = mouseY - fishCenterY;
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                    
                    // Fish react only if mouse is close enough (within 150px)
                    if (distance < 150) {
                        // Flee from mouse direction
                        const angle = Math.atan2(deltaY, deltaX);
                        const fleeX = -Math.cos(angle) * (150 - distance) * 0.05;
                        const fleeY = -Math.sin(angle) * (150 - distance) * 0.05;
                        
                        // Apply temporary transformation
                        fish.style.transform = `translate(${fleeX}px, ${fleeY}px) ${fish.style.transform || ''}`;
                        
                        // Reset after short delay
                        setTimeout(() => {
                            fish.style.transform = fish.style.transform.replace(/translate\([^)]+\) /, '');
                        }, 500);
                    }
                });
            }
        });
        
        // Click interaction - Fish scatter
        serviceSection.addEventListener('click', function() {
            allFish.forEach(fish => {
                // Generate random values for movement
                const randomX = (Math.random() - 0.5) * 100;
                const randomY = (Math.random() - 0.5) * 100;
                
                // Apply jump animation
                fish.style.transition = 'transform 0.5s ease-out';
                fish.style.transform = `translate(${randomX}px, ${randomY}px) ${fish.style.transform || ''}`;
                
                // Reset after animation
                setTimeout(() => {
                    fish.style.transition = '';
                    fish.style.transform = fish.style.transform.replace(/translate\([^)]+\) /, '');
                }, 500);
            });
        });
    }
    
    // Interactive hero fish
    const heroFishContainer = document.querySelector('.hero-fish-container');
    const heroFish = document.querySelectorAll('.hero-fish');
    
    if (heroFishContainer && heroFish.length) {
        // Mouse movement interaction with hero fish
        document.addEventListener('mousemove', function(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Check if mouse is in the hero section
            const heroSection = document.querySelector('.hero');
            const sectionRect = heroSection.getBoundingClientRect();
            
            if (
                mouseY >= sectionRect.top && 
                mouseY <= sectionRect.bottom && 
                mouseX >= sectionRect.left && 
                mouseX <= sectionRect.right
            ) {
                heroFish.forEach(fish => {
                    const fishRect = fish.getBoundingClientRect();
                    const fishCenterX = fishRect.left + fishRect.width / 2;
                    const fishCenterY = fishRect.top + fishRect.height / 2;
                    
                    // Calculate distance between mouse and fish
                    const deltaX = mouseX - fishCenterX;
                    const deltaY = mouseY - fishCenterY;
                    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                    
                    // Fish react only if mouse is close enough (within 150px)
                    if (distance < 200) {
                        // Flee from mouse direction
                        const angle = Math.atan2(deltaY, deltaX);
                        const fleeX = -Math.cos(angle) * (200 - distance) * 0.05;
                        const fleeY = -Math.sin(angle) * (200 - distance) * 0.05;
                        
                        // Apply temporary transformation
                        fish.style.transition = 'transform 0.5s ease';
                        fish.style.transform = `translate(${fleeX}px, ${fleeY}px) ${fish.style.transform || ''}`;
                        
                        // Reset after short delay
                        setTimeout(() => {
                            fish.style.transition = '';
                            fish.style.transform = fish.style.transform.replace(/translate\([^)]+\) /, '');
                        }, 500);
                    }
                });
            }
        });
    }
});

// Add this CSS to the existing styles
const style = document.createElement('style');
style.textContent = `
@keyframes ripple {
    0% {
        transform: scale(0);
        opacity: 0.5;
    }
    100% {
        transform: scale(2);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
