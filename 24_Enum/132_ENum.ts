// ============================================
// Enumeration (Enum) in TypeScript
// ============================================

// 1. Numeric Enum (default)
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

console.log("=== Numeric Enum ===");
console.log(Direction.Up);    // 0
console.log(Direction.Down);  // 1
console.log(Direction.Left);  // 2
console.log(Direction.Right); // 3

// Reverse mapping (numeric enums only)
console.log(Direction[0]); // "Up"
console.log(Direction[2]); // "Left"

// 2. Numeric Enum with custom initial values
enum StatusCode {
  Success = 200,
  NotFound = 404,
  InternalError = 500
}

console.log("\n=== Numeric Enum (Custom Values) ===");
console.log(StatusCode.Success);       // 200
console.log(StatusCode.NotFound);      // 404
console.log(StatusCode.InternalError); // 500

// 3. String Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log("\n=== String Enum ===");
console.log(Color.Red);   // "RED"
console.log(Color.Green); // "GREEN"
console.log(Color.Blue);  // "BLUE"

// 4. Heterogeneous Enum (mix of string and numeric)
enum BooleanLike {
  No = 0,
  Yes = "YES"
}

console.log("\n=== Heterogeneous Enum ===");
console.log(BooleanLike.No);  // 0
console.log(BooleanLike.Yes); // "YES"

// 5. Const Enum (no runtime overhead, inlined at compile time)
const enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

console.log("\n=== Const Enum ===");
console.log(Weekday.Monday);    // 0
console.log(Weekday.Friday);    // 4

// 6. Using Enum in functions
function moveCharacter(direction: Direction): void {
  switch (direction) {
    case Direction.Up:
      console.log("Moving Up");
      break;
    case Direction.Down:
      console.log("Moving Down");
      break;
    case Direction.Left:
      console.log("Moving Left");
      break;
    case Direction.Right:
      console.log("Moving Right");
      break;
  }
}

console.log("\n=== Enum in Functions ===");
moveCharacter(Direction.Up);    // Moving Up
moveCharacter(Direction.Left);  // Moving Left

// 7. Enum as a type for variables
let myColor: Color = Color.Blue;
console.log("\n=== Enum as Type ===");
console.log(myColor); // "BLUE"

// 8. Computed Enum values
enum ComputedEnum {
  A = 1,
  B = A * 2,      // 2
  C = A + B,      // 3
  D = 2 ** 3      // 8
}

console.log("\n=== Computed Enum ===");
console.log(ComputedEnum.A); // 1
console.log(ComputedEnum.B); // 2
console.log(ComputedEnum.C); // 3
console.log(ComputedEnum.D); // 8