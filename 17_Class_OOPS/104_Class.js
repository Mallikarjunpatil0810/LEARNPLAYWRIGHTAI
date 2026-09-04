// Class definition for a Person
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  // Method to introduce the person
  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old from ${this.city}.`);
  }

  // Method to celebrate birthday
  celebrateBirthday() {
    this.age++;
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  }
}

// Creating an instance of Person
const person1 = new Person("Alice", 25, "New York");
person1.introduce();
person1.celebrateBirthday();

const person2 = new Person("Bob", 30, "London");
person2.introduce();