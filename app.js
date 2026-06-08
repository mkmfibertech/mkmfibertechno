self.addEventListener("install", e => {
  console.log("Service Worker Installed");
});

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {

    e.preventDefault();

    deferredPrompt = e;

    const installBtn = document.createElement('button');

    installBtn.innerText = '📱 تثبيت التطبيق';

    installBtn.className = 'btn';

    document.body.prepend(installBtn);

    installBtn.addEventListener('click', () => {

        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(() => {

            installBtn.remove();

        });

    });
  

});


const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide() {

    slides[currentSlide]
        .classList.remove('active');

    currentSlide =
        (currentSlide + 1) % slides.length;

    slides[currentSlide]
        .classList.add('active');

}

setInterval(showSlide, 5000);
