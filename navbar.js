// ==============================
// Mobile Navigation
// ==============================

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});

// ==============================
// Close Menu After Click
// ==============================

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});

// ==============================
// Navbar Scroll Effect
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.classList.add("scrolled");

    }
    else{

        header.classList.remove("scrolled");

    }

});

// ==============================
// Active Menu Highlight
// ==============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});