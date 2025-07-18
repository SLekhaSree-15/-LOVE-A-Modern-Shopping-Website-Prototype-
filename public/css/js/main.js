document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");

  categories.forEach(category => {
    category.addEventListener("click", () => {
      const subId = `${category.dataset.category}-sub`;
      const subcategories = document.getElementById(subId);

      if (subcategories.style.display === "block") {
        subcategories.style.display = "none";
      } else {
        subcategories.style.display = "block";
      }
    });
  });
});
