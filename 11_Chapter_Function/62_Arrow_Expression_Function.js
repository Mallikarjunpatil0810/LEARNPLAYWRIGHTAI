// =====================================================
// 62. Arrow Function vs Function Expression
// =====================================================

// -----------------------------------------------------
// 1) Function Expression
//    A function stored inside a variable.
//    It can be a named or anonymous function.
// -----------------------------------------------------
const addExpression = function (a, b) {
    return a + b;
};

// -----------------------------------------------------
// 2) Arrow Function
//    A shorter syntax for writing functions.
//    Uses => (arrow) between parameters and body.
// -----------------------------------------------------
const addArrow = (a, b) => {
    return a + b;
};

// Even shorter: implicit return (no {} needed for single expression)
const addShort = (a, b) => a + b;

console.log('Function Expression:', addExpression(5, 3)); // 8
console.log('Arrow Function     :', addArrow(5, 3));      // 8
console.log('Arrow (short)      :', addShort(5, 3));      // 8

// -----------------------------------------------------
// Single parameter: parentheses are optional
// -----------------------------------------------------
const double = n => n * 2;
console.log('Single param arrow :', double(4)); // 8

// -----------------------------------------------------
// Key Difference 1: `this` binding
// -----------------------------------------------------
const person = {
    name: 'Mallikarjun',
    // Function expression creates its OWN `this`
    greetExpression: function () {
        console.log('Expression this.name:', this.name); // works -> Mallikarjun
    },
    // Arrow function inherits `this` from the surrounding scope
    greetArrow: () => {
        console.log('Arrow this.name    :', this.name); // undefined (outer scope)
    },
};
person.greetExpression();
person.greetArrow();

// -----------------------------------------------------
// Key Difference 2: `arguments` object
// -----------------------------------------------------
const expressionArgs = function () {
    console.log('Expression arguments:', arguments.length); // has arguments
};
const arrowArgs = () => {
    // console.log(arguments); // ERROR: arguments is not defined in arrow functions
};
expressionArgs(1, 2, 3);

// Workaround for arrow: use rest parameters
const arrowArgsFixed = (...args) => console.log('Arrow rest length  :', args.length);
arrowArgsFixed(1, 2, 3);

// -----------------------------------------------------
// Key Difference 3: Cannot be used as a constructor
// -----------------------------------------------------
function NormalFunction(name) {
    this.name = name;
}
const obj1 = new NormalFunction('Alice');
console.log('Constructed object:', obj1.name);

// const obj2 = new arrowShort(); // ERROR: arrow functions are not constructors

// -----------------------------------------------------
// Summary
// -----------------------------------------------------
// - Function expression: has its own `this`, `arguments`, usable with `new`.
// - Arrow function: shorter, inherits `this`, no `arguments`, not a constructor.
