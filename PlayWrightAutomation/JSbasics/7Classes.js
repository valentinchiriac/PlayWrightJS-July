class Person {
  age = 27;
  get location() {
    return "New York";
  }
  //constructor is a special method that is called when a new instance of the class is created
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};
let person1 = new Person("Tim", "Burton"); //creates a new instance of the Person class with firstName "Tim" and lastName "Burton"
console.log(person1.age); //accesses the age property of the person1 object
console.log(person1.location); //accesses the location getter of the person1 object
console.log(person1, person1.fullName());
let person2 = new Person("John", "Doe"); //creates a new instance of the Person class with firstName "John" and lastName "Doe"
console.log(person2);
console.log(person2.fullName());

module.exports = Person;
