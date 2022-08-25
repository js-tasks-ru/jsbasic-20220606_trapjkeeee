import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {   
      const dataCarousel = document.querySelector('[data-carousel-holder]');
      const dataRibbon = document.querySelector('[data-ribbon-holder]');
      const dataSlider = document.querySelector('[data-slider-holder]');
      const dataCart = document.querySelector('[data-cart-icon-holder]');
      const dataProducts = document.querySelector('[data-products-grid-holder]');

      this.carousel = new Carousel(slides);
      this.ribbonMenu = new RibbonMenu(categories);
      this.stepSlider  = new StepSlider({steps: 5,value: 3});
      this.cartIcon = new CartIcon();
      this.cart = new Cart(this.cartIcon);

      

      this.response = await fetch("products.json");
        if (this.response.ok) {
          this.products = await this.response.json();
        }

        this.productsGrid = new ProductsGrid(this.products)


        dataCarousel.append(this.carousel.elem);
        dataRibbon.append(this.ribbonMenu.elem);
        dataSlider.append(this.stepSlider.elem);
        dataCart.append(this.cartIcon.elem);
        dataProducts.append(this.productsGrid.elem);

        this.productsGrid.updateFilter({
          noNuts: document.getElementById('nuts-checkbox').checked,
          vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,
          maxSpiciness: this.stepSlider.value,
          category: this.ribbonMenu.value
        });

        document.body.addEventListener("product-add", event =>{
          let productId = event.detail;
          let productFind = this.products.find(item => item.id === productId);
          this.cart.addProduct(productFind)
        })


        document.body.addEventListener("slider-change", event =>{
          this.productsGrid.updateFilter({
            maxSpiciness: event.detail // значение остроты из события 'slider-change'
          });
        })

        document.body.addEventListener("ribbon-select", event =>{
          this.productsGrid.updateFilter({
            category: event.detail 
          });
        })

        const nutsCheckbox = document.querySelector('#nuts-checkbox')
        const vegeterianCheckbox = document.querySelector('#vegeterian-checkbox')




        nutsCheckbox.addEventListener("change", event =>{
          console.log(event.target)
          this.productsGrid.updateFilter({
            noNuts: event.target.checked  
          });
        })

        vegeterianCheckbox.addEventListener("change", event =>{
          console.log(event.target)
          this.productsGrid.updateFilter({
            vegeterianOnly: event.target.checked  
          });
        })
      

  }
}
