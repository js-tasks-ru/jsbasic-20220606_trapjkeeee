function sumSalary(salaries) {
  let sum = 0;
    for (let value of Object.values(salaries)) {
      if (value > 0 && value != NaN && value != -Infinity & value != Infinity){
        sum += value;
      }
    }
    return sum;
}
