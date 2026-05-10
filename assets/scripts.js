document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconMenu = btn.querySelector('[data-lucide="menu"]');
    const iconClose = btn.querySelector('[data-lucide="x"]');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        iconMenu.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        });
    });

    // Initialize Icons again just in case dynamics added some (though Lucide runs on load usually if at bottom)
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
