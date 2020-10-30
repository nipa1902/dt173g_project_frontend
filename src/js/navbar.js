let navbar = document.querySelector("nav#nav-hamburger");
let button = document.querySelector("button#hamburger-toggle");

button.addEventListener('click', function() {
    navbar.classList.toggle("showNav");
    button.classList.toggle("closeNav");
});

// Puts an event listener on each nav-link so that when clicking them you close ham nav
let hamlinks = document.querySelectorAll(".hamburger-links");

// Due most likely to the punishment of God, if I do not use anonymous functions the transpilation in babel does not work, so we have to repeat the classList toggles
hamlinks.forEach((x) => {
    x.addEventListener('click', function() {
        navbar.classList.toggle("showNav");
        button.classList.toggle("closeNav");
})});