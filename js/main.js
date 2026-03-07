/**
 * Agrotimes S.A. - Shared JavaScript
 * Handles mobile menu toggle and other common functionality
 */

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const menuBtn = document.getElementById('menu-toggle');
    
    if (mobileNav && menuBtn) {
        mobileNav.classList.toggle('active');
        menuBtn.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            const mobileNav = document.getElementById('mobile-nav');
            const menuBtn = document.getElementById('menu-toggle');
            if (mobileNav) mobileNav.classList.remove('active');
            if (menuBtn) menuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
