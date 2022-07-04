function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  function hidden(){
    if(!text.hidden){      
    text.hidden = true;
    } else{
      text.removeAttribute('hidden');
    }
  }
  btn.addEventListener('click', hidden);
}
