let calculator = {
  read: function(a, b){
    this.firstNumber = a;
    this.secondNumber = b;
  },
  sum: function(){
    let sum = 0;
    for (let value in Object.values(calculator)){
      if (value > 0){
      sum = this.firstNumber + this.secondNumber;
      }
    }
    return sum;
  },
  mul: function(){
    let mul = 0;
    for (let value in Object.values(calculator)){
        if (value > 0){
        mul = this.firstNumber * this.secondNumber;
      }
    }
  return mul;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
