const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const bodyEl = document.querySelector('body');

function switchBox (e) {
    if (e.target.checked) {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
         
    } else if (!e.target.checked) {
        bodyEl.classList.add(Theme.LIGHT);
        bodyEl.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme', Theme.LIGHT);
    };
}

export {switchBox};