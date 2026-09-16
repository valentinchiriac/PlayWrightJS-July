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
