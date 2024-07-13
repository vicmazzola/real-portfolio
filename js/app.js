document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeSwitcher.innerText = 'Switch to Dark Theme';
        } else {
            themeSwitcher.innerText = 'Switch to Light Theme';
        }
    });
});
