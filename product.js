const products = [
  {
    imgUrl:
      "https://product.hstatic.net/1000341630/product/kmsh220633_75cb0c2945474917b2528e802806fb39_master.jpg",
    name: "Áo đá bóng",
    price: "10000",
  },
  {
    imgUrl:
      "https://5sfashion.vn/storage/upload/images/posts/noRwM6XbHadYnKG47Bw3VMNAorTkuUQJhUC72sHp.jpg",
    name: "Áo đá bóng",
    price: "10000đ",
  },

  {
    imgUrl:
      "https://down-vn.img.susercontent.com/file/1234b2a2d4ccbcdc4357c818cf58a1f7",
    name: "Áo đá bóng",
    price: "10000đ",
  },
  {
    imgUrl:
      "https://product.hstatic.net/1000341630/product/kmsh220633_75cb0c2945474917b2528e802806fb39_master.jpg",
    name: "Áo đá bóng",
    price: "10000đ",
  },
  
];


function renderProduct() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const divElement = document.createElement("div");
    divElement.className = "product";
    divElement.innerHTML = `
            <img src="${product.imgUrl}" alt="">
            <p>${product.name}</p>
            <p>${product.price} VNĐ</p>
            <button>Thêm vào giỏ</button>
        `;
    productList.appendChild(divElement);
  });
}

renderProduct();
