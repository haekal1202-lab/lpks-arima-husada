document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Navigation Menu Toggle with Fade Animation
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // 2. Active Navbar Link on Scroll (Scrollspy)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active-nav');
            }
        });
    });

    // 3. Floating "Back to Top" Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up text-lg"></i>';
    backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
    backToTopBtn.className = 'fixed bottom-6 right-6 z-50 bg-brandBlue hover:bg-japanRed text-white w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none translate-y-4';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
            backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4. Form Submission with Interactive Toast Notification
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Perform simple validation check
            const inputs = form.querySelectorAll('input[required], select[required]');
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) isValid = false;
            });

            if (isValid) {
                showToast('Pendaftaran Berhasil!', 'Tim LPKS Arima Persada akan menghubungi Anda via WhatsApp.');
                form.reset();
            } else {
                showToast('Gagal Mengirim', 'Harap lengkapi semua kolom yang wajib diisi.', 'error');
            }
        });
    }

    // Function to render Toast Notification
    function showToast(title, message, type = 'success') {
        const toast = document.createElement('div');
        const isSuccess = type === 'success';

        toast.className = `fixed top-6 right-6 z-50 text-white p-5 rounded-2xl shadow-2xl border flex items-start space-x-4 max-w-sm toast-animation transform -translate-y-6 opacity-0 ${
            isSuccess ? 'bg-slate-900 border-emerald-500/40' : 'bg-slate-900 border-red-500/40'
        }`;

        toast.innerHTML = `
            <div class="w-10 h-10 ${isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'} rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                <i class="fa-solid ${isSuccess ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i>
            </div>
            <div>
                <h4 class="font-bold text-sm text-white">${title}</h4>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">${message}</p>
            </div>
        `;

        document.body.appendChild(toast);

        // Slide in
        setTimeout(() => {
            toast.classList.remove('-translate-y-6', 'opacity-0');
        }, 10);

        // Slide out and remove
        setTimeout(() => {
            toast.classList.add('opacity-0', '-translate-y-6');
            setTimeout(() => toast.remove(), 400);
        }, 4000);
    }
});
