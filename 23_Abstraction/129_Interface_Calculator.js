// Interface simulation using a base class
class CalculatorInterface {
  add(a, b) {
    throw new Error("Method 'add()' must be implemented.");
  }

  subtract(a, b) {
    throw new Error("Method 'subtract()' must be implemented.");
  }

  multiply(a, b) {
    throw new Error("Method 'multiply()' must be implemented.");
  }

  divide(a, b) {
    throw new Error("Method 'divide()' must be implemented.");
  }

  power(a, b) {
    throw new Error("Method 'power()' must be implemented.");
  }

  modulus(a, b) {
    throw new Error("Method 'modulus()' must be implemented.");
  }
}

// Concrete implementation of the CalculatorInterface
class BasicCalculator extends CalculatorInterface {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  modulus(a, b) {
    if (b === 0) {
      throw new Error("Modulus by zero is not allowed.");
    }
    return a % b;
  }
}

// Another implementation with logging
class LoggingCalculator extends CalculatorInterface {
  constructor() {
    super();
    this.history = [];
  }

  add(a, b) {
    const result = a + b;
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  subtract(a, b) {
    const result = a - b;
    this.history.push(`${a} - ${b} = ${result}`);
    return result;
  }

  multiply(a, b) {
    const result = a * b;
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    const result = a / b;
    this.history.push(`${a} / ${b} = ${result}`);
    return result;
  }

  power(a, b) {
    const result = Math.pow(a, b);
    this.history.push(`${a} ^ ${b} = ${result}`);
    return result;
  }

  modulus(a, b) {
    if (b === 0) {
      throw new Error("Modulus by zero is not allowed.");
    }
    const result = a % b;
    this.history.push(`${a} % ${b} = ${result}`);
    return result;
  }

  getHistory() {
    return this.history;
  }
}

// Usage examples
console.log("=== Basic Calculator ===");
const basicCalc = new BasicCalculator();
console.log(`10 + 5 = ${basicCalc.add(10, 5)}`);
console.log(`10 - 5 = ${basicCalc.subtract(10, 5)}`);
console.log(`10 * 5 = ${basicCalc.multiply(10, 5)}`);
console.log(`10 / 5 = ${basicCalc.divide(10, 5)}`);
console.log(`2 ^ 3 = ${basicCalc.power(2, 3)}`);
console.log(`10 % 3 = ${basicCalc.modulus(10, 3)}`);

console.log("\n=== Logging Calculator ===");
const loggingCalc = new LoggingCalculator();
console.log(`15 + 7 = ${loggingCalc.add(15, 7)}`);
console.log(`20 - 8 = ${loggingCalc.subtract(20, 8)}`);
console.log(`4 * 6 = ${loggingCalc.multiply(4, 6)}`);
console.log(`100 / 4 = ${loggingCalc.divide(100, 4)}`);
console.log(`3 ^ 4 = ${loggingCalc.power(3, 4)}`);
console.log(`17 % 5 = ${loggingCalc.modulus(17, 5)}`);
console.log("\nCalculation History:", loggingCalc.getHistory());

// Demonstrate interface enforcement
console.log("\n=== Interface Enforcement ===");
try {
  const incompleteCalc = Object.create(CalculatorInterface.prototype);
  incompleteCalc.add(1, 2); // Throws error because add is not implemented
} catch (error) {
  console.log("Interface enforcement works:", error.message);
}