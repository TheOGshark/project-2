function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  

  $(document).ready(function(){
    $('.image-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow:`<button type='button' class='slick-prev slick-arrow '><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
      nextArrow:`<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
      dots:true,
    });
    $('a[data-slide]').click(function(e) {
      e.preventDefault();  // Ngừng hành động mặc định của liên kết

      var slideIndex = $(this).data('slide');  // Lấy chỉ số slide từ thuộc tính data-slide
      var targetUrl = "banhkhoaimon.html?slide=" + slideIndex;  // Xây dựng URL với tham số slide

      // Chuyển hướng đến trang mới với tham số slide
      window.location.href = targetUrl;
    });
  });
 
 
  const products = [
    { 
      id:"1",
      imgUrl:"https://images.unsplash.com/photo-1548741487-18d363dc4469?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      page:"chocolatebox.html",
      name: "Chocolate tươi 1 hộp 408 gram",
      price:"376000",
    },{
      id:"2",
      imgUrl:"https://images.unsplash.com/photo-1583312228158-4001fca6e316?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      page:"belgium.html",
      name: "Chocolate Belgium",
      price:"320000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1623000850229-ad83232ea6c7?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"3",
      page:"chocblack.html",
      name: "Chocolate đen 100%",
      price:"100000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1582042837973-a13faf7e0eb4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"4",
      page:"lindt.html",
      name: "Chocolate Lindt",
      price:"200000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1674069686288-071c6e4ef838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"5",
      name: "Kẹo dẻo cầu vồng",
      page:"keodeo.html",
      price:"70000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1719825440643-5662470e5964?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"6",
      name: "Kẹo dẻo, bánh khoai môn, bánh quy các loại",
      page:"banhkhoaimon.html",
      price:"150000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1729478673847-1c1da37f86f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"7",
      name: "Bánh quy ngọt các loại",
      price:"120000",
      page:"banhngot.html",
    },{
      imgUrl:"https://plus.unsplash.com/premium_photo-1677607979859-126a98970ad4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",id:"8",
      name: "Raspberry Lemon Cake",
      price:"350000",
      page:"raspberrylemoncake.html",
    }
    
  ];
  function renderProduct() {
    const productList = document.getElementById("product-list");
  
    products.forEach((product) => {
      const divElement = document.createElement("div");
      divElement.className = "image-item";
      divElement.innerHTML = `
              <div class="image-item">
                <a href="banhkhoaimon.html#product-${product.id}" target="_blank">
                <div class="image"><img src="${product.imgUrl}" alt="">
                </div></a>
                <h3 class="image-title">${product.name}</h3>
                <p>${product.price} VNĐ</p>
                <button class="btn btn--left" onclick="addToCart('${product.name}', ${product.price})">ADD TO CART</button>
              </div>
          `;
      productList.appendChild(divElement);
    });
  }

  let cart = [];
  let total = 0;
  function toggleCart() {
    const cartElement = document.getElementById("cart");
    cartElement.style.display =
      cartElement.style.display === "block" ? "none" : "block";
  }
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
    const cartIcon = document.querySelector("#cart-logo");

    // Kiểm tra nếu cartElement và cartIcon tồn tại
    if (cartElement.contains(event.target) && cartIcon.contains(event.target)) {
    cartElement.style.display = "block";

    
  }
});
  
  // Gọi hàm renderProducts khi tài liệu đã sẵn sàng
  renderProduct();
  