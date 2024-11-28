// Hamburger Button
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    if (hamburgerButton.textContent === '☰') {
        hamburgerButton.textContent = '✖';
    } else {
        hamburgerButton.textContent = '☰';
    }
});

// Temples Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/w4-site/filt-temple-01.avif"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/w4-site/filt-temple-02.avif"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/w4-site/filt-temple-03.avif"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/w4-site/filt-temple-04.avif"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/w4-site/filt-temple-05.avif"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/w4-site/filt-temple-06.avif"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "images/w4-site/filt-temple-07.avif"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 12000,
        imageUrl: "images/w4-site/filt-temple-08.avif"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 12345,
        imageUrl: "images/w4-site/filt-temple-09.avif"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "images/w4-site/filt-temple-10.avif"
    }
];

const gridContainer = document.querySelector('.grid-container');

function createTempleCard(temple) {
    // Create Elements
    const figure = document.createElement('figure');
    const templeName = document.createElement('h3');
    const templeLocation = document.createElement('p');
    const templeDedicated = document.createElement('p');
    const templeArea = document.createElement('p');
    const image = document.createElement('img');

    // Elements Info
    templeName.textContent = temple.templeName;
    templeLocation.textContent = `Location: ${temple.location}`;
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeArea.textContent = `Size: ${temple.area} sq ft`;

    // Images Info
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName}`;
    image.loading = 'lazy';

    // Add Elements to 'figure'
    figure.appendChild(templeName);
    figure.appendChild(templeLocation);
    figure.appendChild(templeDedicated);
    figure.appendChild(templeArea);
    figure.appendChild(image);

    return figure;
}

temples.forEach(temple => {
    const templeCard = createTempleCard(temple);
    gridContainer.appendChild(templeCard);
});

// Filter for Nav Items
const navItems = document.querySelectorAll('nav a');

function filterTemples(criteria) {
    let filteredTemples = [];

    switch (criteria) {
        case 'Old':
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear < 1900;
            });
            break;

        case 'New':
            filteredTemples = temples.filter(temple => {
                const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
                return dedicatedYear > 2000;
            });
            break;
        
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        
        case 'Home':
        default:
            filteredTemples = temples;
            break;
    }

    gridContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        gridContainer.appendChild(templeCard);
    });
};

navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const filterCriteria = event.target.textContent;
        filterTemples(filterCriteria);
    });
});

// Get current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get last modification
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;