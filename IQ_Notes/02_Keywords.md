# JavaScript Keywords — Comparison Table

## What is a Keyword?

A **keyword** is a reserved word in JavaScript that has a special meaning to the language. You **cannot** use them as variable names, function names, or identifiers.

---

## Complete JavaScript Keyword List

| Category | Keywords |
|---|---|
| **Variable Declaration** | `var`, `let`, `const` |
| **Control Flow** | `if`, `else`, `switch`, `case`, `break`, `default` |
| **Looping** | `for`, `while`, `do`, `continue`, `in`, `of` |
| **Function** | `function`, `return`, `async`, `await`, `yield`, `*` (generator) |
| **Object / Class** | `class`, `extends`, `super`, `new`, `this`, `static`, `get`, `set` |
| **Error Handling** | `try`, `catch`, `finally`, `throw` |
| **Boolean & Null** | `true`, `false`, `null`, `undefined` |
| **Module** | `import`, `export`, `from`, `default`, `as` |
| **Type Checking** | `typeof`, `instanceof`, `void`, `delete` |
| **Debugging** | `debugger` |

---

## Deep Dive Comparison Tables

### 1. Variable Declaration Keywords

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| **Introduced in** | ES1 (1997) | ES6 (2015) | ES6 (2015) |
| **Scope** | Function-scoped | Block-scoped `{}` | Block-scoped `{}` |
| **Hoisting** | ✅ Hoisted (initialized as `undefined`) | ✅ Hoisted (but **not** initialized — TDZ) | ✅ Hoisted (but **not** initialized — TDZ) |
| **Reassignable** | ✅ Yes | ✅ Yes | ❌ No |
| **Redeclarable** | ✅ Yes (same scope) | ❌ No (same scope) | ❌ No (same scope) |
| **Temporal Dead Zone (TDZ)** | ❌ No | ✅ Yes | ✅ Yes |
| **Must be initialized** | ❌ No (`var x;` is fine) | ❌ No (`let x;` is fine) | ✅ Yes (`const x = value;`) |
| **Global property** | ✅ Creates `window.x` | ❌ No | ❌ No |

```javascript
// Example
var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 10;   // same 'a' — leaks out
  let b = 20;   // new 'b' — block-scoped
  // const c = 30; // Error! Cannot redeclare
}
console.log(a); // 10 (leaked!)
console.log(b); // 2 (still outer value)
```

---

### 2. Control Flow Keywords

| Keyword | Purpose | Notes |
|---|---|---|
| `if` / `else` | Conditional branching | `else` is optional |
| `switch` | Multi-way branching | Compares with `===` (strict) |
| `case` | A branch in `switch` | Requires `break` to prevent fall-through |
| `break` | Exit loop or `switch` | Also used in labeled statements |
| `default` | Fallback in `switch` | Also used in `export default` |

```javascript
const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else {
  console.log("C");
}

switch (score) {
  case 90: console.log("A"); break;
  case 80: console.log("B"); break;
  default: console.log("Keep trying");
}
```

---

### 3. Looping Keywords

| Keyword | Purpose | Works with |
|---|---|---|
| `for` | Classic loop | Counter/index |
| `for...in` | Iterates **keys** (property names) | Objects, Arrays (not recommended for arrays) |
| `for...of` | Iterates **values** | Arrays, Strings, Maps, Sets, Iterables |
| `while` | Loop while condition is true | Any boolean condition |
| `do...while` | Execute once, then loop | Any boolean condition |
| `continue` | Skip to next iteration | Any loop |
| `break` | Exit loop entirely | Any loop |

```javascript
const arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {}    // classic
for (let i in arr) {}                       // keys: "0", "1", "2"
for (let val of arr) {}                     // values: 10, 20, 30
```

---

### 4. Function Keywords

| Keyword | Purpose | Example |
|---|---|---|
| `function` | Declare a function | `function add(a, b) { return a + b; }` |
| `return` | Return a value from function | `return result;` |
| `async` | Declare async function (returns Promise) | `async function fetchData() {}` |
| `await` | Wait for a Promise (inside `async`) | `const data = await fetch(url);` |
| `yield` | Pause/resume a generator function | `function* gen() { yield 1; }` |

---

### 5. Object / Class Keywords

| Keyword | Purpose |
|---|---|
| `class` | Define a class (syntactic sugar over prototypes) |
| `extends` | Inherit from another class |
| `super` | Call parent class constructor or methods |
| `new` | Create an instance from a constructor/class |
| `this` | Reference to current execution context |
| `static` | Define a static method/property (on class, not instance) |
| `get` / `set` | Define a getter/setter property |

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  speak() {
    return super.speak() + " — Woof!";
  }
}

const dog = new Dog("Rex");
```

---

### 6. Error Handling Keywords

| Keyword | Purpose |
|---|---|
| `try` | Wrap code that may throw an error |
| `catch` | Handle the error |
| `finally` | Always runs (whether error or not) |
| `throw` | Manually throw an error |

```javascript
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error(err.message);
} finally {
  console.log("This always runs");
}
```

---

### 7. Module Keywords

| Keyword | Purpose |
|---|---|
| `import` | Import from another module |
| `export` | Export from current module |
| `from` | Specify module path in import |
| `default` | Export/import a default value |
| `as` | Alias for imports |

```javascript
// file: math.js
export const PI = 3.14;
export default function add(a, b) { return a + b; }

// file: app.js
import add, { PI as piValue } from './math.js';
```

---

### 8. Type & Operator Keywords

| Keyword | Purpose | Returns |
|---|---|---|
| `typeof` | Check data type of a value | `"string"`, `"number"`, `"object"`, etc. |
| `instanceof` | Check if object is instance of a class | `true` / `false` |
| `void` | Evaluate expression and return `undefined` | `undefined` |
| `delete` | Delete a property from an object | `true` / `false` |

---

## Reserved Keywords (Cannot Use as Identifiers)

| Category | Keywords |
|---|---|
| **Future reserved (strict mode)** | `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield` |
| **Literals** | `true`, `false`, `null` |

---

## Key Takeaway

| Concept | Keywords to Remember |
|---|---|
| **Declaring variables** | `var`, `let`, `const` |
| **Decision making** | `if`, `else`, `switch`, `case`, `break`, `default` |
| **Repeating code** | `for`, `while`, `do`, `for...in`, `for...of`, `continue`, `break` |
| **Writing functions** | `function`, `return`, `async`, `await`, `yield` |
| **OOP / Classes** | `class`, `extends`, `super`, `new`, `this`, `static` |
| **Handling errors** | `try`, `catch`, `finally`, `throw` |
| **Modules** | `import`, `export`, `from`, `default`, `as` |
| **Type checks** | `typeof`, `instanceof` |
