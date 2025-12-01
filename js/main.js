document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Logic
    const langBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('siteLang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('siteLang', lang);
        document.documentElement.lang = lang;

        // Update Button Text
        if (langBtn) {
            langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
        }

        // Toggle visibility of language elements
        document.querySelectorAll('[data-site-lang]').forEach(el => {
            if (el.getAttribute('data-site-lang') === lang) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'es' : 'en');
        });
    }

    // Initialize Language
    setLanguage(currentLang);

    // Tab Logic for Code Examples
    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-tab');
            const container = btn.closest('.tabs');

            // Remove active class from buttons in this container
            container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Hide all tab content in this container
            container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            // Show target content
            container.querySelector(`.tab-content[data-lang="${lang}"]`).classList.add('active');
        });
    });

    // Highlight JS
    if (window.hljs) {
        hljs.highlightAll();
    }
});
