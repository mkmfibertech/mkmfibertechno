// دالة لجلب الملفات بأمان
function loadComponent(url, elementId) {
    const container = document.getElementById(elementId);
    
    // إذا لم يجد العنصر في الصفحة، يخرج من الدالة ولا ينفذ الـ fetch
    if (!container) {
        return; 
    }

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("فشل في تحميل " + url);
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            console.error("خطأ في تحميل المكون:", error);
        });
}

// تشغيل التحميل لكل مكون
loadComponent("header.html", "header-container");
loadComponent("footer.html", "footer-container");
