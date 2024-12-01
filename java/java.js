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
  });
 
 
  const products = [
    {
      imgUrl:"https://images.unsplash.com/photo-1548741487-18d363dc4469?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate tươi 1 hộp 408 gram",
      price:"476.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1583312228158-4001fca6e316?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate Belgium",
      price:"320.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1623000850229-ad83232ea6c7?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate đen 100%",
      price:"100.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1582042837973-a13faf7e0eb4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Chocolate Lindt",
      price:"200.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1674069686288-071c6e4ef838?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kẹo dẻo cầu vồng",
      price:"70.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1719825440643-5662470e5964?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kẹo dẻo, bánh khoai môn, bánh quy các loại",
      price:"150.000",
    },{
      imgUrl:"https://images.unsplash.com/photo-1729478673847-1c1da37f86f6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bánh quy ngọt các loại",
      price:"120.000",
    },{
      imgUrl:"https://plus.unsplash.com/premium_photo-1677607979859-126a98970ad4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Raspberry Lemon Cake",
      price:"350.000",
    }
    
  ];
  function renderProduct() {
    const productList = document.getElementById("product-list");
  
    products.forEach((product) => {
      const divElement = document.createElement("div");
      divElement.className = "image-item";
      divElement.innerHTML = `
              <div class="image-item">
                <a href="">
                <div class="image"><img src="${product.imgUrl}" alt="">
                </div></a>
                <h3 class="image-title">${product.name}</h3>
                <p>${product.price} VNĐ</p>
                <button class="btn btn--left">ADD TO CART</button>
              </div>
          `;
      productList.appendChild(divElement);
    });
  }
  
  renderProduct();