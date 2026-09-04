//typescript code

// =============================================
// Primitive Types in TypeScript
// =============================================

// 1. string - represents textual data
let firstName: string = "John";
let lastName: string = 'Doe';
let greeting: string = `Hello, ${firstName}!`; // template literal
console.log("String examples:", firstName, lastName, greeting);

// 2. number - represents numeric values (integers and floats)
let age: number = 30;
let price: number = 99.99;
let hex: number = 0xff;      // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744;   // octal
console.log("Number examples:", age, price, hex, binary, octal);

// 3. boolean - represents true/false values
let isActive: boolean = true;
let isCompleted: boolean = false;
let isGreater: boolean = 10 > 5; // computed boolean
console.log("Boolean examples:", isActive, isCompleted, isGreater);

// 4. null - represents an intentional absence of value
let nullValue: null = null;
console.log("Null example:", nullValue);

// 5. undefined - represents a variable that has not been assigned a value
let undefinedValue: undefined = undefined;
let notAssigned: string | undefined; // union type with undefined
console.log("Undefined example:", undefinedValue);

// 6. symbol - represents a unique and immutable value
let sym1: symbol = Symbol("key");
let sym2: symbol = Symbol("key");
console.log("Symbol examples:", sym1 === sym2); // false - symbols are unique

// 7. bigint - represents integers larger than 2^53 - 1
let bigNumber: bigint = 9007199254740991n;
let anotherBig: bigint = BigInt("12345678901234567890");
console.log("BigInt examples:", bigNumber, anotherBig);

// 8. void - represents the absence of a return value (usually for functions)
function logMessage(message: string): void {
    console.log(message);
}
logMessage("This function returns void");

// Type inference - TypeScript can infer types automatically
let inferredString = "TypeScript infers this as string";
let inferredNumber = 42; // inferred as number
let inferredBoolean = true; // inferred as boolean
console.log("Inferred types:", inferredString, inferredNumber, inferredBoolean);