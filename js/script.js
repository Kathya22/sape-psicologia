document.addEventListener("DOMContentLoaded", function(){

// Archivo preparado para futuras funciones como validación de formulario
// Mantener JS separado mejora mantenimiento y escalabilidad del proyecto

console.log("SAPE Web cargada correctamente");

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if(toggle && menu){
toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});
}

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

/* activar también al cargar */
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

});