document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('nav a');
    const navIndicator = document.getElementById('nav-indicator');

    // Устанавливаем начальную позицию индикатора
    function updateNavIndicator(activeLink) {
        if (activeLink) {
            navIndicator.style.left = activeLink.offsetLeft + 'px';
            navIndicator.style.width = activeLink.offsetWidth + 'px';
        }
    }

    // Найти активную ссылку
    function setActiveNav() {
        let currentPath = window.location.pathname.split("/").pop();
        let activeLink = null;

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath || 
                (currentPath === "" && link.getAttribute('href') === "index.html")) {
                activeLink = link;
            }
        });

        updateNavIndicator(activeLink);
    }

    setActiveNav();

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            updateNavIndicator(e.target);
        });
    });

    // Тёмная тема
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.classList.add('dark-mode');
        themeToggle.innerHTML = '<span>☾</span><span>+</span>';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<span>☾</span><span>+</span>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<span>☼-</span>';
        }
    });
});
