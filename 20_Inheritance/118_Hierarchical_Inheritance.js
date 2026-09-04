// Hierarchical Inheritance: Multiple child classes inherit from a single parent class.

// Parent class
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

// Child class 1
class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Child class 2
class Cat extends Animal {
    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

// Child class 3
class Bird extends Animal {
    fly() {
        console.log(`${this.name} is flying.`);
    }
}

// Demonstration
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const bird = new Bird("Tweety");

dog.eat();   // Buddy is eating.
dog.bark();  // Buddy is barking.

cat.sleep(); // Whiskers is sleeping.
cat.meow();  // Whiskers is meowing.

bird.eat();  // Tweety is eating.
bird.fly();  // Tweety is flying.
