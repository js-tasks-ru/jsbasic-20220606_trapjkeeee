import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    
    let innerCarousel = this.slides.map(item => {
      return`
      <div class="carousel__slide" data-id="${item.id}">
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
    }).join('');
    
    let render = `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right" >
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left" style="display:none">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>    
        <div class="carousel__inner">           
          ${innerCarousel}
        </div>
      </div>`
    this.elem = createElement(render);
    
    
    this.elem.addEventListener('click', (event) => this.addProduct(event));
    this.elem.addEventListener('click', (event) => this.swipeLeft(event));
    this.elem.addEventListener('click', (event) => this.swipeRight(event));
    
    

    
  }
  addProduct(event){  
      
    if (event.target.closest('.carousel__button')){ 
      let data = event.target.closest('.carousel__slide');
      
        let myEvent = new CustomEvent("product-add", {
          detail: data.dataset.id, 
          bubbles: true, 
      });
      
      this.elem.dispatchEvent(myEvent);
      };
    }
  
    



  swipeLeft(event){
    let arrowLeft = event.target.closest('.carousel__arrow_left');
        
    if(event.target.closest('.carousel__arrow_left')){
    let arrowRight = document.querySelector('.carousel__arrow_right');
    let carousel = document.querySelector('.carousel__inner');
    let carouselWidth = carousel.offsetWidth;

      switch(carousel.style.transform) {
        case "translateX(-" + carouselWidth + "px)":
          carousel.style.transform = "";
          arrowLeft.style.display = 'none';
          break;
        case "translateX(-" + carouselWidth * 2 + "px)":
          carousel.style.transform = "translateX(-" + carouselWidth + "px)";
          arrowRight.style.display = '';

          break;
        case "translateX(-" + carouselWidth * 3 + "px)":
          carousel.style.transform = "translateX(-" + carouselWidth * 2 +"px)";
          arrowRight.style.display = '';
        break;
      }
    }
    
  }

  swipeRight(event){
    let arrowRight = event.target.closest('.carousel__arrow_right');
    let carousel = document.querySelector('.carousel__inner');
    let arrowLeft = document.querySelector('.carousel__arrow_left');
    let carouselWidth = carousel.offsetWidth;
    if(arrowRight){
      switch(carousel.style.transform) {
        case "":
          carousel.style.transform = "translateX(-" + carouselWidth + "px)";
          arrowLeft.style.display = '';
          break;
        case "translateX(-" + carouselWidth + "px)":
          carousel.style.transform = "translateX(-" + carouselWidth * 2 + "px)";
          arrowRight.style.display = 'none';
          break;
        case "translateX(-" + carouselWidth * 2 + "px)":
          carousel.style.transform = "translateX(-" + carouselWidth * 3 +"px)";
          

          break;
      }
    }
    
  }

}
