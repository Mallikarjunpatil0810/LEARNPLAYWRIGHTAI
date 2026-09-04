// =============================================
// Mixin Concept in JavaScript Inheritance
// =============================================
// Mixins allow us to compose behaviors from multiple sources
// without using classical multiple inheritance.

// --- Base class ---
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

// --- Mixins (reusable behavior chunks) ---

// Mixin 1: Flying ability
const FlyMixin = {
  fly() {
    console.log(`${this.name} is flying.`);
  },
  land() {
    console.log(`${this.name} landed.`);
  }
};

// Mixin 2: Swimming ability
const SwimMixin = {
  swim() {
    console.log(`${this.name} is swimming.`);
  },
  dive() {
    console.log(`${this.name} dived underwater.`);
  }
};

// Mixin 3: Walking ability
const WalkMixin = {
  walk() {
    console.log(`${this.name} is walking.`);
  },
  run() {
    console.log(`${this.name} is running.`);
  }
};

// Mixin 4: Sound making
const SoundMixin = {
  makeSound(sound) {
    console.log(`${this.name} says ${sound}!`);
  }
};

// --- Helper function to apply mixins ---
function applyMixins(targetClass, ...mixins) {
  mixins.forEach(mixin => {
    Object.keys(mixin).forEach(key => {
      targetClass.prototype[key] = mixin[key];
    });
  });
}

// --- Classes using mixins ---

// Bird: Animal + Fly + Walk + Sound
class Bird extends Animal {
  constructor(name, species) {
    super(name);
    this.species = species;
  }
}
applyMixins(Bird, FlyMixin, WalkMixin, SoundMixin);

// Fish: Animal + Swim
class Fish extends Animal {
  constructor(name, waterType) {
    super(name);
    this.waterType = waterType;
  }
}
applyMixins(Fish, SwimMixin);

// Duck: Animal + Fly + Swim + Walk + Sound
class Duck extends Animal {
  constructor(name) {
    super(name);
  }
}
applyMixins(Duck, FlyMixin, SwimMixin, WalkMixin, SoundMixin);

// --- Demonstration ---
console.log('=== MIXIN DEMONSTRATION ===\n');

const eagle = new Bird('Eagle', 'Hawk');
console.log('--- Bird (Animal + Fly + Walk + Sound) ---');
eagle.eat();
eagle.fly();
eagle.walk();
eagle.makeSound('Screech');
eagle.sleep();
console.log();

const salmon = new Fish('Salmon', 'Freshwater');
console.log('--- Fish (Animal + Swim) ---');
salmon.eat();
salmon.swim();
salmon.dive();
salmon.sleep();
console.log();

const donald = new Duck('Donald');
console.log('--- Duck (Animal + Fly + Swim + Walk + Sound) ---');
donald.eat();
donald.walk();
donald.swim();
donald.fly();
donald.makeSound('Quack');
donald.sleep();
console.log();

// --- Alternative: Object.assign approach ---
console.log('=== Object.assign Approach ===');
const dogMixin = {
  bark() { console.log(`${this.name} barks!`); },
  fetch() { console.log(`${this.name} fetches the ball.`); }
};

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}
Object.assign(Dog.prototype, dogMixin, SoundMixin);

const buddy = new Dog('Buddy', 'Golden Retriever');
buddy.eat();
buddy.bark();
buddy.fetch();
buddy.makeSound('Woof');
console.log();

// --- Checking instance relationships ---
console.log('=== Instance Checks ===');
console.log('eagle instanceof Animal:', eagle instanceof Animal);
console.log('eagle instanceof Bird:', eagle instanceof Bird);
console.log('donald instanceof Duck:', donald instanceof Duck);
console.log('salmon instanceof Fish:', salmon instanceof Fish);
console.log('buddy instanceof Dog:', buddy instanceof Dog);

// --- Summary ---
console.log('\n=== KEY TAKEAWAYS ===');
console.log('1. Mixins allow sharing behavior across unrelated classes.');
console.log('2. Unlike classical inheritance, mixins compose behaviors.');
console.log('3. JavaScript uses Object.assign() or custom applyMixins().');
console.log('4. A class can use multiple mixins (e.g., Duck uses 4 mixins).');
console.log('5. Mixins avoid the "diamond problem" of multiple inheritance.');