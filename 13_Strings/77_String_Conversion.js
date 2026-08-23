// String Conversion Examples in JavaScript

// 1. Convert Number to String
let num = 123;
console.log("Number to String:");
console.log("String(num):", String(num));           // "123"
console.log("num.toString():", num.toString());     // "123"
console.log("num + '':", num + "");                 // "123"

// 2. Convert Boolean to String
let bool = true;
console.log("\nBoolean to String:");
console.log("String(bool):", String(bool));         // "true"
console.log("bool.toString():", bool.toString());   // "true"

// 3. Convert Array to String
let arr = [1, 2, 3, 4, 5];
console.log("\nArray to String:");
console.log("String(arr):", String(arr));           // "1,2,3,4,5"
console.log("arr.toString():", arr.toString());     // "1,2,3,4,5"
console.log("arr.join(' - '):", arr.join(" - "));   // "1 - 2 - 3 - 4 - 5"

// 4. Convert Object to String
let obj = { name: "John", age: 30 };
console.log("\nObject to String:");
console.log("String(obj):", String(obj));           // "[object Object]"
console.log("JSON.stringify(obj):", JSON.stringify(obj)); // '{"name":"John","age":30}'

// 5. Convert Date to String
let date = new Date();
console.log("\nDate to String:");
console.log("String(date):", String(date));
console.log("date.toString():", date.toString());
console.log("date.toDateString():", date.toDateString());
console.log("date.toISOString():", date.toISOString());

// 6. Convert String to Number
let strNum = "456";
console.log("\nString to Number:");
console.log("Number(strNum):", Number(strNum));         // 456
console.log("parseInt(strNum):", parseInt(strNum));     // 456
console.log("parseFloat(strNum):", parseFloat(strNum)); // 456
console.log("+strNum:", +strNum);                       // 456

// 7. Convert String to Boolean
let strBool = "true";
console.log("\nString to Boolean:");
console.log("Boolean(strBool):", Boolean(strBool));     // true (non-empty string)
console.log("Boolean(''):", Boolean(""));               // false (empty string)
console.log("Boolean('false'):", Boolean("false"));     // true (non-empty string)

// 8. Convert String to Array
let str = "Hello World";
console.log("\nString to Array:");
console.log("str.split(''):", str.split(""));           // ['H','e','l','l','o',' ','W','o','r','l','d']
console.log("str.split(' '):", str.split(" "));         // ['Hello', 'World']
console.log("Array.from(str):", Array.from(str));       // ['H','e','l','l','o',' ','W','o','r','l','d']
console.log("[...str]:", [...str]);                     // ['H','e','l','l','o',' ','W','o','r','l','d']

// 9. Convert Number to Different Bases
let numBase = 255;
console.log("\nNumber to Different Bases:");
console.log("Decimal:", numBase.toString(10));          // "255"
console.log("Binary:", numBase.toString(2));            // "11111111"
console.log("Octal:", numBase.toString(8));             // "377"
console.log("Hexadecimal:", numBase.toString(16));      // "ff"

// 10. Convert String to Different Cases
let strCase = "Hello World";
console.log("\nString Case Conversion:");
console.log("toUpperCase():", strCase.toUpperCase());   // "HELLO WORLD"
console.log("toLowerCase():", strCase.toLowerCase());   // "hello world"

// 11. Convert Number with Fixed Decimals
let floatNum = 123.456789;
console.log("\nNumber with Fixed Decimals:");
console.log("toFixed(2):", floatNum.toFixed(2));        // "123.46"
console.log("toPrecision(4):", floatNum.toPrecision(4)); // "123.5"
console.log("toExponential(2):", floatNum.toExponential(2)); // "1.23e+2"

// 12. Convert String to Integer/Float
let strFloat = "123.456";
console.log("\nString to Integer/Float:");
console.log("parseInt(strFloat):", parseInt(strFloat));     // 123
console.log("parseFloat(strFloat):", parseFloat(strFloat)); // 123.456
console.log("Math.floor(parseFloat(strFloat)):", Math.floor(parseFloat(strFloat))); // 123

// 13. Convert Null and Undefined
console.log("\nNull and Undefined Conversion:");
console.log("String(null):", String(null));             // "null"
console.log("String(undefined):", String(undefined));   // "undefined"
console.log("Number(null):", Number(null));             // 0
console.log("Number(undefined):", Number(undefined));   // NaN

// 14. Convert using Template Literals
let name = "Alice";
let age = 25;
console.log("\nTemplate Literal Conversion:");
console.log(`Name: ${name}, Age: ${age}`);              // "Name: Alice, Age: 25"

// 15. Convert Character Codes
console.log("\nCharacter Code Conversion:");
console.log("String.fromCharCode(65):", String.fromCharCode(65));     // "A"
console.log("'A'.charCodeAt(0):", "A".charCodeAt(0));                // 65
console.log("String.fromCodePoint(128512):", String.fromCodePoint(128512)); // 😀