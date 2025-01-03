document.querySelectorAll('.product-option input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function () {

      document.querySelectorAll('.checked-img-radio2').forEach((img) => {
        img.style.opacity = '0';
      });
  

      const checkedImg = this.closest('.product-option').querySelector('.checked-img-radio2');
      if (checkedImg) {
        checkedImg.style.opacity = '1';
      }
    });
  });

  function changeImage() {
    if (document.getElementById('basic-plan').checked){
      document.getElementById('product-image').src = 'img/buy-img-1.jpg';
    }else if(document.getElementById('pro-plan').checked){
      document.getElementById('product-image').src = 'img/buy-img-2.jpg';
    }else if(document.getElementById('enterprise-plan').checked){
      document.getElementById('product-image').src = 'img/buy-img-3.jpg';
    }
}