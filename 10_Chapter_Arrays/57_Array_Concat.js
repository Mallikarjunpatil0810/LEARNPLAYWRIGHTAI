// Example 1: Array.concat() - Combines two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const combined = arr1.concat(arr2, arr3);
console.log('concat():', combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// concat with values
const withValues = arr1.concat(10, 11);
console.log('concat with values:', withValues); // [1, 2, 3, 10, 11]

// Example 2: Spread operator (...) - Expands elements of an array
const spreadCombined = [...arr1, ...arr2, ...arr3];
console.log('spread:', spreadCombined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread with extra elements
const spreadWithExtra = [...arr1, 99, ...arr2];
console.log('spread with extra:', spreadWithExtra); // [1, 2, 3, 99, 4, 5, 6]

// Spread copying an array (shallow copy)
const copied = [...arr1];
console.log('spread copy:', copied); // [1, 2, 3]

// Example 3: Array.join() - Joins all elements into a string
const fruits = ['Apple', 'Banana', 'Cherry'];
const joinedDefault = fruits.join();
console.log('join() default:', joinedDefault); // "Apple,Banana,Cherry"

const joinedComma = fruits.join(', ');
console.log('join(", "):', joinedComma); // "Apple, Banana, Cherry"

const joinedDash = fruits.join(' - ');
console.log('join(" - "):', joinedDash); // "Apple - Banana - Cherry"

const joinedEmpty = fruits.join('');
console.log('join(""):', joinedEmpty); // "AppleBananaCherry"

// Practical example combining all three
const numbers = [10, 20, 30];
const moreNumbers = [40, 50];

// Concat alternative using spread
const allNumbers = [...numbers, ...moreNumbers];
console.log('all numbers:', allNumbers); // [10, 20, 30, 40, 50]

// Join to create a formatted string
const resultString = allNumbers.join(' + ') + ' = ' + allNumbers.reduce((a, b) => a + b, 0);
console.log('formatted string:', resultString); // "10 + 20 + 30 + 40 + 50 = 150"