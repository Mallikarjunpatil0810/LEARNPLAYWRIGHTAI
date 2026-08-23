// Person object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Software Developer",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  introduce: function() {
    console.log("Hello, my name is " + this.fullName() + " and I am " + this.age + " years old.");
  }
};

// Example usage
console.log(person.fullName());
person.introduce();