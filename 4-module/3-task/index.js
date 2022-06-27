function highlight(table) {
  let tbody = table.querySelector('tbody');

  let tr = tbody.children;

  for (let elem of tr){

    let td = elem.cells;

      for (let elem2 of td){

        let getAttribute = elem2.getAttribute('data-available');   
        let textElemet = elem2.innerHTML; 
        
        if (!getAttribute){
          
          elem.setAttribute('hidden', 'hidden');

        } else if (getAttribute == 'true') {
          
          elem.removeAttribute('hidden');
          elem.classList.add('available');

        } else if(getAttribute == 'false') {
          
          elem.removeAttribute('hidden');
          elem.classList.add('unavailable');

        }
        if (textElemet == 'm'){
          elem.classList.add('male');
        } else if (textElemet == 'f'){
          elem.classList.add('female');

        }
        if (textElemet < 18){
          elem.setAttribute('style', 'text-decoration: line-through');
        }
      }      
    }
  

}
