document.addEventListener('DOMContentLoaded', () => {

    // Intersection Observer for fade-in animations
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');

    window.addEventListener('mousemove', e => {
    // Move the custom cursor to the mouse's X and Y position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
});
});