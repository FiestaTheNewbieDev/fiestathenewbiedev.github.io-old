const navbar = document.querySelector("nav");
const navbarDroppedMenus = navbar.getElementsByClassName("dropdown-menu");

let lastScroll = 0;

window.addEventListener("scroll", revealNavbar)

function revealNavbar() {
    let currentScroll = window.pageYOffset;
    if(currentScroll - lastScroll > 0) {
        navbar.classList.remove("scroll-up");
        navbar.classList.add("scroll-down");
        Array.prototype.forEach.call(navbarDroppedMenus, (element) => {
            element.classList.remove("show");
        });
    } else {
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
}