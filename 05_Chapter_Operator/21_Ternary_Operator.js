//ternary opeator
let age = 20;
let beverage = age >= 18 ? "Beer" : "Juice";
console.log(beverage); // Beer


let actualStatusCode = 200;
let message = actualStatusCode === 200 ? "OK" : "Error";
console.log(message); // OK 

let actualStatusCode1 = 200;
let expectedStatusCode = 200;
let result = actualStatusCode1 === expectedStatusCode ? "Match" : "No Match";
console.log(result); // Match


let environament = "staging";
let baseURL = environament === "production" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL); // https://staging-api.example.com


let isCI = true;
let logLevel = isCI ? "error" : "debug";
console.log(logLevel); // error


let responseTime = 850;
let slaStatus = responseTime <= 1000 ? "Within SLA" : "SLA Breached";
console.log(slaStatus); // Within SLA
// template literals


// nested ternary operator
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(grade); // B


let statusCode = 404;
let category = statusCode < 400 ? "Success" : statusCode < 500 ? "Client Error" : "Server Error";
console.log(`Status ${statusCode}: ${category}`); // Client Error

/* let temp = 25;
let weather = temp < 0 ? "Freezing" : temp < 10 ? "Cold" : temp < 20 ? "Cool" : temp < 30 ? "Warm" : "Hot";
console.log(`Temperature: ${temp}°C - Weather: ${weather}`); // Warm  */

let temp = 25;
let feel = temp < 0 ? "Freezing" : temp < 10 ? "Cold" : temp < 20 ? "Cool" : temp < 30 ? "Warm" : "Hot";
console.log(`Temperature: ${temp}°C - Feel: ${feel}`); // Warm
