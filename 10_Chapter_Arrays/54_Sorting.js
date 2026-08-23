// =============================================
//  Array Sorting in JavaScript
// =============================================

// 1. Basic .sort() - converts elements to strings and sorts lexicographically
const fruits = ["banana", "apple", "cherry", "date"];
console.log("Original fruits:", fruits);
console.log("Sorted fruits (default):", [...fruits].sort());

// 2. Sorting numbers correctly (default sort fails)
const numbers = [34, 7, 23, 1, 100, 5];
console.log("\nOriginal numbers:", numbers);
console.log("Default sort (wrong for numbers):", [...numbers].sort());

// 3. Numeric sort (ascending)
console.log("Ascending sort:", [...numbers].sort((a, b) => a - b));

// 4. Numeric sort (descending)
console.log("Descending sort:", [...numbers].sort((a, b) => b - a));

// 5. Sorting strings with case-insensitivity
const words = ["Banana", "apple", "Cherry", "date"];
console.log("\nCase-insensitive sort:", [...words].sort((a, b) => a.localeCompare(b)));

// 6. Sorting objects by property
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 95 }
];

console.log("\nStudents sorted by grade (ascending):");
console.log([...students].sort((a, b) => a.grade - b.grade));

console.log("Students sorted by name:");
console.log([...students].sort((a, b) => a.name.localeCompare(b.name)));

// 7. Stable sort (ES2019+) - preserves original order for equal elements
const items = [
  { value: 10, id: 1 },
  { value: 5,  id: 2 },
  { value: 10, id: 3 },
  { value: 5,  id: 4 }
];
const sortedItems = [...items].sort((a, b) => a.value - b.value);
console.log("\nStable sort (equal values keep original order):", sortedItems);

// 8. .toSorted() - returns new sorted array (does not mutate original)
const original = [3, 1, 4, 1, 5];
const sorted = original.toSorted((a, b) => a - b);
console.log("\n.toSorted() - original unchanged:", original);
console.log(".toSorted() - new sorted array:", sorted);

// 9. .reverse() - reverses the array (mutates)
const arr = [1, 2, 3, 4, 5];
console.log("\nOriginal:", arr);
console.log("Reversed:", [...arr].reverse());

// 10. .toReversed() - returns reversed copy (does not mutate)
console.log(".toReversed() copy:", arr.toReversed());
console.log("Original after .toReversed():", arr);

// 11. Custom sorting: sorting by string length
const wordsByLength = ["short", "very long string", "medium", "tiny"];
console.log("\nSorted by length:", [...wordsByLength].sort((a, b) => a.length - b.length));

// 12. Sorting with .sort() and .map() for complex logic
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 }
];
console.log("\nPeople sorted by age:", [...people].sort((a, b) => a.age - b.age));

// 13. Shuffle (random sort) - not truly random but demonstrates custom comparator
const deck = [1, 2, 3, 4, 5];
console.log("\nShuffled:", [...deck].sort(() => Math.random() - 0.5));

// 14. Sorting with .localeCompare() options
const germanWords = ["äpfel", "apfel", "Äpfel", "Apfel"];
console.log("\nGerman locale sort:", [...germanWords].sort((a, b) => a.localeCompare(b, "de")));

// 15. Performance tip: for large arrays, consider using TypedArrays or Intl.Collator
const collator = new Intl.Collator("en", { sensitivity: "base" });
const mixed = ["a", "B", "c", "A", "b"];
console.log("\nCollator sort:", [...mixed].sort(collator.compare));