window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var header = document.getElementById("header");
    var headerHeight = header.offsetHeight;
    
    if (window.scrollY > headerHeight) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var aboutSection = document.getElementById("about");
    var navbarHeight = navbar.offsetHeight;

    if (window.scrollY > navbarHeight) {
        navbar.classList.add("sticky-nav");
        aboutSection.style.paddingTop = navbarHeight + "px";
    } else {
        navbar.classList.remove("sticky-nav");
        aboutSection.style.paddingTop = "0px";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarNav");
    var navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); // Simulate click to close menu
            }
        });
    });
});
