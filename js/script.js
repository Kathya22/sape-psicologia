document.addEventListener("DOMContentLoaded", function(){

console.log("SAPE Web cargada correctamente");

/* MENU MOBILE */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle && navMenu){

menuToggle.addEventListener("click", function(){
navMenu.classList.toggle("active");
});

}

/* ANIMACIÓN SCROLL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(function(element){

const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* CONTADORES */

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter){

const target = +counter.getAttribute("data-target");
let count = 0;

function updateCounter(){

const increment = target / 100;

count += increment;

if(count < target){

counter.innerText = Math.ceil(count);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

}

updateCounter();

});

/* ANIMACIÓN LOGOS */

const logos = document.querySelectorAll(".logo-anim");

if(logos.length){

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

logos.forEach(logo => observer.observe(logo));

}

});