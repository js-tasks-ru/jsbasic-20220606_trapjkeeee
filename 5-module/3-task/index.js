function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let carouselWidth = carousel.offsetWidth;


  arrowLeft.style.display = 'none';
  

  function swipeLeft(){
    switch(carousel.style.transform) {
      case "translateX(-"+carouselWidth+"px)":
        carousel.style.transform = "";
        arrowLeft.style.display = 'none';
        break;
      case "translateX(-"+carouselWidth*2+"px)":
        carousel.style.transform = "translateX(-"+carouselWidth+"px)";
        break;
      case "translateX(-"+carouselWidth*3+"px)":
        carousel.style.transform = "translateX(-"+carouselWidth*2+"px)";
        arrowRight.style.display = '';
      break;
    }
  }


  function swipeRight(){
    switch(carousel.style.transform) {
      case "":
        carousel.style.transform = "translateX(-"+carouselWidth+"px)";
        arrowLeft.style.display = '';
        break;
      case "translateX(-"+carouselWidth+"px)":
        carousel.style.transform = "translateX(-"+carouselWidth*2+"px)";
        break;
      case "translateX(-"+carouselWidth*2+"px)":
        carousel.style.transform = "translateX(-"+carouselWidth*3+"px)";
        arrowRight.style.display = 'none';
        break;
    }
  }

  arrowLeft.addEventListener('click', swipeLeft);
  arrowRight.addEventListener('click', swipeRight);
}
