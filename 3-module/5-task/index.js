function getMinMax(str) {
  let arr = str.split(' ');
    let min = 0;
    let max = 0;
    let arrNumber = [];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > 0 || arr[i] <= 0){
            arrNumber.push(arr[i]);     
        }
    }
    max = Math.max(...arrNumber);
    min = Math.min(...arrNumber);
    let result = {
        min,
        max,
    }
    return result;
}
