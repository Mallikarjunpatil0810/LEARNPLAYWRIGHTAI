// 3x3 Number Matrix - Multidimensional Array

// Creating a 3x3 matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

process.stdout.write("3x3 Matrix:\n");
process.stdout.write(JSON.stringify(matrix) + "\n");

// Accessing elements
process.stdout.write("\nAccessing elements:\n");
process.stdout.write("Element at row 0, col 0: " + matrix[0][0] + "\n"); // 1
process.stdout.write("Element at row 1, col 2: " + matrix[1][2] + "\n"); // 6
process.stdout.write("Element at row 2, col 1: " + matrix[2][1] + "\n"); // 8

// Iterating through the matrix
process.stdout.write("\nIterating through the matrix:\n");
for (let i = 0; i < matrix.length; i++) {
  let row = "";
  for (let j = 0; j < matrix[i].length; j++) {
    row += matrix[i][j] + " ";
  }
  process.stdout.write(row + "\n");
}

// Matrix operations
process.stdout.write("\nMatrix Operations:\n");

// Sum of all elements
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
process.stdout.write("Sum of all elements: " + sum + "\n");

// Transpose of the matrix
const transpose = [];
for (let i = 0; i < 3; i++) {
  transpose[i] = [];
  for (let j = 0; j < 3; j++) {
    transpose[i][j] = matrix[j][i];
  }
}
process.stdout.write("Transpose of matrix:\n");
process.stdout.write(JSON.stringify(transpose) + "\n");

// Diagonal elements
process.stdout.write("\nDiagonal elements:\n");
for (let i = 0; i < matrix.length; i++) {
  process.stdout.write(`matrix[${i}][${i}] = ${matrix[i][i]}\n`);
}

