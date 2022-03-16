import './style.css';
import Icon from './icon.png';

const content = document.querySelector('#content');

//create header
const header = document.createElement('header');

//add icon
const mainIcon = new Image();
mainIcon.src = Icon;
header.appendChild(mainIcon);

//add title
const mainTitle = document.createElement('h1');
mainTitle.innerText = "Jim and Bob's Jellys and Burgers";
header.appendChild(mainTitle);

content.appendChild(header);