// Example: Private & Public in JavaScript Classes

class BankAccount {
  // Public field
  accountHolder;

  // Private fields (using #)
  #balance;
  #transactions = [];

  constructor(holder, initialDeposit) {
    this.accountHolder = holder;
    this.#balance = initialDeposit;
    this.#logTransaction('Account created', initialDeposit);
  }

  // Public method
  deposit(amount) {
    if (amount <= 0) {
      console.log('Deposit amount must be positive');
      return;
    }
    this.#balance += amount;
    this.#logTransaction('Deposit', amount);
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }

  // Public method
  withdraw(amount) {
    if (amount <= 0) {
      console.log('Withdrawal amount must be positive');
      return;
    }
    if (amount > this.#balance) {
      console.log('Insufficient funds');
      return;
    }
    this.#balance -= amount;
    this.#logTransaction('Withdrawal', amount);
    console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
  }

  // Public getter (controlled access to private data)
  getBalance() {
    return this.#balance;
  }

  // Private method
  #logTransaction(type, amount) {
    this.#transactions.push({
      type,
      amount,
      date: new Date().toISOString(),
      balanceAfter: this.#balance
    });
  }

  // Public method that uses private data
  showTransactionHistory() {
    console.log(`\nTransaction History for ${this.accountHolder}:`);
    for (const tx of this.#transactions) {
      console.log(`  [${tx.date}] ${tx.type}: $${tx.amount} (Balance: $${tx.balanceAfter})`);
    }
  }
}

// --- Usage ---
const account = new BankAccount('Alice', 1000);

account.deposit(500);
account.withdraw(200);
account.deposit(100);

console.log(`\nFinal balance: $${account.getBalance()}`);
account.showTransactionHistory();

// These would fail (private fields are not accessible outside):
// console.log(account.#balance);        // SyntaxError
// account.#logTransaction('Test', 0);   // SyntaxError