function toggleDarkMode() {
    const body = document.body;
    const modeIcon = document.querySelector('.fa-moon');

    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        modeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('nightMode', 'true');
    } else {
        modeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('nightMode', 'false');
    }
}

function تحميل_وضع_البدء() {
    const body = document.body;
    const modeIcon = document.querySelector('.fa-moon');

    const savedMode = localStorage.getItem('nightMode');
    if (savedMode === 'true') {
        body.classList.add('night-mode');
        modeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        body.classList.remove('night-mode');
        modeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}
