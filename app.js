document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. REVELADO SUAVE AL HACER SCROLL (INTERSECTION OBSERVER)
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Se ejecuta solo una vez
      }
    });
  }, observerOptions);

  // Seleccionar todos los elementos con la clase .reveal
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => revealOnScroll.observe(el));


  // ==========================================
  // 2. CONTEO REGRESIVO EN TIEMPO REAL
  // ==========================================
  const eventDate = new Date("October 10, 2026 20:00:00").getTime();

  const updateTimer = () => {
    const now = new Date().getTime();
    const difference = eventDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
      if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
      if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
      if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
    } else {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minutesEl) minutesEl.innerText = "00";
      if (secondsEl) secondsEl.innerText = "00";
    }
  };

  setInterval(updateTimer, 1000);
  updateTimer();


  // ==========================================
  // 3. PARALLAX SUAVE EN EL BANNER HERO
  // ==========================================
  const hero = document.getElementById('hero');
  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    if (hero && scrollValue < 600) {
      hero.style.backgroundPositionY = `${scrollValue * 0.35}px`;
    }
  });

});
