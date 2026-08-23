// String Extraction Examples in JavaScript

// Sample string
const text = "Hello, welcome to JavaScript string extraction!";

// 1. Using slice(start, end) - extracts from start index to end (end not included)
console.log("--- slice() ---");
console.log(text.slice(0, 5));        // "Hello"
console.log(text.slice(7, 14));       // "welcome"
console.log(text.slice(-9, -1));      // "extraction"

// 2. Using substring(start, end) - similar to slice but negative values treated as 0
console.log("\n--- substring() ---");
console.log(text.substring(0, 5));    // "Hello"
console.log(text.substring(7, 14));   // "welcome"
console.log(text.substring(7));       // "welcome to JavaScript string extraction!"

// 3. Using substr(start, length) - extracts from start with given length (deprecated)
console.log("\n--- substr() ---");
console.log(text.substr(0, 5));       // "Hello"
console.log(text.substr(7, 7));       // "welcome"

// 4. Using charAt(index) - returns character at specified index
console.log("\n--- charAt() ---");
console.log(text.charAt(0));          // "H"
console.log(text.charAt(6));          // " "

// 5. Using at(index) - modern alternative to charAt, supports negative indexing
console.log("\n--- at() ---");
console.log(text.at(0));              // "H"
console.log(text.at(-1));             // "!"

// 6. Using split() - splits string into array
console.log("\n--- split() ---");
const words = text.split(" ");
console.log(words);                   // ["Hello,", "welcome", "to", "JavaScript", "string", "extraction!"]

// 7. Using match() with regex - extracts matching patterns
console.log("\n--- match() ---");
const email = "user@example.com";
const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/;
console.log(email.match(emailPattern)); // ["user@example.com"]

// 8. Using matchAll() - extracts all matches
console.log("\n--- matchAll() ---");
const sentence = "The numbers are 42, 100, and 7.";
const numbers = [...sentence.matchAll(/\d+/g)];
console.log(numbers.map(m => m[0]));  // ["42", "100", "7"]

// 9. Using replace() with regex - extracts by replacing unwanted parts
console.log("\n--- replace() ---");
const phone = "(123) 456-7890";
const digitsOnly = phone.replace(/\D/g, "");
console.log(digitsOnly);              // "1234567890"

// 10. Practical example: Extract domain from email
console.log("\n--- Practical Examples ---");
const emailAddress = "john.doe@company.org";
const domain = emailAddress.substring(emailAddress.indexOf("@") + 1);
console.log("Domain:", domain);       // "company.org"

// 11. Extract file extension
const filename = "document.pdf";
const extension = filename.split(".").pop();
console.log("Extension:", extension); // "pdf"

// 12. Extract text between delimiters
const data = "Name: John | Age: 30 | City: NY";
const name = data.split("|")[0].split(":")[1].trim();
console.log("Name:", name);           // "John"