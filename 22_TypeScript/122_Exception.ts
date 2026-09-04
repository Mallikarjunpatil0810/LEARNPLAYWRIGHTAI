//exceptions in typescript

// 1. Basic try-catch block
console.log("=== Basic try-catch ===");
try {
    let result: number = 10 / 0;
    console.log("Result:", result);
    throw new Error("Something went wrong!");
} catch (error) {
    console.log("Caught an error:", (error as Error).message);
}

// 2. try-catch-finally block
console.log("\n=== try-catch-finally ===");
function divideNumbers(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.log("Error:", (error as Error).message);
        return NaN;
    } finally {
        console.log("Finally block always executes");
    }
}
console.log("10 / 2 =", divideNumbers(10, 2));
console.log("10 / 0 =", divideNumbers(10, 0));

// 3. Custom Exception Classes
console.log("\n=== Custom Exception Classes ===");
class ValidationError extends Error {
    constructor(public field: string, message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

class DatabaseError extends Error {
    constructor(public code: number, message: string) {
        super(message);
        this.name = "DatabaseError";
    }
}

function validateUser(name: string, age: number): void {
    if (!name || name.trim().length === 0) {
        throw new ValidationError("name", "Name is required");
    }
    if (age < 0 || age > 150) {
        throw new ValidationError("age", "Age must be between 0 and 150");
    }
}

function processUser(name: string, age: number): void {
    try {
        validateUser(name, age);
        console.log(`User ${name} (age ${age}) is valid`);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(`Validation failed on field '${error.field}': ${error.message}`);
        } else if (error instanceof DatabaseError) {
            console.log(`Database error (code ${error.code}): ${error.message}`);
        } else {
            console.log("Unknown error:", error);
        }
    }
}

processUser("", 25);
processUser("Alice", 200);
processUser("Bob", 30);

// 4. Throwing different types
console.log("\n=== Throwing different types ===");
function riskyOperation(value: unknown): void {
    try {
        if (typeof value === "string" && value === "error") {
            throw "A string error";
        }
        if (typeof value === "number" && value < 0) {
            throw new RangeError("Value must be non-negative");
        }
        if (value === null) {
            throw new TypeError("Value cannot be null");
        }
        console.log("Operation succeeded with:", value);
    } catch (error) {
        if (error instanceof RangeError) {
            console.log("RangeError:", error.message);
        } else if (error instanceof TypeError) {
            console.log("TypeError:", error.message);
        } else {
            console.log("Caught:", error);
        }
    }
}

riskyOperation("error");
riskyOperation(-5);
riskyOperation(null);
riskyOperation(42);

// 5. Async exception handling
console.log("\n=== Async exception handling ===");
async function fetchData(url: string): Promise<string> {
    if (!url.startsWith("https://")) {
        throw new Error("Only HTTPS URLs are allowed");
    }
    return `Data from ${url}`;
}

async function handleAsyncOperation(): Promise<void> {
    try {
        const data = await fetchData("http://example.com");
        console.log("Data:", data);
    } catch (error) {
        console.log("Async error:", (error as Error).message);
    }

    try {
        const data = await fetchData("https://example.com");
        console.log("Data:", data);
    } catch (error) {
        console.log("Async error:", (error as Error).message);
    }
}

handleAsyncOperation();

// 6. Error boundary pattern (try-catch wrapper)
console.log("\n=== Error boundary pattern ===");
function withErrorHandling<T>(fn: () => T): { success: boolean; data?: T; error?: string } {
    try {
        const data = fn();
        return { success: true, data };
    } catch (error) {
        return { success: false, error: (error as Error).message };
    }
}

const safeResult1 = withErrorHandling(() => {
    return JSON.parse('{"name": "Alice"}');
});
console.log("Safe parse success:", safeResult1);

const safeResult2 = withErrorHandling(() => {
    return JSON.parse("invalid json");
});
console.log("Safe parse failure:", safeResult2);
