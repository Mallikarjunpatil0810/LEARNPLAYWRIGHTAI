// Single Inheritance in JavaScript
// A class inherits from only one parent class

// Parent class (Base class)
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Child class (Derived class) - inherits from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} (${this.breed}) is barking.`);
    }

    // Override parent method
    eat() {
        console.log(`${this.name} is eating dog food.`);
    }
}

// Create instances
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Golden Retriever");

console.log("--- Parent Class ---");
animal.eat();
animal.sleep();

console.log("\n--- Child Class (Single Inheritance) ---");
dog.eat();      // Overridden method
dog.sleep();    // Inherited method
dog.bark();     // Own method

console.log("\n--- instanceof Check ---");
console.log(`dog instanceof Dog: ${dog instanceof Dog}`);
console.log(`dog instanceof Animal: ${dog instanceof Animal}`);
console.log(`animal instanceof Dog: ${animal instanceof Dog}`);