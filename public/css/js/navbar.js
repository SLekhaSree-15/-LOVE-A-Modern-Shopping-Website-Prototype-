document.addEventListener('DOMContentLoaded', () => {
  // Example: Fetch cart count from localStorage or an API
  let cartCount = localStorage.getItem('cartCount') || 0;
  const cartCountSpan = document.getElementById('cart-count');
  if(cartCountSpan) {
    cartCountSpan.textContent = cartCount;
  }
});
