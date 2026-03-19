document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const reveals = document.querySelectorAll(".reveal");
  const heroImage = document.querySelector(".hero img");
  const counters = document.querySelectorAll(".counter");

  /* ---------- NAVBAR SCROLL ---------- */

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  /* ---------- SMOOTH SCROLL REVEAL ---------- */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  reveals.forEach((el) => revealObserver.observe(el));

  /* ---------- HERO PARALLAX ---------- */

  function heroParallax() {
    if (!heroImage) return;

    const scroll = window.scrollY;

    heroImage.style.transform = `translate3d(0, ${scroll * 0.25}px, 0)`;
  }

  window.addEventListener("scroll", heroParallax);

  /* ---------- COUNTER ANIMATION ---------- */

  function animateCounter(counter) {
    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 180;

    function update() {
      current += increment;

      if (current < target) {
        counter.innerText = Math.ceil(current);

        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    }

    update();
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);

          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
});
