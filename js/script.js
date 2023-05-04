
const navbar = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", revealNavbar)

function revealNavbar() {
    let currentScroll = window.pageYOffset;
    if(currentScroll - lastScroll > 0) {
        navbar.classList.remove("scroll-up");
        navbar.classList.add("scroll-down");
    } else {
        navbar.classList.remove("scroll-down");
        navbar.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
}