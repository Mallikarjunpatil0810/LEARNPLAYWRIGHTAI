// ============================================
// String Searching & Checking Methods in JavaScript
// ============================================

const text = "Hello, welcome to JavaScript programming! Let's learn string methods.";

// ---------- 1. indexOf() ----------
// Returns the index of the first occurrence of a substring (-1 if not found)
console.log("--- indexOf() ---");
console.log(`indexOf('JavaScript'): ${text.indexOf('JavaScript')}`);       // 22
console.log(`indexOf('java'): ${text.indexOf('java')}`);                   // -1 (case-sensitive)
console.log(`indexOf('o'): ${text.indexOf('o')}`);                         // 4
console.log(`indexOf('o', 5): ${text.indexOf('o', 5)}`);                   // 14 (search from index 5)

// ---------- 2. lastIndexOf() ----------
// Returns the index of the last occurrence of a substring (-1 if not found)
console.log("\n--- lastIndexOf() ---");
console.log(`lastIndexOf('o'): ${text.lastIndexOf('o')}`);                 // 17
console.log(`lastIndexOf('string'): ${text.lastIndexOf('string')}`);       // 53
console.log(`lastIndexOf('o', 10): ${text.lastIndexOf('o', 10)}`);         // 4 (search backwards from index 10)

// ---------- 3. includes() ----------
// Returns true if the string contains the specified substring
console.log("\n--- includes() ---");
console.log(`includes('JavaScript'): ${text.includes('JavaScript')}`);     // true
console.log(`includes('Python'): ${text.includes('Python')}`);             // false
console.log(`includes('learn'): ${text.includes('learn')}`);               // true

// ---------- 4. startsWith() ----------
// Returns true if the string starts with the specified substring
console.log("\n--- startsWith() ---");
console.log(`startsWith('Hello'): ${text.startsWith('Hello')}`);           // true
console.log(`startsWith('Welcome'): ${text.startsWith('Welcome')}`);       // false
console.log(`startsWith('welcome', 7): ${text.startsWith('welcome', 7)}`); // true (start at index 7)

// ---------- 5. endsWith() ----------
// Returns true if the string ends with the specified substring
console.log("\n--- endsWith() ---");
console.log(`endsWith('methods.'): ${text.endsWith('methods.')}`);         // true
console.log(`endsWith('methods'): ${text.endsWith('methods')}`);           // false
console.log(`endsWith('to', 11): ${text.endsWith('to', 11)}`);             // true (consider only first 11 chars)

// ---------- 6. search() ----------
// Searches using a regular expression and returns the index of the match
console.log("\n--- search() ---");
console.log(`search(/JavaScript/): ${text.search(/JavaScript/)}`);         // 22
console.log(`search(/[0-9]/): ${text.search(/[0-9]/)}`);                   // -1 (no digits)
console.log(`search(/learn/i): ${text.search(/learn/i)}`);                 // 44 (case-insensitive)

// ---------- 7. match() ----------
// Returns an array of matches (or null if no match)
console.log("\n--- match() ---");
const sentence = "The numbers are 42, 100, and 7.";
console.log(`match(/\\d+/): ${JSON.stringify(sentence.match(/\d+/))}`);    // ["42"]
console.log(`match(/\\d+/g): ${JSON.stringify(sentence.match(/\d+/g))}`);  // ["42","100","7"]
console.log(`match(/xyz/): ${sentence.match(/xyz/)}`);                     // null

// ---------- 8. matchAll() ----------
// Returns an iterator of all matches (requires global flag)
console.log("\n--- matchAll() ---");
const regex = /\d+/g;
const matches = [...sentence.matchAll(regex)];
matches.forEach((match, i) => {
    console.log(`Match ${i + 1}: '${match[0]}' at index ${match.index}`);
});

// ---------- 9. Practical Examples ----------
console.log("\n--- Practical Examples ---");

// Check if email is valid (basic check)
const email = "user@example.com";
if (email.includes('@') && email.includes('.')) {
    console.log(`"${email}" appears to be a valid email.`);
}

// Extract domain from email
const atIndex = email.indexOf('@');
const domain = email.slice(atIndex + 1);
console.log(`Domain: ${domain}`);

// Check file extension
const filename = "document.pdf";
if (filename.endsWith('.pdf')) {
    console.log(`"${filename}" is a PDF file.`);
}

// Count occurrences of a substring
const str = "She sells seashells by the seashore.";
const target = "se";
let count = 0;
let pos = str.indexOf(target);
while (pos !== -1) {
    count++;
    pos = str.indexOf(target, pos + 1);
}
console.log(`"${target}" appears ${count} times in "${str}"`);

// Check if string starts with a prefix
const url = "https://example.com";
if (url.startsWith('https://')) {
    console.log(`"${url}" is a secure URL.`);
}

// ---------- 10. Summary Table ----------
console.log("\n--- Summary ---");
console.log("Method        | Returns           | Description");
console.log("--------------|-------------------|--------------------------------");
console.log("indexOf()     | Number (index)    | First occurrence index");
console.log("lastIndexOf() | Number (index)    | Last occurrence index");
console.log("includes()    | Boolean           | Contains substring?");
console.log("startsWith()  | Boolean           | Starts with substring?");
console.log("endsWith()    | Boolean           | Ends with substring?");
console.log("search()      | Number (index)    | Regex search index");
console.log("match()       | Array or null     | Regex match results");
console.log("matchAll()    | Iterator          | All regex matches");