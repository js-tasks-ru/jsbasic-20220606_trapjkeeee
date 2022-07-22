import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    let sliderSteps = steps;
    let renderSteps = ``;

    for (let i = 0; i < sliderSteps - 1; i++){
      renderSteps += `<span></span>\n`;
    } 

    let render = `<div class="slider">
    <div class="slider__thumb" style="left: 0%;">
      <span class="slider__value">0</span>
    </div>
    <div class="slider__progress" style="width: 0%;"></div>
    <div class="slider__steps">
      <span class="slider__step-active"></span>
      ${renderSteps}
    </div>
  </div>`
  
  this.elem = createElement(render);
  
  this.elem.addEventListener('click', (event) => this.select(event));
  this.elem.addEventListener('click', (event) => this.sladerChange(event));

    
  }

  select(event){
    let slider = event.target.closest('.slider');
    let sliderWidth = slider.scrollWidth;
    let clickX = event.clientX - slider.getBoundingClientRect().left;
    let leftRelative = clickX / sliderWidth;
    let stepsLength = this.elem.querySelectorAll('.slider__steps span');
    let segments = stepsLength.length - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);
    let valuePercents = value / segments * 100;

    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderThumb = this.elem.querySelector('.slider__thumb');
    let sliderProgress = this.elem.querySelector('.slider__progress');

    if (slider){
      switch (value){

        case 0:
        stepsLength.forEach(elem => elem.classList.remove('slider__step-active'))
        sliderValue.innerHTML = value;
        sliderThumb.style.left = valuePercents + `% `;
        sliderProgress.style.width = valuePercents + `% `;
        stepsLength[value].classList.add('slider__step-active');
        break;

        case 1:
        stepsLength.forEach(elem => elem.classList.remove('slider__step-active'))
        sliderValue.innerHTML = value;
        sliderThumb.style.left = valuePercents + `% `;
        sliderProgress.style.width = valuePercents + `% `;
        stepsLength[value].classList.add('slider__step-active');
        break;

        case 2:
        stepsLength.forEach(elem => elem.classList.remove('slider__step-active'))
        sliderValue.innerHTML = value;
        sliderThumb.style.left = valuePercents + `% `;
        sliderProgress.style.width = valuePercents + `% `;
        stepsLength[value].classList.add('slider__step-active');
        break;

        case 3:
        stepsLength.forEach(elem => elem.classList.remove('slider__step-active'))
        sliderValue.innerHTML = value;
        sliderThumb.style.left = valuePercents + `% `;
        sliderProgress.style.width = valuePercents + `% `;
        stepsLength[value].classList.add('slider__step-active');
        break;

        case 4:
        stepsLength.forEach(elem => elem.classList.remove('slider__step-active'))
        sliderValue.innerHTML = value;
        sliderThumb.style.left = valuePercents + `% `;
        sliderProgress.style.width = valuePercents + `% `;
        stepsLength[value].classList.add('slider__step-active');
        break;
      }
    }
  }

  sladerChange(event){
    let slider = event.target.closest('.slider');
    let sliderValue = this.elem.querySelector('.slider__value');

    if(slider){
      let myEvent = new CustomEvent("slider-change", {
        detail: +sliderValue.innerHTML, 
        bubbles: true 
      });
      
      this.elem.dispatchEvent(myEvent);
      }
    }
    
    
}
