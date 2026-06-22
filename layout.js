// بدلاً من الانتظار فقط، هنستخدم setTimeout عشان نضمن إن الصفحة اترسمت تماماً
window.addEventListener("load", () => {
    
    function loadComponent(url, elementId) {
        const container = document.getElementById(elementId);
        if (!container) return; 

        fetch(url)
            .then(response => response.text())
            .then(data => {
                container.innerHTML = data;
            })
            .catch(err => console.log(""));
    }

    // تأخير تحميل المكونات أجزاء من الثانية عشان نضمن إن الـ DOM جاهز
    setTimeout(() => {
        loadComponent("header.html", "header-placeholder");
        loadComponent("footer.html", "footer-container");
    }, 100); 
});
