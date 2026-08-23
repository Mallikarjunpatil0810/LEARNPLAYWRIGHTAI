// =============================================
// Function Closure in JavaScript
// A closure is a function that remembers its outer variables even after the outer function has returned.
// =============================================

// Example 1: Basic Closure - Counter
function createCounter() {
    let count = 0; // This variable is "remembered" by the inner function

    return function() {
        count++; // Inner function has access to 'count' from outer scope
        console.log(`Count: ${count}`);
        return count;
    };
}

const counter = createCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Example 2: Closure with Parameters
function multiplier(factor) {
    // 'factor' is remembered by the returned function
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(`Double of 5: ${double(5)}`);  // 10
console.log(`Triple of 5: ${triple(5)}`);  // 15

// Example 3: Private Variables using Closure
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private variable - cannot be accessed directly

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited $${amount}. Balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log(`Insufficient funds! Current balance: $${balance}`);
                return;
            }
            balance -= amount;
            console.log(`Withdrew $${amount}. Balance: $${balance}`);
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);
myAccount.deposit(500);   // Deposited $500. Balance: $1500
myAccount.withdraw(200);  // Withdrew $200. Balance: $1300
console.log(`Current Balance: $${myAccount.getBalance()}`); // $1300
// console.log(myAccount.balance); // undefined - private!

// Example 4: Closure in Loops (Classic Problem & Solution)
// Problem: Using var in loop
console.log("\n--- Closure in Loops (var - Problem) ---");
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`var i = ${i}`); // Prints 4, 4, 4 (all reference same 'i')
    }, i * 1000);
}

// Solution 1: Using let (block scope)
console.log("\n--- Closure in Loops (let - Solution) ---");
for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log(`let j = ${j}`); // Prints 1, 2, 3 (each gets its own 'j')
    }, j * 1000);
}

// Solution 2: Using IIFE (Immediately Invoked Function Expression)
console.log("\n--- Closure in Loops (IIFE - Solution) ---");
for (var k = 1; k <= 3; k++) {
    (function(lockedValue) {
        setTimeout(function() {
            console.log(`IIFE k = ${lockedValue}`); // Prints 1, 2, 3
        }, lockedValue * 1000);
    })(k);
}

// Example 5: Function Factory using Closure
function createGreeting(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const sayHello = createGreeting("Hello");
const sayGoodbye = createGreeting("Goodbye");
const sayWelcome = createGreeting("Welcome");

sayHello("Alice");    // Hello, Alice!
sayGoodbye("Bob");    // Goodbye, Bob!
sayWelcome("Charlie"); // Welcome, Charlie!

// Example 6: Memoization using Closure (Remembering computed values)
function createMemoizedFibonacci() {
    const cache = {}; // Cache is remembered by closure

    return function fib(n) {
        if (n in cache) {
            console.log(`Fetching fib(${n}) from cache`);
            return cache[n];
        }

        console.log(`Computing fib(${n})`);
        if (n <= 1) {
            cache[n] = n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
        }
        return cache[n];
    };
}

const memoFib = createMemoizedFibonacci();
console.log(`\n--- Memoized Fibonacci ---`);
console.log(`fib(10) = ${memoFib(10)}`); // Computes and caches values
console.log(`fib(10) again = ${memoFib(10)}`); // Fetches from cache

// Example 7: Closure with Getters/Setters (Encapsulation)
function createPerson(name, age) {
    let _name = name;
    let _age = age;

    return {
        getName: function() { return _name; },
        setName: function(newName) { _name = newName; },
        getAge: function() { return _age; },
        setAge: function(newAge) {
            if (newAge > 0 && newAge < 150) {
                _age = newAge;
            } else {
                console.log("Invalid age!");
            }
        },
        celebrateBirthday: function() {
            _age++;
            console.log(`Happy Birthday ${_name}! Now ${_age} years old!`);
        }
    };
}

const person = createPerson("John", 30);
console.log(`\n--- Person using Closure ---`);
console.log(`Name: ${person.getName()}`); // John
console.log(`Age: ${person.getAge()}`);   // 30
person.setName("Johnny");
person.celebrateBirthday(); // Happy Birthday Johnny! Now 31 years old!

// Example 8: Practical Closure - Throttle/Debounce
function debounce(func, delay) {
    let timeoutId; // Remembered by closure

    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example usage (uncomment to test):
// const saveInput = debounce((text) => {
//     console.log(`Saving: ${text}`);
// }, 1000);
// saveInput("Hello");
// saveInput("Hello World"); // Only this one will execute after 1 second

console.log("\n--- Closure Summary ---");
console.log("✅ A closure is a function that remembers its outer scope's variables");
console.log("✅ Used for data privacy / encapsulation");
console.log("✅ Used for function factories");
console.log("✅ Used for memoization and caching");
console.log("✅ Used in event handlers and callbacks");