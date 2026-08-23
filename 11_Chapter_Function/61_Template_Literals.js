// Template Literals (Template Strings) in JavaScript

// 1. Basic string interpolation
const name = "John";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// 2. Multi-line strings
const multiLine = `
This is a
multi-line
string using template literals.
`;
console.log(multiLine);

// 3. Expression evaluation
const a = 10;
const b = 5;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// 4. Function calls inside template literals
function greet(user) {
  return `Hello, ${user}!`;
}
console.log(`${greet("Alice")}`);

// 5. Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return `${result}${str}<strong>${values[i] || ""}</strong>`;
  }, "");
}
const user = "Bob";
const score = 95;
console.log(highlight`${user} scored ${score} points.`);

// 6. Nested template literals
const items = ["Apple", "Banana", "Cherry"];
const list = `
<ul>
  ${items.map((item) => `<li>${item}</li>`).join("\n  ")}
</ul>
`;
console.log(list);