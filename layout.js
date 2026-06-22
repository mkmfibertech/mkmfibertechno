document.addEventListener("DOMContentLoaded", () => {
    
    // دالة التحميل
    function loadComponent(url, elementId) {
        const container = document.getElementById(elementId);
        
        // شرط الأمان: لو العنصر مش موجود في الصفحة، الكود هيقف بهدوء من غير أخطاء
        if (!container) return; 

        fetch(url)
            .then(response => {
                if (!response.ok) return;
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
            })
            .catch(err => console.error("Error loading:", err));
    }

    // هنا ربطنا الـ ID بتاعك في الـ HTML بالـ JS
    loadComponent("header.html", "header-placeholder"); 
    loadComponent("footer.html", "footer-container");
});
