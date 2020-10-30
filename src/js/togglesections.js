// Perhaps we could make one function for making the event-listener and pass the elements as variable-arguments


// I select education to be shown
// We grab the three elements we need: one is the section, one is the span that controls clicks, one a cluster of link items
let education = document.getElementById("education");
let educationspan = document.getElementById("displayeducation");
let edlinks = document.querySelectorAll(".educationlink");

// Adds click-to-show functionality to all the links (menu items + span)
edlinks.forEach((x) => {
    x.addEventListener("click", function() {
        hideAll();
        education.classList.toggle("hide-element");
        educationspan.classList.toggle("active");
})});



// Same code for WORK
let work = document.getElementById("work");
let workspan = document.getElementById("displaywork");

let worklinks = document.querySelectorAll(".worklink");
worklinks.forEach((x) => {

    x.addEventListener("click", function() {
        hideAll();
        work.classList.toggle("hide-element");
        workspan.classList.toggle("active");
})});



// Same code for PORTFOLIO
let portfolio = document.getElementById("portfolio");
let portfoliospan = document.getElementById("displayportfolio");
let portfoliolinks = document.querySelectorAll(".portfoliolink");

portfoliolinks.forEach((x) => {
    x.addEventListener("click", function() {
        hideAll();
        portfolio.classList.toggle("hide-element");
        portfoliospan.classList.toggle("active");
})});


// Hide active class from all spans
function hideAll() {
    let spans = document.querySelectorAll(".active");
        spans.forEach((x) => {
        x.classList.toggle("active");
    })

    // Hide whatever output div we did not click on
    let outputdivs = document.querySelectorAll(".output-div");

    outputdivs.forEach((x) => {
    if (!x.classList.contains("hide-element")) {
        x.classList.toggle("hide-element");
    }
    })

};

