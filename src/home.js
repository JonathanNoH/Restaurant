import './style.css';

const content = document.querySelector('#content');

const goHome = () => {
    //add testimonials
    const testimonials = document.createElement('div');
    testimonials.classList.add('testimonials');
    const testimonialHeader = document.createElement('div');
    testimonialHeader.classList.add('contentHeader');
    testimonialHeader.innerText = "Testimonials";
    testimonials.appendChild(testimonialHeader);

    const addTestimonial = (text, author) => {
        const testimonial = document.createElement('div');
        testimonial.classList.add('testimonial');

        const testimonialBody = document.createElement('div');
        testimonialBody.innerText = text;
        testimonialBody.classList.add('testimonialBody');
        testimonial.appendChild(testimonialBody);

        const authorDiv = document.createElement('div');
        authorDiv.innerText = author;
        authorDiv.classList.add('testimonialAuthor');
        testimonial.appendChild(authorDiv);

        testimonials.appendChild(testimonial);
    }
    addTestimonial("Some of the best damn burgers I've ever had. My jelly was just squirting everywhere.", "-Jimmy (no relation)");
    addTestimonial("Well I guess it was fine.", "-Remy");
    addTestimonial("I asked for a burger with no jelly and they kicked me out. I came back the next day though and got a burger with jelly. They were right to kick me out before -- I'll never have a burger without jelly again!", "-Anonymous");
    addTestimonial("Better than the Krabby Patty!", "-Gary");
    addTestimonial("I sure got some jelly in my burg!", "-Baron von Jellington");

    content.appendChild(testimonials);
}

export default goHome;