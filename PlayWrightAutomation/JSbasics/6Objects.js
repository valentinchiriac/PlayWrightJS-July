let person = {
  firstName: "Tim",
  lastName: "Burton",
  age: 23,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.lastName);
console.log(person.fullName());
person.lastName = "Burton Jr."; //updates the lastName property of the person object
console.log(person.lastName);
person.gender = "male"; //adds a new property gender to the person object
console.log(person);
//delete person.age; //deletes the age property from the person object
console.log(person);
console.log("gender" in person); //checks if the property gender exists in the person object and returns true or false

for (let key in person) {
  const value = typeof person[key] === "function" ? person[key]() : person[key];
  console.log(key + ": " + value); //iterates over the properties of the person object and logs the key-value pairs
}
