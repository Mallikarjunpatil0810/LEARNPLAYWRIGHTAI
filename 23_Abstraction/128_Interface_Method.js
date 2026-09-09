// ============================================================
// Interface Method Implementation in JavaScript
// ============================================================

// 1. Using a simple Interface contract (duck typing approach)
const IShape = {
  area: function () {
    throw new Error("Method 'area()' must be implemented.");
  },
  perimeter: function () {
    throw new Error("Method 'perimeter()' must be implemented.");
  },
};

// Implementing the IShape interface
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// 2. Using an Interface checker utility
function implementsInterface(obj, interfaceObj) {
  for (let method in interfaceObj) {
    if (typeof obj[method] !== "function") {
      return false;
    }
  }
  return true;
}

// 3. Using a formal Interface class
class Interface {
  constructor(name, methods) {
    this.name = name;
    this.methods = methods;
  }

  ensureImplemented(obj) {
    for (const method of this.methods) {
      if (typeof obj[method] !== "function") {
        throw new Error(
          `Class does not implement interface '${this.name}'. Missing method: ${method}`
        );
      }
    }
    return true;
  }
}

// Define interfaces
const IAnimal = new Interface("IAnimal", ["speak", "move"]);
const IVehicle = new Interface("IVehicle", ["start", "stop", "drive"]);

// Implementing IAnimal
class Dog {
  speak() {
    return "Woof!";
  }

  move() {
    return "Running on four legs.";
  }
}

class Bird {
  speak() {
    return "Chirp!";
  }

  move() {
    return "Flying in the sky.";
  }
}

// Implementing IVehicle
class Car {
  start() {
    return "Engine started.";
  }

  stop() {
    return "Engine stopped.";
  }

  drive() {
    return "Driving on the road.";
  }
}

// 4. Using a factory function to enforce interface
function createInterface(...methods) {
  return function (obj) {
    for (const method of methods) {
      if (typeof obj[method] !== "function") {
        throw new Error(
          `Object is missing method '${method}' required by the interface.`
        );
      }
    }
    return obj;
  };
}

const IPerson = createInterface("greet", "work");

function createPerson(name) {
  const person = {
    name,
    greet() {
      return `Hello, I'm ${this.name}.`;
    },
    work() {
      return `${this.name} is working.`;
    },
  };
  return IPerson(person); // Enforce interface
}

// ============================================================
// Usage / Testing
// ============================================================

console.log("=== Interface Method Implementation ===\n");

// Test Rectangle & Circle (duck typing)
const rect = new Rectangle(10, 5);
const circle = new Circle(7);

console.log(`Rectangle area: ${rect.area()}, perimeter: ${rect.perimeter()}`);
console.log(`Circle area: ${circle.area().toFixed(2)}, perimeter: ${circle.perimeter().toFixed(2)}`);

console.log(`\nRectangle implements IShape? ${implementsInterface(rect, IShape)}`);
console.log(`Circle implements IShape? ${implementsInterface(circle, IShape)}`);

// Test Interface class enforcement
const dog = new Dog();
const bird = new Bird();
const car = new Car();

console.log("\n--- Interface Class Enforcement ---");
console.log(`Dog implements IAnimal? ${IAnimal.ensureImplemented(dog)}`);
console.log(`Bird implements IAnimal? ${IAnimal.ensureImplemented(bird)}`);
console.log(`Car implements IVehicle? ${IVehicle.ensureImplemented(car)}`);

try {
  // This will throw because it doesn't implement IAnimal
  IAnimal.ensureImplemented(car);
} catch (e) {
  console.log(`Car does NOT implement IAnimal: ${e.message}`);
}

// Test factory function interface
console.log("\n--- Factory Function Interface ---");
const alice = createPerson("Alice");
console.log(alice.greet());
console.log(alice.work());

// Test with a class that partially implements an interface
class IncompleteShape {
  area() {
    return 42;
  }
  // Missing perimeter()
}

const incomplete = new IncompleteShape();
console.log(`\nIncompleteShape implements IShape? ${implementsInterface(incomplete, IShape)}`);