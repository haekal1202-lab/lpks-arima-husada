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
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Toggle Mobile Menu
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close mobile menu when clicking nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    /* ----------------------------------------------------
       2. Scroll Reveal Animations (Intersection Observer)
    ---------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0) {
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
    }

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
       5. Gallery Filtering (Kategori)
    ---------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryContainerItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Hapus class active dari tombol lain
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                galleryContainerItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ----------------------------------------------------
       6. Gallery Lightbox Modal
    ---------------------------------------------------- */
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');

    if (lightbox && lightboxImg) {
        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
            });
        });

        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightbox.classList.remove('active');
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    /* ----------------------------------------------------
       7. WhatsApp Registration Form Handler
    ---------------------------------------------------- */
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
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
    }

    /* ----------------------------------------------------
       8. Scroll to Top Button
    ---------------------------------------------------- */
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
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
    }

});
