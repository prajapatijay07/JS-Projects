document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const brand = document.getElementById("brand").value;
    const color = document.getElementById("color").value;
    const quantity = document.getElementById("quantity").value;
  
    const product = {
      title,
      description,
      price,
      category,
      brand,
      color,
      quantity,
    };
  
    saveProductToLocalStorage(product);
    addProductToList(product);
    this.reset();
  });
  
  function saveProductToLocalStorage(product) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  function loadProductsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.forEach((product) => addProductToList(product));
  }
  
  function addProductToList(product) {
    const productList = document.getElementById("productList");
  
    const card = document.createElement("div");
    card.className = "product-card";
  
    card.innerHTML = `
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Color:</strong> ${product.color}</p>
      <p><strong>Quantity:</strong> ${product.quantity}</p>
      <button class="add-cart-btn">Add to Cart</button>
    `;
  
    card.querySelector(".add-cart-btn").addEventListener("click", function () {
      addToCart(product);
    });
  
    productList.appendChild(card);
  }
  
  function addToCart(product) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItem(product);
    updateCartCount();
  }
  
  function displayCartItem(item) {
    const carts = document.getElementById("carts");
  
    const card = document.createElement("div");
    card.classList.add("cart-card");
  
    card.innerHTML = `
      <h4 class="cart-title">${item.title}</h4>
      <p><strong>Description:</strong> ${item.description}</p>
      <p><strong>Price:</strong> ₹${item.price}</p>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Brand:</strong> ${item.brand}</p>
      <p><strong>Color:</strong> ${item.color}</p>
      <p><strong>Quantity:</strong> ${item.quantity}</p>
      <button class="remove-btn">Remove</button>
    `;
  
    card.querySelector(".remove-btn").addEventListener("click", function () {
      removeCartItem(item.title);
      card.remove();
    });
  
    carts.appendChild(card);
  }
  
  function removeCartItem(title) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems = cartItems.filter((item) => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartCount();
  }
  
  function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelector(".cart-count").textContent = cartItems.length;
  }
  
  window.addEventListener("load", () => {
    loadProductsFromLocalStorage();
  
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.forEach((item) => displayCartItem(item));
    updateCartCount();
  });