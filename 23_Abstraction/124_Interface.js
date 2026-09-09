// ============================================================
//  INTERFACE CONCEPT IN JAVASCRIPT
//  JavaScript does NOT have a built-in 'interface' keyword like
//  Java/TypeScript. Instead, we simulate interfaces using:
//    1. JSDoc / TypeScript-like comments
//    2. Duck typing / structural typing
//    3. Abstract base classes with method stubs
//    4. Explicit checks in methods
// ============================================================

// -------------------------------------------------------
//  1. DEFINING AN INTERFACE (via JSDoc comments)
// -------------------------------------------------------

/**
 * @interface IShape
 * @method getArea() returns {number}
 * @method getPerimeter() returns {number}
 * @method describe() returns {string}
 */

// -------------------------------------------------------
//  2. IMPLEMENTING THE INTERFACE (classes that conform)
// -------------------------------------------------------

/**
 * @implements {IShape}
 */
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  describe() {
    return `Rectangle [${this.width} x ${this.height}]`;
  }
}

/**
 * @implements {IShape}
 */
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  describe() {
    return `Circle [radius=${this.radius}]`;
  }
}

// -------------------------------------------------------
//  3. WHERE INTERFACE IS USED — POLYMORPHISM
//     Functions accept ANY object that conforms to IShape
// -------------------------------------------------------

/**
 * This function works with ANY shape that implements IShape.
 * It does NOT care about the concrete class — only the interface.
 * @param {IShape} shape
 */
function printShapeInfo(shape) {
  console.log(`--- ${shape.describe()} ---`);
  console.log(`  Area      : ${shape.getArea().toFixed(2)}`);
  console.log(`  Perimeter : ${shape.getPerimeter().toFixed(2)}`);
}

/**
 * Another example: a collection that stores shapes.
 * @param {IShape[]} shapes
 */
function printAllShapes(shapes) {
  shapes.forEach((shape) => printShapeInfo(shape));
}

// -------------------------------------------------------
//  4. ENFORCING INTERFACE CONTRACT AT RUNTIME
// -------------------------------------------------------

/**
 * Explicitly checks if an object implements IShape.
 * This is optional but helps catch missing methods early.
 * @param {any} obj
 * @returns {boolean}
 */
function implementsIShape(obj) {
  const requiredMethods = ['getArea', 'getPerimeter', 'describe'];
  return requiredMethods.every((method) => typeof obj[method] === 'function');
}

/**
 * A safe wrapper that only processes valid shapes.
 * @param {any} shape
 */
function safePrintShapeInfo(shape) {
  if (!implementsIShape(shape)) {
    console.warn('Object does not implement IShape — skipping.');
    return;
  }
  printShapeInfo(shape);
}

// -------------------------------------------------------
//  5. DEMO / EXECUTION
// -------------------------------------------------------

console.log('========== INTERFACE DEMO ==========\n');

const rect = new Rectangle(10, 5);
const circle = new Circle(7);

// Polymorphism: same function works for different types
printShapeInfo(rect);
printShapeInfo(circle);

console.log('\n--- Collection of shapes ---');
printAllShapes([rect, circle]);

console.log('\n--- Runtime interface check ---');
safePrintShapeInfo(rect);               // valid
safePrintShapeInfo({});                 // invalid — missing methods
safePrintShapeInfo({ getArea() { return 0; } }); // invalid — incomplete

console.log('\n========== END ==========');

// -------------------------------------------------------
//  SUMMARY
//  - Interface defines WHAT methods an object must have.
//  - It is used wherever we want POLYMORPHISM:
//    functions, collections, dependency injection, etc.
//  - In JS we rely on duck typing + optional runtime checks.
// -------------------------------------------------------