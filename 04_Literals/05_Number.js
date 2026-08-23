let big = 9007199254740991n; // BigInt literal
let small = 1234567890123456789012345678901234567890n; // BigInt literal    
let big2 = BigInt("9007199254740991"); // BigInt constructor
let bigfromnumber = BigInt(9007199254740991); // BigInt constructor from number

console.log(big); // Output: 9007199254740991n
console.log(small); // Output: 123456789012
console.log(big2); // Output: 9007199254740991n
console.log(bigfromnumber); // Output: 9007199254740991n

console.log("Nan",NaN); // Output: bigint
console.log("0/0",0/0); // Output: NaN
console.log("Infinity",Infinity); // Output: Infinity
console.log("-Infinity",-Infinity); // Output: -Infinity
console.log("typeof NaN",typeof NaN); // Output: number
