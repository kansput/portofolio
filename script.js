// Feather Icons
feather.replace();

// Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('header nav');
if (nav) {
    // Clone navigation links for mobile menu
    mobileMenu.innerHTML = nav.innerHTML;
}

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link inside it is clicked
const mobileNavLinks = mobileMenu.querySelectorAll('a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


// Dynamic Year for footer
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
