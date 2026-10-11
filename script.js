/*
   SHIPYON - CORPORATE PRESTIGE INTERACTIVE ENGINE
   Focused on stability, trust, and high-end corporate precision.
*/

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. Refined Custom Cursor ---
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'none'
        });
    });

    const hoverables = document.querySelectorAll('a, button, .value-card, .btn-corp');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
        });
    });

    // --- 2. Professional Header Transition ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 3. Authoritative Hero Sequence ---
    const heroTl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 }
    });

    heroTl
        .from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.8 })
        .from('.hero-title', { opacity: 0, y: 30, duration: 1 }, '-=0.6')
        .from('.hero-description', { opacity: 0, y: 20, duration: 0.8 }, '-=0.7')
        .from('.hero-actions', { opacity: 0, y: 20, duration: 0.8 }, '-=0.6')
        .from('.hero-main-img', { scale: 1.1, opacity: 0, duration: 1.5 }, '-=1.2');

    // --- 4. Structured Section Reveals ---
    const sections = document.querySelectorAll('.value-card, .about-container, .section-header');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        });
    });
});
