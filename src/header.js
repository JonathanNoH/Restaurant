import './style.css';
import Icon from './icon.png';

const body = document.querySelector('body');
const header = document.querySelector('header');

const createHeader = () => {

    //add icon
    const mainIcon = new Image();
    mainIcon.src = Icon;
    header.appendChild(mainIcon);

    //add title
    const mainTitle = document.createElement('h1');
    mainTitle.innerText = "Jim and Bob's Jellys and Burgers";
    header.appendChild(mainTitle);
};

export default createHeader;