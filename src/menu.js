import './style.css';

const content = document.querySelector('#content');

const goMenu = () => {
    //add consts
    const topBar = document.createElement('div');
    topBar.classList.add('menuHeader');
    const menuSection = document.createElement('div');
    menuSection.classList.add('menuArea');

    const addNewSection = (string) => {
        //add sections and top headers at once
        //top header
        const topHeader = document.createElement('div');
        topHeader.innerText = string;
        topBar.appendChild(topHeader);
        //section
        const section = document.createElement('div');
        section.classList.add('menuSection');
        addSection(string, section);
        //add event listener
        topHeader.addEventListener('click', () => {
            section.scrollIntoView();
        })
        return section;
    }

    const addSection = (string, section) => {
        const sectionHeader = document.createElement('div');
        sectionHeader.classList.add('menuSectionHeader');
        sectionHeader.innerText = string;
        section.appendChild(sectionHeader);
        menuSection.appendChild(section);
    }

    //create sections
    const appetizersSection = addNewSection("Appetizers");
    const burgersSection = addNewSection("Burgers");
    const sidesSection = addNewSection("Sides");
    const dessertsSection = addNewSection("Desserts");
    
    //add menu items
    const addMenuItem = (item, description, section) => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menuItem');
        const itemNameDiv = document.createElement('div');
        itemNameDiv.innerText = item;
        menuItemDiv.appendChild(itemNameDiv);
        const descriptionDiv = document.createElement('div');
        descriptionDiv.innerText = description;
        menuItemDiv.appendChild(descriptionDiv);

        section.appendChild(menuItemDiv);
    }
    //appetizers
    addMenuItem('Jelly Tartare', 'Succulent raw jelly served in a small glass. Comes in red or blue flavour.', appetizersSection);
    addMenuItem('Spinach Jelly', 'Our take on a spinach dip. Served with fresh breadsticks for dipping.', appetizersSection);
    addMenuItem('Wings', 'Wings coated with any kind of jelly or dry rub with a ramekin of jelly on the side.', appetizersSection);
    addMenuItem('Mozzarella Sticks', 'Mozzarella sticks with tomato jelly or tzatziki jelly', appetizersSection);

    //burgers
    addMenuItem('The Burg', 'A classic burger loaded with all the fixings plus a healthy serving of our seasonal jelly.', burgersSection);
    addMenuItem('The Baron Von Burgermeister', 'The regal burger: bacon, lettuce, tomato, grilled onions, garlic aioli, and truffle jelly.', burgersSection);
    addMenuItem('The BurgTown', 'A triple burger surrounded by a sampling of appetizers.', burgersSection);
    addMenuItem('The Mystery Burger', 'A mystery meat with a mystery jelly. Guess the jelly and you are entered in a monthly draw for a 200$ voucher!', burgersSection);
    addMenuItem('The Peanutbutter and Jelly', 'A burger topped with grilled onions, gruyere, peanutbutter, and raspberry jelly.', burgersSection);
    addMenuItem('The Veg Burg', 'The classic burger with a veggie patty and no cheese', burgersSection);

    //sides
    addMenuItem('Fries and Jelly', 'Steak cut fries served with tomato-based jelly.', sidesSection);
    addMenuItem('Onion Rings', 'Onion Rings with a choice of dip.', sidesSection);

    //desserts
    addMenuItem('Berries & Cream', 'A creamy jelly infused with vanilla. Topped with fresh, seasonal berries.', dessertsSection);
    addMenuItem('The Mystery Jelly', 'A mystery flavour jelly. Guess it and you are entered in a monthly draw for a 200$ voucher!', dessertsSection);
    addMenuItem('The Iceburg', 'A slushie drink with your choice of jelly flavour. Topped with a mini burger.', dessertsSection);

    //append to content
    content.appendChild(topBar);
    content.appendChild(menuSection);
};

export default goMenu;