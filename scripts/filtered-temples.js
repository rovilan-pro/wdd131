document.getElementById("currentyear").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
`Last Modification: ${document.lastModified}`;

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});

const temples = [
    {templeName:"Aba Nigeria Temple",
     location:"Aba Nigeria",
     dedicated:"7 August 2005",
     area:11500,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {templeName:"Abidjan Ivory Coast Temple",
     location:"Abidjan Cote d'Ivoire",
     dedicated:"25 May 2025",
     area:17362,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },
    {templeName:"Accra Ghana Temple",
     location:"Accra Ghana",
     dedicated:"11 January 2004",
     area:17500,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {templeName:"Adelaide Australia Temple",
     location:"Adelaide Australia",
     dedicated:"15 June 2000",
     area:10700,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg"
    },
    {templeName:"Alabang Philippines Temple",
     location:"Alabang Philippines",
     dedicated:"18 January 2026",
     area:35998,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg"
    },
    {templeName:"Albuquerque New Mexico Temple",
     location:"Albuquerque New Mexico",
     dedicated:"5 March 2000",
     area:34245,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"
    },
    {templeName:"Salt Lake Temple",
     location:"Salt Lake Temple",
     dedicated:"6-24 April 1893",
     area:382207,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {templeName:"Antofagasta Chile Temple",
     location:"Antofagasta Chile",
     dedicated:"15 June 2025",
     area:26163,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
    },
    {templeName:"Apia Samoa Temple",
     location:"Apia Samoa",
     dedicated:"5-7 August 1983",
     area:18691,
     imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    }
];

function getYear(text) {
    return parseInt(text.match(/\d{4}/)[0]);
}

function displayTemples(list) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedication:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()}</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => getYear(t.dedicated) < 1900)
    );
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => getYear(t.dedicated) > 2000)
    );
});

document.querySelector("#large").addEventListener("click", (e) => 
    { e.preventDefault(); displayTemples( temples.filter(temple => temple.area > 90000 ) ); });

document.querySelector("#small").addEventListener("click", (e) => 
    { e.preventDefault(); displayTemples( temples.filter(temple => temple.area < 10000 ) ); });

