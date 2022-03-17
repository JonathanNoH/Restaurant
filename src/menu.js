import './style.css';

const content = document.querySelector('#content');

const goMenu = () => {
    //add top bar
    const topBar = document.createElement('div');
    topBar.classList.add('menuHeader');
    const addTopHeader = (string) => {
        const topHeader = document.createElement('div');
        topHeader.innerText = string;
        topBar.appendChild(topHeader);
        return topHeader;
    }
    const appetizersHeader = addTopHeader("Appetizers");
    const burgersHeader = addTopHeader("Burgers");
    const sidesHeader = addTopHeader("Sides");
    const jelliesHeader = addTopHeader("Jellies and Desserts");

    //add section headers
    const menuSection = document.createElement('div');
    menuSection.classList.add('menuSection');
    const createSection = (string) => {
        const section = document.createElement('div');
        addSection(string, section);
        return section;
    }
    const addSection = (string, section) => {
        section.id = string.toLowerCase().trim();
        const sectionHeader = document.createElement('div');
        sectionHeader.innerText = string;
        section.appendChild(sectionHeader);
        menuSection.appendChild(section);
    }

    const appetizersSection = createSection("Appetizers");
    appetizersHeader.addEventListener('click', () => {
        appetizersSection.scrollIntoView();
    })
    const burgersSection = createSection("Burgers");
    burgersHeader.addEventListener('click', () => {
        burgersSection.scrollIntoView();
    })
    const sidesSection = createSection("Sides");
    sidesHeader.addEventListener('click', () => {
        sidesSection.scrollIntoView();
    })
    const jelliesSection = createSection("Jellies and Desserts");
    jelliesHeader.addEventListener('click', () => {
        jelliesSection.scrollIntoView();
    })
    //add menu items
    const addMenuItem = (item, description, section) => {
        const menuItemDiv = document.createElement('div');
        
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

    //burgers
    addMenuItem('The Burg', 'A classic burger loaded with all the fixings plus a healthy serving of our seasonal jelly.', burgersSection);
    addMenuItem('The Baron Von Burgermeister', 'The regal burger: bacon, lettuce, tomato, grilled onions, garlic aioli, and truffle jelly.', burgersSection);
    addMenuItem('The Veg Burg', 'The classic burger with a veggie patty and no cheese', burgersSection);

    //sides
    addMenuItem('Fries and Jelly', 'Steak cut fries served with tomato-based jelly.', sidesSection);

    //desserts

    //append to content
    content.appendChild(topBar);
    content.appendChild(menuSection);
};

export default goMenu;