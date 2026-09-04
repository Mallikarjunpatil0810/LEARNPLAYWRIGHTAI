// Object Literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

console.log("Person Object:", person);
console.log("Name:", person.firstName);
console.log("Age:", person["age"]);
person.greet();

// Object Constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
car.start = function() {
    console.log(`${this.brand} ${this.model} is starting...`);
};

console.log("\nCar Object:", car);
car.start();

// Constructor Function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} by ${this.author} (${this.year})`;
    };
}

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log("\nBook Objects:");
console.log(book1.getSummary());
console.log(book2.getSummary());

// Object Methods
const student = {
    name: "Alice",
    subjects: ["Math", "Science", "History"],
    scores: { Math: 90, Science: 85, History: 88 },
    getAverage: function() {
        const values = Object.values(this.scores);
        const total = values.reduce((sum, score) => sum + score, 0);
        return total / values.length;
    }
};

console.log("\nStudent Object:");
console.log("Subjects:", student.subjects.join(", "));
console.log("Average Score:", student.getAverage());

// Object.keys(), Object.values(), Object.entries()
console.log("\nObject Methods:");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// Spread Operator with Objects
const address = { city: "New York", country: "USA" };
const fullPerson = { ...person, ...address, phone: "123-456-7890" };
console.log("\nMerged Object:", fullPerson);

// Object Destructuring
const { firstName, lastName, age } = person;
console.log("\nDestructured:", firstName, lastName, age);

// Object.freeze() and Object.seal()
const config = Object.freeze({ apiKey: "abc123", debug: false });
// config.apiKey = "xyz"; // This will fail silently in non-strict mode
console.log("\nFrozen Object:", config);

// Class Syntax (ES6)
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `${this.name} is a ${this.type}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log("\nClass Objects:");
console.log(dog.describe());
dog.bark();