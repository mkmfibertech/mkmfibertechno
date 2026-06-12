fetch('header.html')
    .then(response => response.text())
    .then(data => {

        document.getElementById(
            'header-container'
        ).innerHTML = data;

        const currentPage =
            window.location.pathname
            .split('/')
            .pop() || 'index.html';

        document.querySelectorAll(
            '.main-nav a'
        ).forEach(link => {

            if (
                link.getAttribute('href')
                === currentPage
            ) {

                link.classList.add(
                    'active'
                );
            }
        });
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {

        document.getElementById(
            'footer-container'
        ).innerHTML = data;
    });
