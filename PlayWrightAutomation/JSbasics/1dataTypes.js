console.log("Hello mfckers");

let a = 4;
console.log("This is a " + typeof a + " with the value of " + a);

let b = "Lorem ipsum";
console.log("This is a " + typeof b + " with the value of " + b);

let c = 235.763492;
console.log("This is a " + typeof c + " with the value of " + c);

let required = true;
console.log("This is a " + typeof required + " with the value of " + required);

let d = a + c;
console.log(d);
//nu putem re-declara variabile cu 'let' dar putem re-declara cu 'var'

var e = "Lorem ipsum";
console.log("e is a type " + typeof e);
var e = a + c;
console.log("e is a type " + typeof e);
