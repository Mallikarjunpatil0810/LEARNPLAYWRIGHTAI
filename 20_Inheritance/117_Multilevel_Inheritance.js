// ============================================================
// Multilevel Inheritance in JavaScript
// ============================================================
// In multilevel inheritance, a class inherits from a derived class,
// forming a chain: Grandparent -> Parent -> Child
// ============================================================

// Base class (Grandparent)
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

// Intermediate class (Parent) - inherits from Animal
class Mammal extends Animal {
  constructor(name, hasFur) {
    super(name); // Call the parent class constructor
    this.hasFur = hasFur;
  }

  breatheAir() {
    console.log(`${this.name} breathes air.`);
  }

  // Override the parent method
  eat() {
    console.log(`${this.name} the mammal is eating.`);
  }
}

// Derived class (Child) - inherits from Mammal
class Dog extends Mammal {
  constructor(name, breed) {
    super(name, true); // Mammals have fur, so hasFur = true
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says: Woof! Woof!`);
  }

  // Override the grandparent method
  sleep() {
    console.log(`${this.name} the ${this.breed} is sleeping. Zzz...`);
  }
}

// ============================================================
// Demonstration
// ============================================================

console.log("=== Multilevel Inheritance Demo ===\n");

// Create an instance of the most derived class
const myDog = new Dog("Buddy", "Golden Retriever");

// Access methods from all levels of the hierarchy
myDog.eat();       // Overridden in Mammal
myDog.sleep();     // Overridden in Dog
myDog.breatheAir(); // Defined in Mammal
myDog.bark();      // Defined in Dog

console.log("\n--- Property Access ---");
console.log(`Name: ${myDog.name}`);       // From Animal
console.log(`Has Fur: ${myDog.hasFur}`);  // From Mammal
console.log(`Breed: ${myDog.breed}`);     // From Dog

console.log("\n--- instanceof Checks ---");
console.log(`myDog instanceof Dog:    ${myDog instanceof Dog}`);
console.log(`myDog instanceof Mammal: ${myDog instanceof Mammal}`);
console.log(`myDog instanceof Animal: ${myDog instanceof Animal}`);
console.log(`myDog instanceof Object: ${myDog instanceof Object}`);

// ============================================================
// Inheritance Chain Visualization
// ============================================================
console.log("\n--- Inheritance Chain ---");
console.log("Animal  (Grandparent)");
console.log("  ↑");
console.log("Mammal  (Parent)");
console.log("  ↑");
console.log("Dog     (Child)");
console.log("\nDog inherits from Mammal, which inherits from Animal.");
console.log("So Dog has access to all properties and methods from both Mammal and Animal.");