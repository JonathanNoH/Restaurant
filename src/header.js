import './style.css';
import Icon from './icon.png';

const body = document.querySelector('body');
const header = document.querySelector('header');

const createHeader = () => {

    //add icon
    const mainIcon = new Image();
    mainIcon.src = Icon;
    mainIcon.alt = "Jim and Bob's Jellys and Burgers: Get some jelly in your burg";
    header.appendChild(mainIcon);

    //add title
    /*const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Jim and Bob's Jellys and Burgers";
    header.appendChild(mainTitle);*/

    //add nav bar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    const addTab = (string) => {
        const tab = document.createElement('div');
        tab.innerText = string;
        sidebar.appendChild(tab);
    }
    addTab('Home');
    addTab('Menu');
    addTab('Contact');
    header.appendChild(sidebar);
};

export default createHeader;