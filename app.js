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
