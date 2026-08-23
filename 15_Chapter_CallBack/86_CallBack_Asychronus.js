// ============================================
// Synchronous Callback Example
// ============================================

// A synchronous callback is executed immediately,
// blocking further execution until it completes.

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(name);
}

function sayGoodbye(name) {
  console.log(`Goodbye, ${name}!`);
}

console.log('--- Synchronous Callback ---');
greet('Alice', sayGoodbye);
console.log('This runs AFTER the callback (blocking)');

// Another synchronous callback example with array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log('Doubled (sync):', doubled);

// ============================================
// Asynchronous Callback Example
// ============================================

// An asynchronous callback is deferred and executed later,
// allowing other code to run in the meantime.

function fetchData(callback) {
  console.log('Fetching data...');
  setTimeout(function () {
    const data = { id: 1, name: 'Sample Data' };
    callback(data);
  }, 2000); // Simulates a 2-second delay (e.g., API call)
}

function processData(data) {
  console.log('Data received:', data);
}

console.log('\n--- Asynchronous Callback ---');
fetchData(processData);
console.log('This runs BEFORE the callback completes (non-blocking)');

// Another async callback example with file read simulation
function readFile(filename, callback) {
  console.log(`Reading file: ${filename}...`);
  setTimeout(function () {
    const content = `Contents of ${filename}`;
    callback(null, content);
  }, 1500);
}

function handleFile(err, content) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File content:', content);
}

readFile('example.txt', handleFile);
console.log('Continuing with other tasks while file is being read...');

// ============================================
// Key Difference Summary
// ============================================
console.log('\n--- Summary ---');
console.log('Synchronous: Callback runs immediately, blocking code execution.');
console.log('Asynchronous: Callback runs later, non-blocking (e.g., setTimeout, API calls).');