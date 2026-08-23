// Spread operator examples in JavaScript

// 1. Spread with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log('Combined arrays:', combined); // [1, 2, 3, 4, 5, 6]

// 2. Copy an array
const copy = [...arr1];
console.log('Copied array:', copy); // [1, 2, 3]

// 3. Spread with objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log('Merged objects:', merged); // { a: 1, b: 2, c: 3, d: 4 }

// 4. Spread in function arguments
const numbers = [10, 20, 30];
const sum = (a, b, c) => a + b + c;
console.log('Sum using spread:', sum(...numbers)); // 60

// 5. Override properties
const defaults = { theme: 'dark', lang: 'en' };
const userSettings = { ...defaults, lang: 'fr' };
console.log('Overridden settings:', userSettings); // { theme: 'dark', lang: 'fr' }



