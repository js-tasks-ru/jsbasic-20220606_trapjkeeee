import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let render = `  
    
      <div class="modal">
        <div class="modal__overlay"></div>
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>
              <h3 class="modal__title">
              </h3>
            </div>
            <div class="modal__body"> 
            </div>
          </div>
        </div>
      `
    this.elem = createElement(render);
    
    let body = document.body;
    body.prepend(this.elem);

    this.elem.addEventListener('click', (event) => this.closeButton(event));
    document.addEventListener('keydown', (event) => this.closeESC(event));
  }

  open(){
    let body = document.body;
    body.classList.add('is-modal-open');
  }

  setTitle(title){
    let modalTitle = document.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(node){
    let modalBody = document.querySelector('.modal__body');
    modalBody.append(node);
  }
  
  closeButton(event){
    let modalClose = event.target.closest('.modal__close');
    let body = document.body;
    if(modalClose){
      this.elem.remove();
      body.classList.remove('is-modal-open');
    } 
  }

  close(){
    let body = document.body;
    this.elem.remove();
    body.classList.remove('is-modal-open');
  }

  closeESC(event){ 
    let esc = event.code;
    let body = document.body;
  
    if (esc == 'Escape'){

      this.elem.remove();
      body.classList.remove('is-modal-open');
    }
  }
}
