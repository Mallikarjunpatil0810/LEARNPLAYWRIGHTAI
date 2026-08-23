// Array - Accessing and Modifying Elements

// 1. Creating an array
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

console.log("Original array:", fruits);

// 2. Accessing array elements by index
console.log("\n--- Accessing Elements ---");
console.log("First element (index 0):", fruits[0]);
console.log("Second element (index 1):", fruits[1]);
console.log("Last element (index length-1):", fruits[fruits.length - 1]);

// 3. Modifying array elements
console.log("\n--- Modifying Elements ---");
fruits[1] = "Blueberry"; // Change "Banana" to "Blueberry"
console.log("After modifying index 1:", fruits);

fruits[3] = "Dragonfruit"; // Change "Date" to "Dragonfruit"
console.log("After modifying index 3:", fruits);

// 4. Adding new elements
console.log("\n--- Adding Elements ---");
fruits[fruits.length] = "Fig"; // Add at the end
console.log("After adding 'Fig':", fruits);

fruits.push("Grape"); // Using push()
console.log("After adding 'Grape' via push():", fruits);

// 5. Use a loop to access and modify array
console.log("\n--- Loop to Access and Modify ---");
let numbers = [10, 20, 30, 40, 50];
console.log("Original numbers:", numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2; // Double each element
}
console.log("After doubling each element:", numbers);

// 6. Accessing with indexOf
console.log("\n--- Finding Index ---");
let index = fruits.indexOf("Cherry");
console.log("Index of 'Cherry':", index);

// 7. Modify using splice (remove, replace, insert)
console.log("\n--- Using splice() ---");
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Original colors:", colors);

// Remove 1 element at index 2
colors.splice(2, 1);
console.log("After removing at index 2:", colors);

// Replace element at index 1
colors.splice(1, 1, "Purple");
console.log("After replacing index 1 with 'Purple':", colors);

// Insert at index 1 without removing
colors.splice(1, 0, "Orange");
console.log("After inserting 'Orange' at index 1:", colors);