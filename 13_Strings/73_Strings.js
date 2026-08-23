// ============================================
// Strings and String Functions in JavaScript
// ============================================

// ----- Creating Strings -----
const singleQuote = 'Hello, World!';
const doubleQuote = "Hello, World!";
const backtick = `Hello, World!`; // Template literal

console.log('--- Creating Strings ---');
console.log('Single quote:', singleQuote);
console.log('Double quote:', doubleQuote);
console.log('Backtick:', backtick);

// ----- String Length -----
const str = 'JavaScript';
console.log('\n--- String Length ---');
console.log(`Length of "${str}":`, str.length);

// ----- Accessing Characters -----
console.log('\n--- Accessing Characters ---');
console.log(`First char: ${str[0]}`);
console.log(`Last char: ${str[str.length - 1]}`);
console.log(`charAt(4): ${str.charAt(4)}`);

// ----- Case Conversion -----
console.log('\n--- Case Conversion ---');
console.log('toUpperCase:', str.toUpperCase());
console.log('toLowerCase:', str.toLowerCase());

// ----- Searching & Index -----
console.log('\n--- Searching & Index ---');
const sentence = 'The quick brown fox jumps over the lazy dog';
console.log('Sentence:', sentence);
console.log('indexOf("fox"):', sentence.indexOf('fox'));
console.log('lastIndexOf("the"):', sentence.lastIndexOf('the'));
console.log('includes("brown"):', sentence.includes('brown'));
console.log('startsWith("The"):', sentence.startsWith('The'));
console.log('endsWith("dog"):', sentence.endsWith('dog'));

// ----- Extracting Substrings -----
console.log('\n--- Extracting Substrings ---');
console.log('slice(4, 9):', sentence.slice(4, 9));        // quick
console.log('slice(-3):', sentence.slice(-3));            // dog
console.log('substring(4, 9):', sentence.substring(4, 9));
console.log('substr(4, 5):', sentence.substr(4, 5));      // deprecated but works

// ----- Splitting & Joining -----
console.log('\n--- Splitting & Joining ---');
const words = sentence.split(' ');
console.log('split(" "):', words);
console.log('join(" | "):', words.join(' | '));

// ----- Replacing -----
console.log('\n--- Replacing ---');
console.log('replace("fox", "cat"):', sentence.replace('fox', 'cat'));
console.log('replaceAll("the", "a"):', sentence.replaceAll('the', 'a'));

// ----- Trimming -----
console.log('\n--- Trimming ---');
const padded = '   Hello World!   ';
console.log('Original:', `"${padded}"`);
console.log('trim():', `"${padded.trim()}"`);
console.log('trimStart():', `"${padded.trimStart()}"`);
console.log('trimEnd():', `"${padded.trimEnd()}"`);

// ----- Padding -----
console.log('\n--- Padding ---');
const num = '42';
console.log('padStart(5, "0"):', num.padStart(5, '0'));   // 00042
console.log('padEnd(5, "*"):', num.padEnd(5, '*'));       // 42***

// ----- Repeat & Concat -----
console.log('\n--- Repeat & Concat ---');
console.log('"Hi ".repeat(3):', 'Hi '.repeat(3));
console.log('concat:', 'Hello'.concat(' ', 'World', '!'));

// ----- Template Literals (Interpolation) -----
console.log('\n--- Template Literals ---');
const name = 'Alice';
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`);

// ----- Multi-line Strings -----
console.log('\n--- Multi-line Strings ---');
const multiLine = `
  This is line 1
  This is line 2
  This is line 3
`;
console.log('Multi-line string:', multiLine);

// ----- Escape Characters -----
console.log('\n--- Escape Characters ---');
console.log('New line:\\nBetween');
console.log('Tab:\\tBetween');
console.log('Backslash: \\\\');
console.log("Single quote: '");
console.log('Double quote: "');

// ----- Comparing Strings -----
console.log('\n--- Comparing Strings ---');
console.log('"apple" === "apple":', 'apple' === 'apple');
console.log('"apple" < "banana":', 'apple' < 'banana');   // true (lexicographic)
console.log('localeCompare:', 'apple'.localeCompare('banana')); // -1

// ----- String to Array -----
console.log('\n--- String to Array ---');
console.log('Array.from("ABC"):', Array.from('ABC'));
console.log('spread [..."XYZ"]:', [...'XYZ']);

// ----- Useful Patterns -----
console.log('\n--- Useful Patterns ---');

// Check if string is empty or whitespace
const emptyStr = '';
const blankStr = '   ';
console.log('isEmpty (emptyStr):', emptyStr.length === 0);
console.log('isBlank (blankStr):', blankStr.trim().length === 0);

// Reverse a string
const original = 'hello';
const reversed = original.split('').reverse().join('');
console.log(`Reverse of "${original}":`, reversed);

// Count occurrences
const text = 'She sells sea shells by the sea shore';
const count = (text.match(/sea/g) || []).length;
console.log(`Occurrences of "sea":`, count);

// Check palindrome
const word = 'racecar';
const isPalindrome = word === word.split('').reverse().join('');
console.log(`Is "${word}" a palindrome?:`, isPalindrome);