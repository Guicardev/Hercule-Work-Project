// Animation pour mettre les contour des cartes de nos articles en couleur oranges

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.02)";

    card.style.boxShadow = "0 0 15px rgba(243, 156, 18, 0.5)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";

    card.style.boxShadow = "none";
  });
});

// Trie des articles dans la barre de recherche directement

const input = document.querySelector(".search-input");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();

  document.querySelectorAll(".card").forEach((card) => {
    const text = card.innerText.toLowerCase();

    card.style.display = text.includes(query) ? "block" : "none";
  });
});

// Gestion du dark mode

const toggle = document.getElementById("dark-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  toggle.textContent = document.body.classList.contains("dark-mode")
    ? "Mode clair"
    : "Mode nuit";
});
