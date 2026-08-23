// =============================================
// Array Checking using every() and some()
// =============================================

// every()  -> checks if ALL elements pass the test  (returns true/false)
// some()   -> checks if AT LEAST ONE element passes the test (returns true/false)

const numbers = [10, 20, 30, 40, 50];
const mixedNumbers = [5, 12, 8, 130, 44];

// ---------- 1. every() ----------
// All numbers must be greater than 0
const allPositive = numbers.every((num) => num > 0);
console.log("All numbers > 0 :", allPositive); // true

// All numbers must be greater than 25
const allAbove25 = numbers.every((num) => num > 25);
console.log("All numbers > 25:", allAbove25); // false (10 and 20 fail)

// ---------- 2. some() ----------
// At least one number must be greater than 100
const hasBigNumber = mixedNumbers.some((num) => num > 100);
console.log("Some number > 100 :", hasBigNumber); // true (130)

// At least one number must be greater than 500
const hasHugeNumber = mixedNumbers.some((num) => num > 500);
console.log("Some number > 500 :", hasHugeNumber); // false

// ---------- 3. Practical Example: Form Validation ----------
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Carol", age: 30 },
];

// every(): Are ALL users adults (18+)?
const allAdults = users.every((user) => user.age >= 18);
console.log("All users are adults:", allAdults); // false (Bob is 17)

// some(): Is there ANY user under 18 (minor)?
const hasMinor = users.some((user) => user.age < 18);
console.log("There is a minor:", hasMinor); // true (Bob)

// ---------- 4. Key Notes ----------
// 1. Both methods DO NOT mutate the original array.
// 2. every() stops checking as soon as one test fails (short-circuit).
// 3. some() stops checking as soon as one test passes (short-circuit).
// 4. On an EMPTY array: every() returns true, some() returns false.

console.log("Empty array - every():", [].every((x) => x > 0)); // true
console.log("Empty array - some() :", [].some((x) => x > 0)); // false
