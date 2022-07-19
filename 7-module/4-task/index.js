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
  this.elem.addEventListener('click', (event) => this.sliderChange(event));
  this.elem.addEventListener('pointerup', (event) => this.sliderChange(event));
  this.elem.addEventListener('pointerdown', (event) => this.dragAndDrop(event));

    
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

  dragAndDrop(event){
    let thumb = this.elem.querySelector('.slider__thumb');
    let slider = event.target.closest('.slider');
    let progress = this.elem.querySelector('.slider__progress');
    let sliderValue = this.elem.querySelector('.slider__value');
    let stepsLength = this.elem.querySelectorAll('.slider__steps span');

    





    thumb.ondragstart = () => false;
    thumb.onpointerdown = () => false;
    thumb.onpointermove = () => false;
    if(slider){
      slider.classList.add('slider_dragging');
      
  
      function onMouseMove(event){
      
      let left  = event.clientX - slider.getBoundingClientRect().left;
      let leftRelative = left / slider.offsetWidth;
  
      if (leftRelative < 0) {
        leftRelative = 0;
      }
      
      if (leftRelative > 1) {
        leftRelative = 1;
      }
  
      let leftPercents = leftRelative * 100;
        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;
  
        let segments = stepsLength.length - 1;
        let approximateValue = leftRelative * segments;
        let value = Math.round(approximateValue);
        sliderValue.innerHTML = value;
  
  
  
        
        
    }
  
    thumb.addEventListener('pointermove', onMouseMove);
  
      thumb.onpointerup = function(){
        thumb.removeEventListener('pointermove', onMouseMove);
        slider.classList.remove('slider_dragging');
  
        thumb.onpointerup = null;
  
  
      }
    }
    
  }


  sliderChange(event){
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
