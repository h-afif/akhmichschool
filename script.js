// تمرير سلس عند الضغط على الروابط الداخلية
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// القاموس لكل لغة
const translations = {
    ar: {
        'school-banner': 'مركز فضاء اخميش للتربية و التكوين',
        'math': 'رياضيات',
        'math-title': 'رياضيات',
        'math-desc': 'دروس وتمارين في مادة الرياضيات لجميع المستويات.',
        'physics': 'فيزياء',
        'physics-title': 'فيزياء',
        'physics-desc': 'دروس وتمارين في مادة الفيزياء مع تجارب وأمثلة.',
        'english': 'إنجليزية',
        'english-title': 'إنجليزية',
        'english-desc': 'تمارين وقواعد اللغة الإنجليزية لتطوير المهارات.',
        'french': 'فرنسية',
        'french-title': 'فرنسية',
        'french-desc': 'دروس وتمارين اللغة الفرنسية لجميع المستويات.',
        'svt': 'علوم الحياة والأرض',
        'svt-title': 'علوم الحياة والأرض',
        'svt-desc': 'دروس وتمارين في علوم الحياة والأرض لجميع المستويات.',
        'kids': 'روض ونادي الأطفال',
        'kids-title': 'روض ونادي الأطفال',
        'kids-desc': 'روض ونادي الأطفال ما بين 3 سنوات و5 سنوات.',
        'footer-text': '© 2025 مركز فضاء اخميش للتربية و التكوين. جميع الحقوق محفوظة.'
    },
    fr: {
        'school-banner': 'Centre Espace Akhmich pour l\'Éducation et la Formation',
        'math': 'Mathématiques',
        'math-title': 'Mathématiques',
        'math-desc': 'Cours et exercices de mathématiques pour tous les niveaux.',
        'physics': 'Physique',
        'physics-title': 'Physique',
        'physics-desc': 'Cours et exercices de physique avec des expériences et des exemples.',
        'english': 'Anglais',
        'english-title': 'Anglais',
        'english-desc': 'Exercices et grammaire anglaise pour améliorer vos compétences.',
        'french': 'Français',
        'french-title': 'Français',
        'french-desc': 'Cours et exercices de français pour tous les niveaux.',
        'svt': 'Sciences de la Vie et de la Terre',
        'svt-title': 'Sciences de la Vie et de la Terre',
        'svt-desc': 'Cours et exercices de SVT pour tous les niveaux.',
        'kids': 'Jardin et Club des enfants',
        'kids-title': 'Jardin et Club des enfants',
        'kids-desc': 'Jardin et club pour les enfants de 3 à 5 ans.',
        'footer-text': '© 2025 Centre Espace Akhmich. Tous droits réservés.'
    },
    en: {
        'school-banner': 'Akhmich Space Center for Education and Training',
        'math': 'Mathematics',
        'math-title': 'Mathematics',
        'math-desc': 'Lessons and exercises in mathematics for all levels.',
        'physics': 'Physics',
        'physics-title': 'Physics',
        'physics-desc': 'Lessons and exercises in physics with experiments and examples.',
        'english': 'English',
        'english-title': 'English',
        'english-desc': 'Exercises and grammar to improve your English skills.',
        'french': 'French',
        'french-title': 'French',
        'french-desc': 'Lessons and exercises in French for all levels.',
        'svt': 'Life and Earth Sciences',
        'svt-title': 'Life and Earth Sciences',
        'svt-desc': 'Lessons and exercises in life and earth sciences for all levels.',
        'kids': 'Kindergarten & Kids Club',
        'kids-title': 'Kindergarten & Kids Club',
        'kids-desc': 'Kindergarten and kids club for children between 3 and 5 years old.',
        'footer-text': '© 2025 Akhmich Space Center. All rights reserved.'
    }
};

// تغيير اللغة
let currentLang = 'ar';
const langBtn = document.getElementById('lang-btn');

function updateTexts() {
    // تحديث كل العناصر اللي عندها data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // تحديث العنوان الكبير مباشرة من school-banner
    document.getElementById('school-title').textContent = translations[currentLang]['school-banner'];
}

// عند الضغط على الزر
langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'fr' : currentLang === 'fr' ? 'en' : 'ar';
    langBtn.textContent = currentLang.toUpperCase() === 'AR' ? 'FR' : currentLang.toUpperCase() === 'FR' ? 'EN' : 'AR';
    updateTexts();
});

// أول مرة نطبق الترجمة
updateTexts();

// ======= سلايدر =======
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 5000);
