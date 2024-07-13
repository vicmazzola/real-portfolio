const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

// Initialize theme based on local storage
const savedMode = JSON.parse(localStorage.getItem('mode'));
inputEl.checked = savedMode !== null ? savedMode : false; // Default to dark mode if no saved mode

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.classList.add('light-theme'); // Add light-theme class for light mode
    } else {
        bodyEl.classList.remove('light-theme'); // Remove light-theme class for dark mode
    }
}

inputEl.addEventListener('input', () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem('mode', JSON.stringify(inputEl.checked));
}
