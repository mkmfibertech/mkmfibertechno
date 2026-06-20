// دالة لجلب المكونات وتطبيق التنسيق
async function loadLayout() {
    // 1. جلب الهيدر
    try {
        const headerRes = await fetch('header.html');
        const headerData = await headerRes.text();
        const headerContainer = document.getElementById('header-container');
        headerContainer.innerHTML = headerData;
        
        // إعطاء ID للهيدر لضمان تطبيق الجراديانت من الـ CSS
        headerContainer.firstElementChild.id = 'page-header';

        // تفعيل الرابط النشط (Active Link)
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.main-nav a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    } catch (err) {
        console.error("خطأ في تحميل الهيدر:", err);
    }

    // 2. جلب الفوتر
    try {
        const footerRes = await fetch('footer.html');
        const footerData = await footerRes.text();
        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = footerData;

        // إعطاء ID للفوتر لضمان تطبيق الجراديانت العكسي
        footerContainer.firstElementChild.id = 'page-footer';
    } catch (err) {
        console.error("خطأ في تحميل الفوتر:", err);
    }
}

// تنفيذ العملية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadLayout);
