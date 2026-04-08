// Main JS file for Photo2Keychain

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.workflow-card, #gallery .group');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
        revealObserver.observe(el);
    });

    // Simple scroll logger (can be used for analytics later)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('shadow-sm', 'py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('shadow-sm', 'py-2');
            header.classList.add('py-4');
        }
    });
});
