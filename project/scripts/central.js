document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menu-button");
    const nav = document.querySelector(".navigation");
    const lastModified = document.getElementById("lastModified");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");

            menuButton.textContent =
                nav.classList.contains("open") ? "✖" : "☰";
        });
    }

    if (lastModified) {
        lastModified.textContent =
            `Last Modification: ${document.lastModified}`;
    }

    const business = {
        name: "Tala Maris",
        location: "Dasmariñas, Cavite",
        contact: "0908-775-1528"
    };

    console.log(business.name);
    console.log(business.location);
    console.log(business.contact);

    const products = [
        { name: "Maroon Coat", price: 8000 },
        { name: "Wedding Dress Royal", price: 12000 },
        { name: "Wedding Dress Floral", price: 12000 },
        { name: "Orange Dress", price: 5000 },
        { name: "Dark Blue Dress", price: 5000 }
    ];

    const figures = document.querySelectorAll(".gallery figure");

    figures.forEach((fig, index) => {
        const product = products[index];

        if (product) {
            const captions = fig.querySelectorAll("figcaption");

            if (captions.length >= 2) {
                captions[0].textContent = product.name;
                captions[1].textContent = `₱${product.price}`;
            }
        }
    });

    document.body.appendChild(productList);

        if (!localStorage.getItem("visited")) {
            alert("Welcome to Tala Maris!");
            ocalStorage.setItem("visited", "true");
        }

    });