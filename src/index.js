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

//add testimonials
const testimonials = document.createElement('div');
testimonials.classList.add('testimonials');
testimonials.innerText = "Some of the best damn burgers I've ever had. My jelly was just squirting everywhere. -Jimmy (no relation)"

content.appendChild(testimonials);