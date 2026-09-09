// ============================================
// TypeScript Generics - Comprehensive Examples
// ============================================

// 1. Basic Generic Function
// Used in: Utility libraries, type-safe identity functions, type preservation
function identity<T>(arg: T): T {
    return arg;
}

console.log("--- Basic Generic Function ---");
console.log(identity<string>("Hello"));
console.log(identity<number>(42));

// 2. Generic with Array
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log("\n--- Generic with Array ---");
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["a", "b", "c"]));

// 3. Generic Interface
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair1: Pair<string, number> = { first: "Age", second: 25 };
const pair2: Pair<boolean, string[]> = { first: true, second: ["yes", "no"] };

console.log("\n--- Generic Interface ---");
console.log(pair1);
console.log(pair2);

// 4. Generic Class
class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    get count(): number {
        return this.items.length;
    }
}

console.log("\n--- Generic Class (Stack) ---");
const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
numberStack.push(30);
console.log("Popped:", numberStack.pop());
console.log("Peek:", numberStack.peek());
console.log("Count:", numberStack.count);

const stringStack = new Stack<string>();
stringStack.push("TypeScript");
stringStack.push("Generics");
console.log("Popped:", stringStack.pop());

// 5. Generic Constraints with extends
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(`Length: ${item.length}`);
}

console.log("\n--- Generic Constraints ---");
logLength("Hello World");
logLength([1, 2, 3, 4, 5]);
// logLength(123); // Error: number doesn't have length

// 6. Generic with keyof constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Alice", age: 30, city: "New York" };
console.log("\n--- keyof Constraint ---");
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));

// 7. Generic Utility Type - Partial, Readonly
interface User {
    id: number;
    name: string;
    email: string;
}

function updateUser(id: number, updates: Partial<User>): void {
    console.log(`Updating user ${id} with:`, updates);
}

console.log("\n--- Generic Utility Types ---");
updateUser(1, { name: "Bob" });
updateUser(2, { email: "new@email.com", age: 30 } as any); // Partial allows partial updates

// 8. Generic with mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type ReadonlyUser = Readonly<User>;

const readonlyUser: ReadonlyUser = { id: 1, name: "Charlie", email: "c@example.com" };
// readonlyUser.name = "Changed"; // Error: readonly

console.log("\n--- Mapped Generic Type ---");
console.log(readonlyUser);

// 9. Generic function with multiple constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

console.log("\n--- Merge with Generics ---");
const merged = merge({ name: "John" }, { age: 28, city: "London" });
console.log(merged);

// 10. Generic with conditional types
type IsString<T> = T extends string ? "Yes" : "No";

type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"

console.log("\n--- Conditional Generic Types ---");
console.log("IsString<string> = 'Yes'");
console.log("IsString<number> = 'No'");

// 11. Generic factory pattern
class Animal<T> {
    constructor(public name: T) {}
}

class Dog extends Animal<string> {
    constructor(name: string) {
        super(name);
    }
    bark(): void {
        console.log(`${this.name} says Woof!`);
    }
}

console.log("\n--- Generic Inheritance ---");
const dog = new Dog("Buddy");
dog.bark();

// 12. Generic with async functions
async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

console.log("\n--- Generic Async Function ---");
console.log("fetchData<T>(url) defined - usage:");
console.log("const data = await fetchData<User[]>('/api/users');");

// 13. Generic type alias
type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
};

const successResponse: ApiResponse<{ id: number; name: string }> = {
    success: true,
    data: { id: 1, name: "Test" }
};

const errorResponse: ApiResponse<null> = {
    success: false,
    data: null,
    message: "Not found"
};

console.log("\n--- Generic Type Alias ---");
console.log(successResponse);
console.log(errorResponse);

// 14. Default generic type parameter
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

console.log("\n--- Default Generic Parameter ---");
console.log(createArray(3, "default"));
console.log(createArray<number>(3, 100));

// 15. Generic with tuple types
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

console.log("\n--- Generic with Tuples ---");
console.log(swap(["hello", 42]));
console.log(swap([true, "world"]));