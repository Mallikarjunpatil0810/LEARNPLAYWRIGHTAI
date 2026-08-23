// Pattern:
// *
// **
// ***

// Using array to generate the pattern
const rows = 3;
const pattern = [];

for (let i = 1; i <= rows; i++) {
  pattern.push('*'.repeat(i));
}

// Print the pattern
pattern.forEach(row => console.log(row));