function camelize(str) {
  let arr = str.split('-');    
    for (let i = 0; i < arr.length; i++){
        if (i > 0){
          let arrSplit = arr[i].split('');
          let firstLetter = arrSplit[0].toUpperCase();
          arrSplit[0] = firstLetter;
          arrSplit = arrSplit.join('');
          arr[i] = arrSplit;
        }
    }
    arr = arr.join('');
    return arr;
}

