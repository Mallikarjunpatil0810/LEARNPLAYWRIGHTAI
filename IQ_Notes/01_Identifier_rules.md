# JavaScript Identifier Rules

## What is an Identifier?

An **identifier** is a name given to a variable, function, class, property, or parameter in JavaScript. It's how you refer to things in your code.

```javascript
let myName = "John";    // "myName" is an identifier
function sayHi() {}     // "sayHi" is an identifier
class UserAccount {}    // "UserAccount" is an identifier
```

---

## Identifier Rules — Quick Reference

| # | Rule | Valid Example | Invalid Example |
|---|---|---|---|
| 1 | Must start with a **letter**, `_`, or `$` | `name`, `_count`, `$value` | `1name` (starts with digit) |
| 2 | After first char, can include letters, digits, `_`, `$` | `user1`, `my_var`, `data$` | `my-var` (hyphen not allowed) |
| 3 | **Case-sensitive** | `Name` and `name` are different | ❌ `Name !== name` |
| 4 | Cannot be a **reserved keyword** | `userName` | `function`, `var`, `let` |
| 5 | Cannot contain **spaces** | `firstName` | `first name` |
| 6 | Cannot contain **special characters** (except `_` and `$`) | `total_amount` | `total@mount`, `first#name` |
| 7 | Unicode letters allowed (ES6+) | `café`, `π`, `名前` | — |

---

## Allowed Characters (Detailed)

| Character Type | Allowed at Start? | Allowed After First Char? |
|---|---|---|
| Letters (a-z, A-Z) | ✅ Yes | ✅ Yes |
| Underscore (`_`) | ✅ Yes | ✅ Yes |
| Dollar sign (`$`) | ✅ Yes | ✅ Yes |
| Digits (0-9) | ❌ No | ✅ Yes |
| Hyphen (`-`) | ❌ No | ❌ No |
| Space | ❌ No | ❌ No |
| Special chars (`@`, `#`, `!`, `%`, etc.) | ❌ No | ❌ No |
| Unicode letters (ES6) | ✅ Yes | ✅ Yes |

```javascript
// ✅ VALID identifiers
let name;
let _private;
let $dollar;
let firstName;
let user123;
let _;
let $;
let camelCaseExample;
let π;          // Unicode — valid
let 名前;       // Japanese — valid

// ❌ INVALID identifiers
// let 1name;       // Starts with digit
// let first-name;  // Hyphen not allowed
// let first name;  // Space not allowed
// let @user;       // Special char not allowed
// let void;        // Reserved keyword
```

---

## Case Sensitivity

JavaScript identifiers are **case-sensitive**. Each of these is a different variable:

```javascript
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";

console.log(name); // "Alice"
console.log(Name); // "Bob"
console.log(NAME); // "Charlie"
```

---

## Reserved Keywords (Cannot Use as Identifiers)

You cannot use these words as variable/function names:

| Category | Keywords |
|---|---|
| **Variable** | `var`, `let`, `const` |
| **Control flow** | `if`, `else`, `switch`, `case`, `break`, `default` |
| **Loops** | `for`, `while`, `do`, `continue`, `in`, `of` |
| **Functions** | `function`, `return`, `async`, `await`, `yield` |
| **Class / Object** | `class`, `extends`, `super`, `new`, `this`, `static` |
| **Error handling** | `try`, `catch`, `finally`, `throw` |
| **Boolean / Null** | `true`, `false`, `null` |
| **Modules** | `import`, `export`, `from` |
| **Type checks** | `typeof`, `instanceof`, `void`, `delete` |
| **Future reserved (strict)** | `implements`, `interface`, `package`, `private`, `protected`, `public` |

```javascript
// ❌ These will throw errors:
// let function = 5;
// let return = "hello";
// let const = 10;
```

---

## Naming Conventions (Best Practices)

| Convention | Example | Used For |
|---|---|---|
| **camelCase** | `firstName`, `getUserData` | Variables, Functions, Methods ✅ Most common |
| **PascalCase** | `UserAccount`, `HttpClient` | Classes, Constructors, Components |
| **UPPER_SNAKE_CASE** | `MAX_SIZE`, `API_KEY` | Constants (true constants) |
| **snake_case** | `user_name`, `total_count` | Rare in JS (common in Python/PHP) |
| **`_` prefix** | `_privateVar`, `_internalFn` | Convention for "private" (not enforced) |
| **`$` prefix** | `$element`, `$scope` | Common in jQuery / Angular code |

```javascript
// Recommended naming
const MAX_USERS = 100;          // Constant
let userName = "Alice";         // Variable
function getUserData() {}       // Function
class UserProfile {}            // Class
let _isLoading = false;         // Convention: "private"
```

---

## Common Mistakes

| Mistake | Wrong | Correct |
|---|---|---|
| Starting with digit | `let 1stPlace = 1;` | `let firstPlace = 1;` |
| Using hyphen | `let user-name = "John";` | `let userName = "John";` |
| Using a keyword | `let return = 5;` | `let returnValue = 5;` |
| Space in name | `let my name = "John";` | `let myName = "John";` |
| Case confusion | `let Name = "A"; name = "B";` (different vars) | Use consistent casing |
| Special character | `let user@mail = "a@b.com";` | `let userEmail = "a@b.com";` |

---

## Key Takeaway

| Rule | Summary |
|---|---|
| **Start with** | Letter, `_`, or `$` |
| **Contain** | Letters, digits, `_`, `$` |
| **Cannot** | Use keywords, spaces, hyphens, special chars |
| **Case** | Identifiers are case-sensitive (`a` ≠ `A`) |
| **Best practice** | Use `camelCase` for variables/functions, `PascalCase` for classes |
