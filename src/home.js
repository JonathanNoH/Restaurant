import './style.css';
import Icon from './icon.png';

const content = document.querySelector('#content');

const goHome = () => {
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

    const addTestimonial = (string) => {
        const testimonial = document.createElement('div');
        testimonial.innerText = string;
        testimonials.appendChild(testimonial);
    }
    addTestimonial("Some of the best damn burgers I've ever had. My jelly was just squirting everywhere. -Jimmy (no relation)");
    addTestimonial("Well I guess it was fine. -Remy");
    addTestimonial("I asked for a burger with no jelly and they kicked me out. I came back the next day though and got a burger with jelly. They were right to kick me out before -- I'll never have a burger without jelly again! -Anonymous");
    addTestimonial("Better than the Krabby Patty -Gary");

    content.appendChild(testimonials);
}

export default goHome;