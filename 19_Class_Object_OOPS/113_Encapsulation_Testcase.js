// ============================================
// Encapsulation Example with Test Cases
// ============================================

class BankAccount {
  // Private fields (encapsulation)
  #accountNumber;
  #balance;
  #transactionHistory;

  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#transactionHistory = [];
    this.#logTransaction('Account created', initialBalance);
  }

  // Public getter for balance (read-only access)
  getBalance() {
    return this.#balance;
  }

  // Public getter for account number (read-only)
  getAccountNumber() {
    return this.#accountNumber;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount <= 0) {
      throw new Error('Deposit amount must be positive');
    }
    this.#balance += amount;
    this.#logTransaction('Deposit', amount);
    return this.#balance;
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error('Withdrawal amount must be positive');
    }
    if (amount > this.#balance) {
      throw new Error('Insufficient balance');
    }
    this.#balance -= amount;
    this.#logTransaction('Withdrawal', amount);
    return this.#balance;
  }

  // Public method to get transaction history (returns a copy to prevent mutation)
  getTransactionHistory() {
    return [...this.#transactionHistory];
  }

  // Private method (encapsulated)
  #logTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      balanceAfter: this.#balance,
      timestamp: new Date().toISOString()
    });
  }
}

// ============================================
// Test Cases Runner
// ============================================

class TestRunner {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.tests = [];
  }

  addTest(name, testFn) {
    this.tests.push({ name, testFn });
  }

  run() {
    console.log('='.repeat(60));
    console.log('  ENCAPSULATION TEST CASES');
    console.log('='.repeat(60));
    console.log();

    for (const { name, testFn } of this.tests) {
      try {
        testFn();
        console.log(`  ✅ PASS: ${name}`);
        this.passed++;
      } catch (error) {
        console.log(`  ❌ FAIL: ${name}`);
        console.log(`     Error: ${error.message}`);
        this.failed++;
      }
    }

    console.log();
    console.log('='.repeat(60));
    console.log(`  RESULTS: ${this.passed} passed, ${this.failed} failed`);
    console.log('='.repeat(60));
  }
}

// ============================================
// Define Test Cases
// ============================================

const runner = new TestRunner();

// Test 1: Account creation with initial balance
runner.addTest('Account creation sets initial balance correctly', () => {
  const account = new BankAccount('ACC-001', 1000);
  if (account.getBalance() !== 1000) {
    throw new Error(`Expected balance 1000, got ${account.getBalance()}`);
  }
  if (account.getAccountNumber() !== 'ACC-001') {
    throw new Error(`Expected account number ACC-001, got ${account.getAccountNumber()}`);
  }
});

// Test 2: Default initial balance is 0
runner.addTest('Default initial balance is 0', () => {
  const account = new BankAccount('ACC-002');
  if (account.getBalance() !== 0) {
    throw new Error(`Expected balance 0, got ${account.getBalance()}`);
  }
});

// Test 3: Deposit increases balance
runner.addTest('Deposit increases balance correctly', () => {
  const account = new BankAccount('ACC-003', 500);
  const newBalance = account.deposit(200);
  if (newBalance !== 700) {
    throw new Error(`Expected balance 700, got ${newBalance}`);
  }
  if (account.getBalance() !== 700) {
    throw new Error(`Expected getBalance() 700, got ${account.getBalance()}`);
  }
});

// Test 4: Withdraw decreases balance
runner.addTest('Withdraw decreases balance correctly', () => {
  const account = new BankAccount('ACC-004', 1000);
  const newBalance = account.withdraw(300);
  if (newBalance !== 700) {
    throw new Error(`Expected balance 700, got ${newBalance}`);
  }
  if (account.getBalance() !== 700) {
    throw new Error(`Expected getBalance() 700, got ${account.getBalance()}`);
  }
});

// Test 5: Cannot withdraw more than balance
runner.addTest('Throws error when withdrawing more than balance', () => {
  const account = new BankAccount('ACC-005', 100);
  let errorThrown = false;
  try {
    account.withdraw(200);
  } catch (e) {
    errorThrown = true;
    if (e.message !== 'Insufficient balance') {
      throw new Error(`Expected "Insufficient balance", got "${e.message}"`);
    }
  }
  if (!errorThrown) {
    throw new Error('Expected error was not thrown');
  }
});

// Test 6: Cannot deposit negative amount
runner.addTest('Throws error when depositing negative amount', () => {
  const account = new BankAccount('ACC-006', 500);
  let errorThrown = false;
  try {
    account.deposit(-50);
  } catch (e) {
    errorThrown = true;
    if (e.message !== 'Deposit amount must be positive') {
      throw new Error(`Expected "Deposit amount must be positive", got "${e.message}"`);
    }
  }
  if (!errorThrown) {
    throw new Error('Expected error was not thrown');
  }
});

// Test 7: Cannot withdraw negative amount
runner.addTest('Throws error when withdrawing negative amount', () => {
  const account = new BankAccount('ACC-007', 500);
  let errorThrown = false;
  try {
    account.withdraw(-100);
  } catch (e) {
    errorThrown = true;
    if (e.message !== 'Withdrawal amount must be positive') {
      throw new Error(`Expected "Withdrawal amount must be positive", got "${e.message}"`);
    }
  }
  if (!errorThrown) {
    throw new Error('Expected error was not thrown');
  }
});

// Test 8: Encapsulation - private fields are not accessible from outside
runner.addTest('Private fields are truly encapsulated (undefined from outside)', () => {
  const account = new BankAccount('ACC-008', 500);
  // Verify that the balance can ONLY be accessed via getter
  if (account.balance !== undefined) {
    throw new Error('balance property should not be directly accessible');
  }
});

// Test 9: Transaction history returns a copy (immutability)
runner.addTest('Transaction history returns a copy, not the original', () => {
  const account = new BankAccount('ACC-009', 1000);
  account.deposit(500);
  const history = account.getTransactionHistory();
  history.push({ type: 'Hacked', amount: 9999, balanceAfter: 9999, timestamp: 'fake' });
  const historyAfter = account.getTransactionHistory();
  if (historyAfter.length !== 2) {
    throw new Error(`Expected history length 2, got ${historyAfter.length} - mutation was possible`);
  }
});

// Test 10: Multiple transactions track correctly
runner.addTest('Multiple transactions track balance correctly', () => {
  const account = new BankAccount('ACC-010', 1000);
  account.deposit(500);
  account.withdraw(200);
  account.deposit(300);
  account.withdraw(100);
  // Expected: 1000 + 500 - 200 + 300 - 100 = 1500
  if (account.getBalance() !== 1500) {
    throw new Error(`Expected balance 1500, got ${account.getBalance()}`);
  }
  const history = account.getTransactionHistory();
  // 1 creation + 4 transactions = 5 entries
  if (history.length !== 5) {
    throw new Error(`Expected 5 history entries, got ${history.length}`);
  }
});

// ============================================
// Run All Tests
// ============================================

runner.run();