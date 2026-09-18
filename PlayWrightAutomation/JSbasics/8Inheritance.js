const Person = require("./7Classes.js");
class Pet extends Person {
  get location() {
    return "Sorogari";
  }

  constructor(firstName, lastName, petName) {
    super(firstName, lastName); //calls the constructor of the parent class (Person)
    this.petName = petName;
  }
}

let pet = new Pet("Oliver", "Smith", "Buddy");
console.log(pet.fullName()); //calls the fullName method from the parent class (Person)
console.log(pet.location); //calls the location getter from the child class (Pet)
