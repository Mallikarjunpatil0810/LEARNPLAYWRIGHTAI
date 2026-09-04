class TestCase {
  static totalTests = 0;
  static passedTests = 0;
  static failedTests = 0;

  static pass(message = "Test Passed") {
    TestCase.totalTests++;
    TestCase.passedTests++;
    console.log(`✅ PASS: ${message}`);
  }

  static fail(message = "Test Failed") {
    TestCase.totalTests++;
    TestCase.failedTests++;
    console.log(`❌ FAIL: ${message}`);
  }

  static assertEqual(actual, expected, message = "") {
    if (actual === expected) {
      TestCase.pass(message || `Expected "${expected}", got "${actual}"`);
    } else {
      TestCase.fail(message || `Expected "${expected}", but got "${actual}"`);
    }
  }

  static assertTrue(value, message = "") {
    if (value) {
      TestCase.pass(message || `Value is truthy`);
    } else {
      TestCase.fail(message || `Expected true, but got ${value}`);
    }
  }

  static assertFalse(value, message = "") {
    if (!value) {
      TestCase.pass(message || `Value is falsy`);
    } else {
      TestCase.fail(message || `Expected false, but got ${value}`);
    }
  }

  static summary() {
    console.log("\n========== TEST SUMMARY ==========");
    console.log(`Total Tests : ${TestCase.totalTests}`);
    console.log(`Passed      : ${TestCase.passedTests}`);
    console.log(`Failed      : ${TestCase.failedTests}`);
    console.log(`Status      : ${TestCase.failedTests === 0 ? "✅ ALL PASSED" : "❌ SOME FAILED"}`);
    console.log("==================================\n");
  }

  static reset() {
    TestCase.totalTests = 0;
    TestCase.passedTests = 0;
    TestCase.failedTests = 0;
  }
}

// ---------- Sample Test Cases ----------

// Test 1: Addition
TestCase.assertEqual(2 + 3, 5, "Addition test");

// Test 2: String equality
TestCase.assertEqual("hello", "hello", "String equality test");

// Test 3: Failing test (intentional)
TestCase.assertEqual(10, 20, "Intentional failure test");

// Test 4: Truthy check
TestCase.assertTrue(1 === 1, "Truthy check");

// Test 5: Falsy check
TestCase.assertFalse(0, "Falsy check");

// Test 6: Another pass
TestCase.pass("Custom pass test");

// Print summary
TestCase.summary();