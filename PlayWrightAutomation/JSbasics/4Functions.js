// functions

function add(a, b) {
  //declararea functiei
  return a + b;
}

let sum = add(2, 3); //folosirea functiei
console.log(sum);

let sumOfintegers = (c, d) => c + d;
//declaring anonymous function (no function name, as "add")
console.log("sumOfIntegers is " + sumOfintegers(5, 7));
