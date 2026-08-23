// Different ways to copy an array in JavaScript

// Original array
const originalArray = [1, 2, 3, 4, 5];
console.log("Original Array:", originalArray);

// 1. Using spread operator (Shallow copy)
const copy1 = [...originalArray];
console.log("Copy using spread operator:", copy1);

// 2. Using Array.from()
const copy2 = Array.from(originalArray);
console.log("Copy using Array.from():", copy2);

// 3. Using slice()
const copy3 = originalArray.slice();
console.log("Copy using slice():", copy3);

// 4. Using concat()
const copy4 = [].concat(originalArray);
console.log("Copy using concat():", copy4);

// 5. Using structuredClone() (Deep copy - works for nested arrays)
const nestedArray = [1, [2, 3], [4, 5]];
const deepCopy = structuredClone(nestedArray);
console.log("Deep copy using structuredClone():", deepCopy);

// 6. Using JSON methods (Deep copy - but loses functions/undefined)
const jsonCopy = JSON.parse(JSON.stringify(originalArray));
console.log("Deep copy using JSON:", jsonCopy);

// 7. Using Array.from() with map function
const copy5 = Array.from(originalArray, x => x);
console.log("Copy using Array.from() with map:", copy5);

// Verify copies are independent
originalArray[0] = 99;
console.log("\nAfter modifying originalArray[0] to 99:");
console.log("Original Array:", originalArray);
console.log("Spread copy (unaffected):", copy1);