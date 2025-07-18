// script.js

function toggleSubcategories(category) {
  const allCards = document.querySelectorAll(".category-card");
  allCards.forEach(card => {
    if (card.getAttribute("onclick").includes(category)) {
      card.classList.toggle("active");
    } else {
      card.classList.remove("active");
    }
  });
}
