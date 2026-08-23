// Multi-Dimension Array - 3x3 Matrix with login, pass, checkout, fail, search, and numbers

// Define a 3x3 matrix with mixed data
const matrix = [
    ["login", "pass", "checkout"],
    ["fail", "search", "numbers"],
    [101, 202, 303]
];

// Print the 3x3 matrix using nested for loops
console.log("=== 3x3 Matrix Output ===");
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + "\t";
    }
    console.log(row);
}

// Print each element with its index position
console.log("\n=== Element-wise Output ===");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}

// Conditional checks on the matrix
console.log("\n=== Conditional Checks ===");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let value = matrix[i][j];
        if (value === "login") {
            console.log(`Found 'login' at [${i}][${j}] - User is logging in`);
        } else if (value === "pass") {
            console.log(`Found 'pass' at [${i}][${j}] - Password accepted`);
        } else if (value === "checkout") {
            console.log(`Found 'checkout' at [${i}][${j}] - Checkout successful`);
        } else if (value === "fail") {
            console.log(`Found 'fail' at [${i}][${j}] - Operation failed`);
        } else if (value === "search") {
            console.log(`Found 'search' at [${i}][${j}] - Searching records`);
        } else if (value === "numbers") {
            console.log(`Found 'numbers' at [${i}][${j}] - Processing numbers`);
        } else if (typeof value === "number") {
            console.log(`Found number ${value} at [${i}][${j}] - Numeric value`);
        }
    }
}

// Search for a specific term in the matrix
console.log("\n=== Search Results ===");
let searchTerm = "login";
let found = false;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === searchTerm) {
            console.log(`'${searchTerm}' found at position [${i}][${j}]`);
            found = true;
        }
    }
}
if (!found) {
    console.log(`'${searchTerm}' not found in the matrix`);
}

// Extract and print only the numbers from the matrix
console.log("\n=== Numbers Array from Matrix ===");
let numbersArray = [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (typeof matrix[i][j] === "number") {
            numbersArray.push(matrix[i][j]);
        }
    }
}
console.log("Numbers extracted:", numbersArray);

// Print numbers using for loop
console.log("\n=== Printing Numbers with For Loop ===");
for (let k = 0; k < numbersArray.length; k++) {
    console.log(`Number[${k}] = ${numbersArray[k]}`);
}