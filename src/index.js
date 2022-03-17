import './reset.css';
import './style.css';
import createHeader from './header';
import goHome from './home';
import goMenu from './menu';
import goContact from './contact';

//set up page
createHeader();
goHome();
//grab Dom
const content = document.querySelector("#content");
const sidebar = document.querySelector(".sidebar");
const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");
//clear #content section
const clear = () => {
    while (content.lastChild) {
        content.lastChild.remove();
    }
}
//set up buttons
home.addEventListener('click', () => {
    clear();
    goHome();
})

menu.addEventListener('click', () => {
    clear();
    goMenu();
})

contact.addEventListener('click', () => {
    clear();
    goContact();
})