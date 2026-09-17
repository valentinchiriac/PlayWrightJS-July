var marks = Array(6);
var marks = new Array(20, 40, 65, 12, 37, 100);
var marks = [20, 40, 65, 12, 37, 100];
console.log(marks[2]);
marks[3] = 25;
console.log(marks);
console.log(marks.length);
marks.push(64); //ads an element at the end
console.log(marks);
marks.unshift(11); //ads an element at the beggining
console.log(marks);
console.log(marks.indexOf(100)); //location of an element in the array
console.log(marks.includes(120)); //checks if the element is included in the array
var subMarks = marks.slice(2, 5); //creates subarray from existing array
console.log(subMarks);
console.log("*****************");
var sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum = sum + marks[i]; //sums up the numbers from the array
  console.log(marks[i]);
  console.log("sum is " + sum);
}
let total = marks.reduce((sum, totalMarks) => sum + totalMarks, 0); //reduce - incepe de la '0' care este al doilea argument si continua cu suma
console.log("total is " + total);

var scores = [20, 40, 65, 12, 37, 100];
var evenScores = []; //create a new empty array
for (let index = 0; index < scores.length; index++) {
  if (scores[index] % 2 == 0) {
    evenScores.push(scores[index]);
  }
}
console.log("the even scores are " + evenScores);

let newFilterDivedesWithTwo = scores.filter((score) => score % 2 == 0); //filter - returns a new array with the elements that pass the test
console.log(newFilterDivedesWithTwo);
let newFilterDivedesWithThree = scores.filter((score) => score % 3 == 0);
console.log(newFilterDivedesWithThree);

let newFilterDivedesWithFive = scores.filter((score) => score % 5 == 0);
console.log(newFilterDivedesWithFive);

let mappedArray = newFilterDivedesWithFive.map((score) => score * 2); //takes the elements of the array and multiplies with 3 and stores in a new array
console.log(mappedArray);

let sumOfArray = mappedArray.reduce((sum, val) => sum + val); //ia array-ul mappedArray si aduna toate elementele din el
console.log(sumOfArray);

var scores1 = [12, 13, 14, 15, 17, 20, 158, 2, 37, 78];
let chainedActionsArray = scores1
  .filter((score) => score % 3 == 0)
  .map((score) => score * 2)
  .reduce((sum, val) => sum + val); // chestia asta face toate actiunile in una singura
console.log("chained Array action result is " + chainedActionsArray);

var fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Grapes",
  "Mango",
  "Pineapple",
  "Watermelon",
  "Strawberry",
  "Pear",
  "Peach",
];
console.log(fruits);
fruits.sort(); //sorts the array in ascending order
fruits.reverse(); //reverses the array
console.log(fruits);

var scores2 = [12, 13, 14, 15, 17, 20, 158, 2, 37, 78];
console.log("scores2 before sort: " + scores2);
scores2.sort((a, b) => a - b); //modul corect de sortare anumerelor in JS
console.log("scores2 after sort: " + scores2);
