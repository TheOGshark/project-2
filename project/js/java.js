function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Hiển thị hoặc ẩn nút khi người dùng cuộn trang
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Hiển thị nút khi cuộn xuống 500px
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }
  