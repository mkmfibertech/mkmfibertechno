document.addEventListener("DOMContentLoaded", () => {
    
    function loadComponent(url, elementId) {
        // بنستنى الصفحة تحمل، وبعدين ندور على العنصر
        const container = document.getElementById(elementId);
        
        // لو ملقاش العنصر، هيخرج من غير ما يدي أي خطأ (TypeError)
        if (!container) {
            console.log("العنصر " + elementId + " غير موجود في هذه الصفحة، سأتجاهل التحميل.");
            return; 
        }

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("فشل تحميل الملف");
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    // هنا بتنده على الوظيفة
    loadComponent("header.html", "header-container");
    loadComponent("footer.html", "footer-container");
});
