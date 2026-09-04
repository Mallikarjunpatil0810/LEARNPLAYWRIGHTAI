// ============================================
// ENCAPSULATION EXAMPLE IN JAVASCRIPT
// ============================================

// Encapsulation = bundling data (properties) and methods together,
// and restricting direct access to some of an object's components.
// This is achieved using # private fields (ES2022+) or closures.

// ---------- EXAMPLE 1: Using # private fields (modern approach) ----------

class BankAccount {
  // --- ENCAPSULATION: Private fields (cannot be accessed outside the class) ---
  #accountNumber; // <-- ENCAPSULATED: hidden from outside
  #balance;       // <-- ENCAPSULATED: hidden from outside

  constructor(accountNumber, initialBalance) {
    this.#accountNumber = accountNumber; // <-- ENCAPSULATION: setting private data
    this.#balance = initialBalance;       // <-- ENCAPSULATION: setting private data
  }

  // --- ENCAPSULATION: Public methods to interact with private data (getters/setters) ---
  getAccountNumber() {
    return this.#accountNumber; // <-- ENCAPSULATION: controlled access via getter
  }

  getBalance() {
    return this.#balance; // <-- ENCAPSULATION: controlled access via getter
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount; // <-- ENCAPSULATION: modifying private data through a method
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount; // <-- ENCAPSULATION: modifying private data through a method
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  // --- ENCAPSULATION: Private method (cannot be called from outside) ---
  #validateTransaction(amount) { // <-- ENCAPSULATED: private method
    return amount > 0 && amount <= this.#balance;
  }
}

// ---------- EXAMPLE 2: Using closures (older approach) ----------

function createPerson(name, age) {
  // --- ENCAPSULATION: Private variables via closure ---
  let _name = name;  // <-- ENCAPSULATED: cannot be accessed directly from outside
  let _age = age;    // <-- ENCAPSULATED: cannot be accessed directly from outside

  return {
    // --- ENCAPSULATION: Public getters ---
    getName() {
      return _name; // <-- ENCAPSULATION: controlled access
    },
    getAge() {
      return _age; // <-- ENCAPSULATION: controlled access
    },
    // --- ENCAPSULATION: Public setters with validation ---
    setName(newName) {
      if (newName && newName.length > 0) {
        _name = newName; // <-- ENCAPSULATION: controlled modification
      } else {
        console.log("Invalid name.");
      }
    },
    setAge(newAge) {
      if (newAge > 0 && newAge < 150) {
        _age = newAge; // <-- ENCAPSULATION: controlled modification
      } else {
        console.log("Invalid age.");
      }
    },
    // --- ENCAPSULATION: Public method using private data ---
    celebrateBirthday() {
      _age++; // <-- ENCAPSULATION: modifying private data internally
      console.log(`Happy Birthday! You are now ${_age} years old.`);
    }
  };
}

// ---------- DEMONSTRATION ----------

console.log("=== ENCAPSULATION DEMO ===");
console.log("");

// Using the BankAccount class
const myAccount = new BankAccount("ACC-12345", 1000);

// Trying to access private fields directly (will cause error if uncommented):
// console.log(myAccount.#balance); // ❌ SyntaxError: Private field
// console.log(myAccount.#accountNumber); // ❌ SyntaxError: Private field

// Correct way: using public methods (ENCAPSULATION in action)
console.log("--- BankAccount ---");
console.log("Account Number:", myAccount.getAccountNumber()); // ✅ Works
console.log("Balance: $", myAccount.getBalance());            // ✅ Works
myAccount.deposit(500);   // ✅ Works
myAccount.withdraw(200);  // ✅ Works
console.log("");

// Using the Person factory function
const person = createPerson("Alice", 30);

// Trying to access private variables directly:
// console.log(person._name); // ❌ undefined (not accessible)
// console.log(person._age);  // ❌ undefined (not accessible)

// Correct way: using public methods (ENCAPSULATION in action)
console.log("--- Person ---");
console.log("Name:", person.getName());   // ✅ Works
console.log("Age:", person.getAge());     // ✅ Works
person.setName("Bob");                    // ✅ Works
person.setAge(31);                        // ✅ Works
console.log("Updated Name:", person.getName());
console.log("Updated Age:", person.getAge());
person.celebrateBirthday();               // ✅ Works

console.log("");
console.log("=== ENCAPSULATION SUMMARY ===");
console.log("Private data (#balance, #accountNumber, _name, _age) is ENCAPSULATED");
console.log("and can ONLY be accessed/modified through PUBLIC methods.");