// 1. Service Worker Installation
self.addEventListener("install", e => {
    console.log("Service Worker Installed");
});

// 2. PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // تأكد من عدم إضافة الزرار أكثر من مرة
    if (!document.querySelector('.install-btn')) {
        const installBtn = document.createElement('button');
        installBtn.innerText = '📱 تثبيت التطبيق';
        installBtn.className = 'btn install-btn'; // إضافة كلاس مميز
        document.body.prepend(installBtn);

        installBtn.addEventListener('click', () => {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(() => {
                installBtn.remove();
            });
        });
    }
});

// 3. Slider Logic (النسخة الواحدة فقط)
const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    // تأكد إن فيه slides عشان الكود ميكسرش
    if (slides.length === 0) return; 
    
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

// التشغيل فقط إذا كان هناك slides في الصفحة
if (slides.length > 0) {
    showSlide(current);
    setInterval(nextSlide, 4000);
}
