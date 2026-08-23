// confusing operators in js
console.log("Confusing Operator", a); // Output: true
console.log("Confusing Operator", b); // Output: false 

//confusing operators in js
// null, undefined, NaN, 0, "", false, true

console.log(null); // Output: null
console.log(undefined); // Output: undefined
console.log(NaN); // Output: NaN
console.log(0); // Output: 0
console.log(""); // Output: ""
console.log(false); // Output: false
console.log(true); // Output: true


console.log(null == undefined) ; // Output: true
console.log(null === undefined) ; // Output: false

console.log(NaN == NaN) ; // Output: false
console.log(NaN === NaN) ; // Output: false 
console.log(NaN != NaN) ; // Output: true
console.log(NaN !== NaN) ; // Output: true 

console.log(null === undefined) ; // Output: false
console.log(null == undefined) ; // Output: true
console.log(null != 0) ; // Output: true
console.log(null >= 0) ; // Output: false
console.log(null <= 0) ; // Output: true
console.log(null > 0) ; // Output: false
console.log(null < 0) ; // Output: false    

console.log(null == 0 || null === 0); // Output: false
console.log(null != 0 || null !== 0); // Output: true
