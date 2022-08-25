import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    let render = `
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      </div>`

    this.elem = createElement(render);
    
    this.elem.addEventListener('click', (event) => this.scrollRight(event));
    this.elem.addEventListener('click', (event) => this.scrollLeft(event));
    this.elem.addEventListener('click', (event) => this.ribbonSelected(event));


    
  }
  
  scrollRight(event){
    let ribbonInner = document.querySelector('.ribbon__inner');
    let scrollLeft = ribbonInner.scrollLeft;
    let arrowLeft = document.querySelector('.ribbon__arrow_left');
    let arrowRight = document.querySelector('.ribbon__arrow_right');
    
    
    if (event.target.closest('.ribbon__arrow_right')){
      switch(scrollLeft){

        case 0:
        ribbonInner.scrollBy(350, 0);
        arrowLeft.classList.toggle('ribbon__arrow_visible');
        break;

        case 350:
        ribbonInner.scrollBy(350, 0);
        arrowRight.classList.toggle('ribbon__arrow_visible');
        break;
      }   
    }
  }

  scrollLeft(event){
    let ribbonInner = document.querySelector('.ribbon__inner');
    let scrollLeft = ribbonInner.scrollLeft;
    let scrollWidth = ribbonInner.scrollWidth;
    let clientWidth = ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    let arrowLeft = document.querySelector('.ribbon__arrow_left');
    let arrowRight = document.querySelector('.ribbon__arrow_right');

    
    
    
    if (event.target.closest('.ribbon__arrow_left')){
      switch(scrollRight){

        case 185:
        ribbonInner.scrollBy(-350, 0);
        arrowLeft.classList.toggle('ribbon__arrow_visible');
        
        break;

        case 0:
        ribbonInner.scrollBy(-350, 0);
        arrowRight.classList.toggle('ribbon__arrow_visible');
        break;

        case 350:
        ribbonInner.scrollBy(-350, 0);
        arrowLeft.classList.toggle('ribbon__arrow_visible');
        break;
      }   
    }

  }

  ribbonSelected(event){
    event.preventDefault();
    let ribbonItem = event.target.closest('.ribbon__item');
    let ribbonItemAll = document.querySelectorAll('.ribbon__item');
    
    if (ribbonItem){
      ribbonItemAll.forEach(elem => elem.classList.remove('ribbon__item_active'))
      ribbonItem.classList.add('ribbon__item_active');
      


    let myEvent = new CustomEvent("ribbon-select", {
      detail: ribbonItem.dataset.id, 
      bubbles: true 
    });
    this.elem.dispatchEvent(myEvent);
    }
  }

  

}
