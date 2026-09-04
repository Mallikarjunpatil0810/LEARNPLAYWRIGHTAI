// ============================================================
// POLYMORPHISM in JavaScript
// ============================================================
// Polymorphism means "many forms" - the ability of different
// objects to respond to the same method in their own way.

// ---------- EXAMPLE 1: Method Overriding (Runtime Polymorphism) ----------

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a generic sound.`);
  }
}

class Dog extends Animal {
  // Override the parent method
  makeSound() {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

class Cat extends Animal {
  // Override the parent method
  makeSound() {
    console.log(`${this.name} meows: Meow! Meow!`);
  }
}

class Cow extends Animal {
  // Override the parent method
  makeSound() {
    console.log(`${this.name} moos: Moo! Moo!`);
  }
}

// Polymorphic function - treats all animals uniformly
function animalPolymorphism(animal) {
  animal.makeSound(); // Same call, different behavior
}

console.log("=== Polymorphism: Method Overriding ===");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const cow = new Cow("Bessie");
const generic = new Animal("Generic");

animalPolymorphism(dog);    // Buddy barks: Woof! Woof!
animalPolymorphism(cat);    // Whiskers meows: Meow! Meow!
animalPolymorphism(cow);    // Bessie moos: Moo! Moo!
animalPolymorphism(generic); // Generic makes a generic sound.

// ---------- EXAMPLE 2: Polymorphism with Arrays ----------

console.log("\n=== Polymorphism with Arrays ===");
const animals = [new Dog("Rex"), new Cat("Luna"), new Cow("Daisy")];
animals.forEach(animal => animal.makeSound());

// ---------- EXAMPLE 3: Duck Typing (Structural Polymorphism) ----------
// JavaScript uses duck typing: "If it walks like a duck and quacks like a duck, it's a duck."

console.log("\n=== Duck Typing (Structural Polymorphism) ===");

class Bird {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} chirps: Chirp! Chirp!`);
  }
}

class Duck {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} quacks: Quack! Quack!`);
  }
}

// Both Bird and Duck have makeSound() - they don't need to share a parent class
const creatures = [new Bird("Tweety"), new Duck("Donald")];
creatures.forEach(c => c.makeSound());

// ---------- EXAMPLE 4: Polymorphism with Parameters ----------

console.log("\n=== Polymorphism with Different Parameters ===");

class Calculator {
  // Same method name, different behavior based on arguments
  add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.concat(b);
    }
    if (Array.isArray(a) && Array.isArray(b)) {
      return [...a, ...b];
    }
    return "Unsupported types";
  }
}

const calc = new Calculator();
console.log(`Numbers: ${calc.add(5, 10)}`);        // 15
console.log(`Strings: ${calc.add("Hello ", "World")}`); // Hello World
console.log(`Arrays: ${calc.add([1, 2], [3, 4])}`);    // [1, 2, 3, 4]

// ---------- EXAMPLE 5: Polymorphism with Prototypes ----------

console.log("\n=== Prototypal Polymorphism ===");

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.move = function () {
  console.log(`${this.type} is moving.`);
};

function Car(brand) {
  Vehicle.call(this, "Car");
  this.brand = brand;
}

// Inherit from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Override move method
Car.prototype.move = function () {
  console.log(`${this.brand} car is driving on the road.`);
};

function Boat(name) {
  Vehicle.call(this, "Boat");
  this.name = name;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.move = function () {
  console.log(`${this.name} boat is sailing on the water.`);
};

const myCar = new Car("Toyota");
const myBoat = new Boat("Titanic");

myCar.move();  // Toyota car is driving on the road.
myBoat.move(); // Titanic boat is sailing on the water.

// ---------- SUMMARY ----------
console.log("\n=== SUMMARY ===");
console.log("Polymorphism allows the same interface to work with different types.");
console.log("Key benefits:");
console.log("1. Code reusability - write once, use with many types");
console.log("2. Flexibility - add new types without changing existing code");
console.log("3. Maintainability - cleaner, more organized code");

// ---------- WHERE POLYMORPHISM IS USED IN THIS CODE ----------
console.log("\n=== WHERE POLYMORPHISM IS USED ===");
console.log("1. animalPolymorphism() function - calls makeSound() on any Animal subclass");
console.log("   → Used at lines: animalPolymorphism(dog), animalPolymorphism(cat), animalPolymorphism(cow), animalPolymorphism(generic)");
console.log("");
console.log("2. Array iteration with forEach - calls makeSound() on each animal");
console.log("   → Used at line: animals.forEach(animal => animal.makeSound())");
console.log("   → Used at line: creatures.forEach(c => c.makeSound())");
console.log("");
console.log("3. Duck typing - Bird and Duck both have makeSound() without shared inheritance");
console.log("   → Used at line: creatures.forEach(c => c.makeSound())");
console.log("");
console.log("4. Calculator.add() - same method handles numbers, strings, and arrays");
console.log("   → Used at lines: calc.add(5, 10), calc.add('Hello ', 'World'), calc.add([1, 2], [3, 4])");
console.log("");
console.log("5. Prototypal polymorphism - Car and Boat override Vehicle.prototype.move()");
console.log("   → Used at lines: myCar.move(), myBoat.move()");