let scores = [45, 82, 91, 60, 73];
let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");
console.log(grades);

// Map is generally used whenever we want to 
// transform the array into a new array of the same size.

let passing = scores.filter(s => s >= 70);
console.log(passing);