// Reverse star pattern
// *****
// ****
// ***
// **
// *

function printReversePattern(rows) {
  for (let i = rows; i >= 1; i--) {
    console.log('*'.repeat(i));
  }
}

printReversePattern(5);

// Alternative approach using nested loops
function printReversePatternNested(rows) {
  for (let i = rows; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '*';
    }
    console.log(line);
  }
}

printReversePatternNested(5);

