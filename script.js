// === script.js ===

// Slider automatique
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-image img");
setInterval(() => {
  slides.forEach((s, i) => {
    s.style.display = i === currentSlide ? "block" : "none";
  });
  currentSlide = (currentSlide + 1) % slides.length;
}, 4000);

// Sidebar : afficher contenu selon le menu cliqué
const sidebarItems = document.querySelectorAll(".sidebar ul li");
const contentTitle = document.querySelector(".content h2");
const contentText = document.querySelector(".content p");

const texts = {
  "Présentation": "Présentation de l’école SUP’TEMA et ses objectifs.",
  "Stratégie": "Notre stratégie repose sur l’innovation et la qualité pédagogique.",
  "Pédagogie": "Une pédagogie active basée sur la pratique et les projets.",
  "Équipements": "Des équipements modernes pour un apprentissage optimal.",
  "Partenariat": "Des partenariats solides avec des entreprises et institutions."
};

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    sidebarItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
    contentTitle.textContent = item.textContent;
    contentText.textContent = texts[item.textContent] || "";
  });
});
