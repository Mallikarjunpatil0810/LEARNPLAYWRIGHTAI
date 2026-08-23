// Sequential Run - Real-time program using synchronous functions

function step1() {
  console.log("Step 1: Initializing system...");
  return "System initialized";
}

function step2(input) {
  console.log("Step 2: Processing data...");
  return input + " -> Data processed";
}

function step3(input) {
  console.log("Step 3: Validating results...");
  return input + " -> Validation complete";
}

function step4(input) {
  console.log("Step 4: Generating output...");
  return input + " -> Output generated";
}

function runSequentially() {
  console.log("=== Sequential Run Started ===\n");

  const result1 = step1();
  const result2 = step2(result1);
  const result3 = step3(result2);
  const result4 = step4(result3);

  console.log("\n=== Final Result ===");
  console.log(result4);
  console.log("=== Sequential Run Completed ===");
}

// Execute the sequential program
runSequentially();