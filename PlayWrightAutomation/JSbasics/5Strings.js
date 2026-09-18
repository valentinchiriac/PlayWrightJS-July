const Person = require("./7Classes.js");
let day = "tuesday";
console.log(day);
let slicedDate = day.slice(0, 4); //creates a substring from the string starting at index 0 and ending at index 4 (not inclusive)
console.log(slicedDate);
console.log(day[1]); //accesses the character at index 1 of the string
let splitDay = day.split("s"); //splits the string into an array of substrings based on the separator "s"
console.log(splitDay[1].trim()); //accesses the second element of the array and trims any whitespace
let upperCaseDay = day.toUpperCase(); //converts the string to uppercase

let date = "2023-06-15";
let nextDate = "2023-08-20 ";
let diffdate = parseInt(nextDate.split("-")[2]) - parseInt(date.split("-")[2]); //calculates the difference in days between two dates by splitting the strings and converting to integers
console.log(diffdate);

diffdate.toString(); //converts the difference in days to a string

let newQuote = date + " is funday";
console.log(newQuote);
var val = newQuote.indexOf("06", 5); //the search starts from the 5-th index
console.log(val);
let count = 0;
var val = newQuote.indexOf("06");
while (val != -1) {
  count++;
  val = newQuote.indexOf("0", val + 1);
}

let person = new Person("Valentin", "Dimitrov");
console.log(person.fullName());
