// String Object in JavaScript

// 1. Creating Strings
let str1 = 'Hello World';                    // String literal
let str2 = "JavaScript";                     // String literal
let str3 = new String("String Object");      // Using String constructor
let str4 = `Template Literal ${str1}`;       // Template literal

console.log("=== String Creation ===");
console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);
console.log("str4:", str4);
console.log("Type of str1:", typeof str1);
console.log("Type of str3:", typeof str3);

// 2. String Properties
console.log("\n=== String Properties ===");
console.log("Length of str1:", str1.length);
console.log("Constructor:", str1.constructor);

// 3. String Methods - Accessing Characters
console.log("\n=== Accessing Characters ===");
console.log("Character at index 0:", str1.charAt(0));
console.log("Character code at index 0:", str1.charCodeAt(0));
console.log("Using bracket notation:", str1[0]);

// 4. String Methods - Searching
console.log("\n=== Searching ===");
console.log("indexOf 'World':", str1.indexOf("World"));
console.log("lastIndexOf 'o':", str1.lastIndexOf("o"));
console.log("includes 'Hello':", str1.includes("Hello"));
console.log("startsWith 'He':", str1.startsWith("He"));
console.log("endsWith 'ld':", str1.endsWith("ld"));

// 5. String Methods - Extracting
console.log("\n=== Extracting Substrings ===");
console.log("slice(0,5):", str1.slice(0, 5));
console.log("substring(0,5):", str1.substring(0, 5));
console.log("substr(0,5):", str1.substr(0, 5));

// 6. String Methods - Case Conversion
console.log("\n=== Case Conversion ===");
console.log("toUpperCase:", str1.toUpperCase());
console.log("toLowerCase:", str1.toLowerCase());

// 7. String Methods - Trimming
let paddedStr = "   Hello World   ";
console.log("\n=== Trimming ===");
console.log("Original:", `'${paddedStr}'`);
console.log("trim:", `'${paddedStr.trim()}'`);
console.log("trimStart:", `'${paddedStr.trimStart()}'`);
console.log("trimEnd:", `'${paddedStr.trimEnd()}'`);

// 8. String Methods - Replacing
console.log("\n=== Replacing ===");
console.log("replace 'World' with 'JS':", str1.replace("World", "JS"));
console.log("replaceAll 'o' with '0':", str1.replaceAll("o", "0"));

// 9. String Methods - Splitting and Joining
console.log("\n=== Splitting and Joining ===");
let csv = "apple,banana,orange";
let fruits = csv.split(",");
console.log("split result:", fruits);
console.log("join with ' - ':", fruits.join(" - "));

// 10. String Methods - Padding
console.log("\n=== Padding ===");
console.log("padStart:", "5".padStart(3, "0"));
console.log("padEnd:", "5".padEnd(3, "0"));

// 11. String Methods - Repeat
console.log("\n=== Repeat ===");
console.log("repeat 3 times:", "Ha".repeat(3));

// 12. String Methods - Match and Search
console.log("\n=== Match and Search ===");
let text = "The rain in Spain stays mainly in the plain";
console.log("match 'ain':", text.match(/ain/g));
console.log("search 'Spain':", text.search("Spain"));

// 13. String Comparison
console.log("\n=== String Comparison ===");
let a = "apple";
let b = "banana";
console.log("'apple' < 'banana':", a < b);
console.log("localeCompare:", a.localeCompare(b));

// 14. Converting to String
console.log("\n=== Converting to String ===");
let num = 123;
console.log("String(123):", String(num));
console.log("toString():", num.toString());
console.log("toExponential:", (123.456).toExponential(2));
console.log("toFixed:", (123.456).toFixed(2));
console.log("toPrecision:", (123.456).toPrecision(4));

// 15. Escape Sequences
console.log("\n=== Escape Sequences ===");
console.log("New line:\nSecond line");
console.log("Tab:\tTabbed text");
console.log("Backslash: \\");
console.log("Single quote: '");
console.log("Double quote: \"");

// 16. Practical Examples
console.log("\n=== Practical Examples ===");

// Email validation
let email = "user@example.com";
console.log("Email contains @:", email.includes("@"));
console.log("Email domain:", email.split("@")[1]);

// Password strength check
let password = "MyP@ss123";
console.log("Password length >= 8:", password.length >= 8);
console.log("Has uppercase:", /[A-Z]/.test(password));
console.log("Has lowercase:", /[a-z]/.test(password));
console.log("Has number:", /[0-9]/.test(password));

// URL manipulation
let url = "https://www.example.com/path?query=value";
console.log("Protocol:", url.split("://")[0]);
console.log("Hostname:", url.split("://")[1].split("/")[0]);

// String formatting
let name = "John";
let age = 30;
console.log(`Name: ${name}, Age: ${age}`);  // Template literal
console.log("Name: %s, Age: %d", name, age); // printf style