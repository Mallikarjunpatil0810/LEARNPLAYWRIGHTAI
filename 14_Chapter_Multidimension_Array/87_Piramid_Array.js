// Pyramid Star Pattern - 3 Levels

let rows = 3;

for (let i = 1; i <= rows; i++) {
  let str = '';
  // Add spaces
  for (let j = 1; j <= rows - i; j++) {
    str += ' ';
  }
  // Add stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    str += '*';
  }
  console.log(str);
}