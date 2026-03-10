document.addEventListener("DOMContentLoaded", function(){

// Archivo preparado para futuras funciones
console.log("SAPE Web cargada correctamente");

/* ===== MENU MOBILE ===== */

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

navMenu.classList.toggle("active");

});


/* ===== ANIMACIÓN AL ROLAR LA PÁGINA ===== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

const windowHeight = window.innerHeight;

reveals.forEach(element => {

const elementTop = element.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===== CONTADORES ===== */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target') || +counter.innerText;
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,20);

}

};

updateCounter();

});


/* ===== ANIMACIÓN LOGOS EMPRESAS ===== */

const logos = document.querySelectorAll('.logo-anim');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('show');
}

});

});

logos.forEach(logo => {
observer.observe(logo);
});

});

const form = document.getElementById("formulario");

if(form){

form.addEventListener("submit", function(){

setTimeout(function(){

document.getElementById("mensaje-exito").style.display = "block";
form.reset();

},1000);

});

}