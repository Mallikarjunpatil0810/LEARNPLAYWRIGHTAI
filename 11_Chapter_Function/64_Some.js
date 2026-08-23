// Example: Using Array.prototype.some() to check if any element passes a test

const numbers = [1, 2, 3, 4, 5];

// Check if any number is even
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has at least one even number:', hasEven); // true

// Check if any number is greater than 10
const hasGreaterThan10 = numbers.some(num => num > 10);
console.log('Has at least one number > 10:', hasGreaterThan10); // false

// Example with objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
];

// Check if any user is a minor (under 18)
const hasMinor = users.some(user => user.age < 18);
console.log('Has at least one minor:', hasMinor); // true

// Check if any user is named 'David'
const hasDavid = users.some(user => user.name === 'David');
console.log('Has a user named David:', hasDavid); // false