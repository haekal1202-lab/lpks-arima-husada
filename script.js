/**
 * LPKS ARIMA PERSADA - INTERACTIVE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------
       1. Sticky Navbar & Mobile Navigation Toggle
    ---------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Toggle Mobile Menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-xmark');
    });

    // Close mobile menu when clicking nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (hamburger.querySelector('i')) {
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-xmark');
            }
        });
    });

    /* ----------------------------------------------------
       2. Scroll Reveal Animations (Intersection Observer)
    ---------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ----------------------------------------------------
       3. Animated Number Counters
    ---------------------------------------------------- */
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    const countUp = () => {
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if (sectionPos < screenPos && !counted) {
            counted = true;
            statNumbers.forEach(num => {
                const target = +num.getAttribute('data-target');
                let count = 0;
                const speed = Math.ceil(target / 40);

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        num.innerText = count;
                        setTimeout(updateCount, 40);
                    } else {
                        num.innerText = target;
                    }
                };
                updateCount();
            });
        }
    };

    window.addEventListener('scroll', countUp);

    /* ----------------------------------------------------
       4. Program Tabs Switching
    ---------------------------------------------------- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(btn.getAttribute('data-tab'));
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* ----------------------------------------------------
       5. Gallery Lightbox Modal
    ---------------------------------------------------- */
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });

    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });

    /* ----------------------------------------------------
       6. WhatsApp Registration Form Handler
    ---------------------------------------------------- */
    const whatsappForm = document.getElementById('whatsappForm');

    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const phone = document.getElementById('phone').value;
        const pendidikan = document.getElementById('pendidikan').value;
        const programPilihan = document.getElementById('programPilihan').value;

        const targetWhatsApp = "6281282674707"; // Phone number LPKS Arima Persada

        const message = `Halo Admin LPKS Arima Persada, saya ingin mendaftar pelatihan ke Jepang.%0A%0A` +
            `*Detail Pendaftar:*%0A` +
            `• *Nama Lengkap:* ${encodeURIComponent(nama)}%0A` +
            `• *Nomor WA:* ${encodeURIComponent(phone)}%0A` +
            `• *Pendidikan:* ${encodeURIComponent(pendidikan)}%0A` +
            `• *Program Pilihan:* ${encodeURIComponent(programPilihan)}%0A%0A` +
            `Mohon informasi mengenai pendaftaran dan jadwal seleksi selanjutnya. Terima kasih!`;

        const waUrl = `https://wa.me/${targetWhatsApp}?text=${message}`;
        window.open(waUrl, '_blank');
    });

    /* ----------------------------------------------------
       7. Scroll to Top Button
    ---------------------------------------------------- */
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});
