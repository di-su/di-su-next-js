import { loadHome } from './modules/pageLoad';
import { navBar } from './modules/navBar';
import { loadMenu } from './modules/loadMenu';
import { loadContact } from './modules/loadContact';

navBar();
loadHome();

function changeContent(e) {
  document.querySelector('.contents-wrapper').outerHTML = ""
  if (e.target.id === "menu") {
    loadMenu();
  }
  if (e.target.id === "contact") {
    loadContact();
  } 
  if (e.target.id === "home") {
    loadHome();
  } 
}

const navButtons = document.querySelectorAll('.nav-button');
navButtons.forEach(button => button.addEventListener('click', changeContent))