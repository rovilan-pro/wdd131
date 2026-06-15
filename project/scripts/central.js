const year = document.getElementById("currentyear");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {
            menuButton.textContent = "✖";
        } else {
            menuButton.textContent = "☰";
        }
    });
}