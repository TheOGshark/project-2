let cart = [];
let total = 0;

// Dữ liệu sản phẩm
const products = [
  { name: "Sản Phẩm 1", price: 100000 },
  { name: "Sản Phẩm 2", price: 200000 },
  { name: "Sản Phẩm 3", price: 300000 },
  { name: "Sản Phẩm 4", price: 300000 },
];

// Tạo danh sách sản phẩm
function renderProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Giá: ${product.price} VNĐ</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Thêm vào giỏ</button>
        `;
    productList.appendChild(productDiv);
  });
}

// Hàm hiển thị giỏ hàng
function toggleCart() {
  const cartElement = document.getElementById("cart");
  cartElement.style.display =
    cartElement.style.display === "block" ? "none" : "block";
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, productPrice) {
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
  }

  updateCart();
}

// Cập nhật giỏ hàng
function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";
  total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ${item.price} VNĐ x ${item.quantity} 
            <button onclick="changeQuantity('${item.name}', 1)">+</button>
            <button onclick="changeQuantity('${item.name}', -1)">-</button>`;
    cartItemsElement.appendChild(li);

    total += item.price * item.quantity;
  });

  document.getElementById("cart-count").innerText = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  document.getElementById("total-price").innerText = total + " VNĐ";
}

// Thay đổi số lượng sản phẩm trong giỏ hàng
function changeQuantity(productName, delta) {
  const product = cart.find((item) => item.name === productName);

  if (product) {
    product.quantity += delta;

    if (product.quantity <= 0) {
      cart = cart.filter((item) => item.name !== productName);
    }

    updateCart();
  }
}

// Thêm sự kiện click cho toàn bộ tài liệu
document.addEventListener("click", function (event) {
  const cartElement = document.getElementById("cart");
  const cartIcon = document.querySelector(".cart-icon");

  // Kiểm tra xem click có xảy ra bên trong giỏ hàng hoặc biểu tượng giỏ hàng không
  if (!cartElement.contains(event.target) && !cartIcon.contains(event.target)) {
    cartElement.style.display = "none";
  }
});

// Gọi hàm renderProducts khi tài liệu đã sẵn sàng
renderProducts();
