// Get products from localStorage
function getProducts() {
    return JSON.parse(localStorage.getItem('products')) || [];
}

// Save products to localStorage
function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

let editIndex = null; // To keep track of which product to update

// Render product cards
function renderProducts() {
    const productList = document.getElementById('productList');
    const products = getProducts();

    productList.innerHTML = ''; // Clear previous list

    if (products.length === 0) {
        productList.innerHTML = '<p>No products available.</p>';
        return;
    }

    products.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('card', 'mb-3');
        card.innerHTML = `
            <div class="card-body">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Brand: ${product.brand}</p>
                <p>Color: ${product.color}</p>
                <p>Quantity: ${product.quantity}</p>
                <button class="btn-edit" data-index="${index}">Edit</button>
                <button class="btn-delete" data-index="${index}">Delete</button>
            </div>
        `;
        productList.appendChild(card);
    });

    // Delete product
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.dataset.index;
            const products = getProducts();
            products.splice(index, 1);
            saveProducts(products);
            renderProducts();
        });
    });

    // Edit product
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', function () {
            editIndex = this.dataset.index;
            const product = getProducts()[editIndex];

            // Pre-fill form
            document.getElementById('title').value = product.title;
            document.getElementById('description').value = product.description;
            document.getElementById('price').value = product.price;
            document.getElementById('category').value = product.category;
            document.getElementById('brand').value = product.brand;
            document.getElementById('color').value = product.color;
            document.getElementById('quantity').value = product.quantity;

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Handle form submission
document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const newProduct = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        price: parseFloat(document.getElementById('price').value).toFixed(2),
        category: document.getElementById('category').value,
        brand: document.getElementById('brand').value,
        color: document.getElementById('color').value,
        quantity: parseInt(document.getElementById('quantity').value),
    };

    const products = getProducts();

    if (editIndex !== null) {
        // Update existing product
        products[editIndex] = newProduct;
        editIndex = null;
    } else {
        // Add new product
        products.push(newProduct);
    }

    saveProducts(products);
    document.getElementById('productForm').reset();
    renderProducts();
});

// Initial load
renderProducts();
