// // Theme-switching logic
// const inputEl = document.querySelector('.input');
// const bodyEl = document.querySelector('body');

// // Initialize theme based on local storage
// const savedMode = JSON.parse(localStorage.getItem('mode'));
// inputEl.checked = savedMode !== null ? savedMode : false; // Default to dark mode if no saved mode

// updateBody();

// function updateBody() {
//     if (inputEl.checked) {
//         bodyEl.classList.add('light-theme'); // Add light-theme class for light mode
//     } else {
//         bodyEl.classList.remove('light-theme'); // Remove light-theme class for dark mode
//     }
// }

// inputEl.addEventListener('input', () => {
//     updateBody();
//     updateLocalStorage('mode', JSON.stringify(inputEl.checked));
// });

// // Language-switching logic
// const languageToggle = document.getElementById('portuguese-version-link');

// // Text elements
// const textElements = {
//     'header-title': {
//         en: 'Crafting the Web with Victor',
//         pt: 'Criando a Web com Victor'
//     },
//     'home-link': {
//         en: 'Home',
//         pt: 'Início'
//     },
//     'projects-link': {
//         en: 'Projects',
//         pt: 'Projetos'
//     },
//     'resume-link': {
//         en: 'Resume',
//         pt: 'Currículo'
//     },
//     'about-link': {
//         en: 'About Me',
//         pt: 'Sobre Mim'
//     },
//     'portuguese-version-link': {
//         en: 'Portuguese Version',
//         pt: 'Versão em Português'
//     },
//     'visit-site': {
//         en: 'Visit Site',
//         pt: 'Visitar Site'
//     },
//     'github-repo': {
//         en: 'GitHub Repo',
//         pt: 'Repositório GitHub'
//     }
// };

// // Initialize language based on local storage
// const savedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no saved language

// updateLanguage(savedLanguage);

// function updateLanguage(language) {
//     for (const key in textElements) {
//         const element = document.getElementById(key);
//         if (element) {
//             element.textContent = textElements[key][language];
//         }
//     }
// }

// languageToggle.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default anchor behavior
//     const currentLanguage = localStorage.getItem('language') || 'en';
//     const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
//     updateLanguage(newLanguage);
//     localStorage.setItem('language', newLanguage);
// });

// // Update localStorage function
// function updateLocalStorage(key, value) {
//     localStorage.setItem(key, value);
// }
