function showSalary(users, age) {
  let arrFilter = users.filter((user) => user.age <= age);
  let string = '';
  let name = '';
  let balance = 0;
  for (let i = 0; i < arrFilter.length; i++ ){
      name = arrFilter[i].name;
      balance = arrFilter[i].balance;
      string += `${name}, ${balance}\n`;
  }
  string = string.substring(0, string.length - 1);
  return string;
}
