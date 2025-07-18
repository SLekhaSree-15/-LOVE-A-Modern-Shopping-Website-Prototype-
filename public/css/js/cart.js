document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
      e.preventDefault();

      const button = e.target;
      const productId = button.getAttribute('data-id');

      console.log('Add to Cart button clicked for productId:', productId);
      alert('Add to Cart clicked! Product ID: ' + productId);

      // You can comment out below to test only click detection
      /*
      // Your fetch code here (commented for now)
      */
    }
  });
});

function showAddedToCartMessage() {
  const msg = document.createElement('div');
  msg.textContent = '💖 Added to cart!';
  msg.style.position = 'fixed';
  msg.style.top = '20px';
  msg.style.right = '20px';
  msg.style.background = '#9c27b0';
  msg.style.color = 'white';
  msg.style.padding = '10px 20px';
  msg.style.borderRadius = '8px';
  msg.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  msg.style.zIndex = 10000;
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}
