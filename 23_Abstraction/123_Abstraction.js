// ============================================================
// Abstraction in JavaScript
// ============================================================
// Abstraction means hiding complex implementation details
// and exposing only the essential features of an object.
// It helps reduce complexity and isolate the impact of changes.
// ============================================================

// ---------- EXAMPLE 1: Abstracting via Class Methods ----------
// The user interacts with a simple interface (start, stop, accelerate)
// without knowing the internal engine complexity.

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this._speed = 0;       // private by convention
    this._engineOn = false;
  }

  // --- Public Interface (Abstraction layer) ---

  start() {
    this._igniteEngine();
    this._fuelPump();
    this._batteryCheck();
    this._engineOn = true;
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    this._engineOn = false;
    this._speed = 0;
    console.log(`${this.make} ${this.model} stopped.`);
  }

  accelerate(amount) {
    if (!this._engineOn) {
      console.log("Start the vehicle first!");
      return;
    }
    this._injectFuel(amount);
    this._adjustTiming();
    this._speed += amount;
    console.log(`Speed is now ${this._speed} km/h.`);
  }

  // --- Private / Internal Methods (Hidden complexity) ---
  // These are the implementation details the user does NOT need to know.

  _igniteEngine() {
    console.log("  [Internal] Spark plugs firing...");
  }

  _fuelPump() {
    console.log("  [Internal] Fuel pump pressurizing...");
  }

  _batteryCheck() {
    console.log("  [Internal] Battery voltage OK.");
  }

  _injectFuel(amount) {
    console.log(`  [Internal] Injecting fuel for +${amount} km/h...`);
  }

  _adjustTiming() {
    console.log("  [Internal] Adjusting valve timing...");
  }
}

// ---------- EXAMPLE 2: Abstracting via Factory Function ----------
// The user calls createUser() without knowing how the object is built.

function createUser(name, age) {
  // Private data (hidden)
  const _id = Math.random().toString(36).substring(2, 9);
  let _loginCount = 0;

  // Returned object exposes only what is needed (abstraction)
  return {
    name,
    age,
    getId() {
      return _id;
    },
    login() {
      _loginCount++;
      console.log(`${name} logged in (total: ${_loginCount})`);
    },
    getLoginCount() {
      return _loginCount;
    }
  };
}

// ---------- EXAMPLE 3: Abstracting via Closure ----------
// The user gets a counter with increment() and getValue()
// without seeing the internal variable or logic.

function createCounter() {
  let _count = 0;          // private variable (hidden)

  return {
    increment() {
      _count++;
    },
    decrement() {
      _count--;
    },
    getValue() {
      return _count;
    }
  };
}

// ============================================================
// DEMONSTRATION — Showing abstraction in action
// ============================================================

console.log("========== Abstraction Demo ==========");
console.log("");

// --- Demo 1: Vehicle ---
console.log("--- Vehicle (Class Abstraction) ---");
const car = new Vehicle("Toyota", "Corolla");
car.start();          // User calls start() — internal complexity hidden
car.accelerate(30);   // User calls accelerate() — internal steps hidden
car.stop();
console.log("");

// --- Demo 2: Factory Function ---
console.log("--- User (Factory Abstraction) ---");
const user = createUser("Alice", 30);
console.log(`User: ${user.name}, Age: ${user.age}`);
console.log(`ID (via abstraction): ${user.getId()}`);  // _id is hidden
user.login();
user.login();
console.log(`Login count: ${user.getLoginCount()}`);   // _loginCount is hidden
console.log("");

// --- Demo 3: Closure ---
console.log("--- Counter (Closure Abstraction) ---");
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(`Counter value: ${counter.getValue()}`);   // _count is hidden
console.log("");

// ============================================================
// SUMMARY
// ============================================================
// Abstraction is implemented via:
//   1. Public methods that wrap private/internal logic (Vehicle)
//   2. Factory functions that return only selected properties (createUser)
//   3. Closures that hide variables and expose only specific functions (createCounter)
//
// In all cases, the user interacts with a simplified interface
// while the complex implementation stays hidden.
// ============================================================