import '../src/sass/main.scss';
import template from '../src/partials/food-service.hbs';
import cooking from '../src/menu.json';
import { switchBox } from './js/box.js';

const templCooking = template(cooking);
const menu = document.querySelector('.js-menu');
const checkBoxChangeTheme = document.querySelector('.theme-switch__toggle');

menu.insertAdjacentHTML('afterbegin', templCooking);
checkBoxChangeTheme.addEventListener('change', switchBox);

function saveTheme() {
  const savedTheme = localStorage.getItem('Theme');
  const bodyRef = document.querySelector('body');
  if (savedTheme) {
    bodyRef.classList.add(savedTheme);
    if (savedTheme === 'dark-theme') {
      checkBoxChangeTheme.checked = true;
    }
  }
}
saveTheme();

// menu.insertAdjacentHTML('beforeend', templCooking);

// const checkBoxChangeTheme = document.querySelector('.theme-switch__toggle');

// checkBoxChangeTheme.addEventListener('switch', (e) => {
//   e.preventDefault();

//   if (localStorage.getItem('switch') === 'dark-theme') {
//     localStorage.setItem('switch', 'light-theme');
//   } else {
//     localStorage.setItem('switch', 'dark-theme');
//   }
//   darkTheme();
// });

// function darkTheme() {
//   if (localStorage.getItem('switch') === 'dark-theme') {
//     document.querySelector('body').classList.add('dark-theme');
//     checkBoxChangeTheme.setAttribute('checked', true);
//   } else {
//     document.querySelector('body').classList.remove('dark-theme');
//   }
// }
// darkTheme();
