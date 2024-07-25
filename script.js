const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
  })  
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })  
  }





  var cart = [];

  function addToCart(product, price, image) {
      const existingProductIndex = cart.findIndex(item => item.product === product);
  
      if (existingProductIndex !== -1) {
          cart[existingProductIndex].quantity++;
          cart[existingProductIndex].subtotal += price;
      } else {
          cart.push({
              product,
              price,
              quantity: 1,
              subtotal: price,
              image
          });
      }
      saveCart(); // Save cart to localStorage
      renderCart();
  }
  
  function removeFromCart(product) {
      cart = cart.filter(item => item.product !== product);
      saveCart(); // Save cart to localStorage
      renderCart();
  }
  
  function renderCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
  
      let subtotal = 0;
  
      cart.forEach(item => {
          subtotal += item.subtotal;
  
          const row = document.createElement('tr');
          row.innerHTML = `
              <td><a href="#" onclick="removeFromCart('${item.product}')"><i class="far fa-times-circle"></i></a></td>
              <td><img src="${item.image}" alt=""></td>
              <td>${item.product}</td>
              <td>Rs ${item.price}</td>
              <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.product}', this.value)"></td>
              <td>Rs ${item.subtotal}</td>
          `;
          cartItems.appendChild(row);
      });
  
      document.getElementById('cart-subtotal').innerText = `Rs ${subtotal}`;
      document.getElementById('cart-total').innerText = `Rs ${subtotal}`;
  }
  
  function updateQuantity(product, quantity) {
      const item = cart.find(item => item.product === product);
      item.quantity = parseInt(quantity);
      item.subtotal = item.price * item.quantity;
      saveCart(); // Save cart to localStorage
      renderCart();
  }
  
  function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function loadCart() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
          cart = JSON.parse(storedCart);
          renderCart();
      }
  }
  
  function clearCart() {
      cart = [];
      localStorage.removeItem('cart');
      renderCart();
  }
  
  function proceedToCheckout() {
      // Redirect to payment page or handle payment integration here
      window.location.href = 'payment.html';
  }
  
  // Sample products for demonstration purposes
  document.addEventListener('DOMContentLoaded', () => {
      loadCart();
  });





  document.addEventListener('DOMContentLoaded', () => {
    // Load cart data into the hidden input field for submission
    const cartDataInput = document.getElementById('cartData');
    cartDataInput.value = JSON.stringify(cart);
});

