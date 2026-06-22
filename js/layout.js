// دالة لجلب المكونات وتطبيق التنسيق
async function loadLayout() {
    // 1. جلب الهيدر
    try {
        // إضافة "/" في البداية تعني ابدأ من جذر الموقع دائماً
        const headerRes = await fetch('/header.html'); 
        if (!headerRes.ok) throw new Error("Header not found");
        
        const headerData = await headerRes.text();
        const headerContainer = document.getElementById('header-container');
        
        if (headerContainer) {
            headerContainer.innerHTML = headerData;
            // تأكد إن فيه عنصر قبل ما نعدل الـ ID
            if (headerContainer.firstElementChild) {
                headerContainer.firstElementChild.id = 'page-header';
            }

            // تفعيل الرابط النشط
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.main-nav a').forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        }
    } catch (err) {
        console.log("الهيدر مش موجود أو فيه مشكلة في المسار، جرب المسار المباشر بدون / لو فشل.");
    }

    // 2. جلب الفوتر
    try {
        const footerRes = await fetch('/footer.html');
        if (!footerRes.ok) throw new Error("Footer not found");
        
        const footerData = await footerRes.text();
        const footerContainer = document.getElementById('footer-container');
        
        if (footerContainer) {
            footerContainer.innerHTML = footerData;
            if (footerContainer.firstElementChild) {
                footerContainer.firstElementChild.id = 'page-footer';
            }
        }
    } catch (err) {
        console.log("الفوتر مش موجود أو فيه مشكلة في المسار.");
    }
}

// تنفيذ العملية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadLayout);
