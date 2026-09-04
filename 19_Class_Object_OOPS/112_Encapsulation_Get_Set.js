// Encapsulation using getter and setter methods

class BankAccount {
  constructor(accountHolder, initialBalance = 0) {
    this._accountHolder = accountHolder;
    this._balance = initialBalance;
    this._transactionHistory = [];
  }

  get accountHolder() {
    return this._accountHolder;
  }

  set accountHolder(name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('Account holder name must be a non-empty string');
    }
    this._accountHolder = name.trim();
  }

  get balance() {
    return this._balance;
  }

  get transactionHistory() {
    return [...this._transactionHistory];
  }

  deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Deposit amount must be a positive number');
    }
    this._balance += amount;
    this._transactionHistory.push({
      type: 'Deposit',
      amount,
      balanceAfter: this._balance,
      timestamp: new Date()
    });
    console.log(`Deposited $${amount}. New balance: $${this._balance}`);
  }

  withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Withdrawal amount must be a positive number');
    }
    if (amount > this._balance) {
      throw new Error('Insufficient funds');
    }
    this._balance -= amount;
    this._transactionHistory.push({
      type: 'Withdrawal',
      amount,
      balanceAfter: this._balance,
      timestamp: new Date()
    });
    console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
  }
}

try {
  const myAccount = new BankAccount('Alice Johnson', 1000);

  console.log(`Account Holder: ${myAccount.accountHolder}`);
  console.log(`Initial Balance: $${myAccount.balance}`);

  myAccount.accountHolder = 'Alice Smith';
  console.log(`Updated Account Holder: ${myAccount.accountHolder}`);

  myAccount.deposit(500);
  myAccount.withdraw(200);

  console.log('Transaction History:', myAccount.transactionHistory);

} catch (error) {
  console.error('Error:', error.message);
}

class Temperature {
  constructor(celsius = 0) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9 / 5) + 32;
  }

  set fahrenheit(value) {
    if (typeof value !== 'number') {
      throw new Error('Temperature must be a number');
    }
    this._celsius = (value - 32) * 5 / 9;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (typeof value !== 'number') {
      throw new Error('Temperature must be a number');
    }
    this._celsius = value;
  }
}

console.log('\n--- Temperature Example ---');
const temp = new Temperature(25);
console.log(`Celsius: ${temp.celsius}°C`);
console.log(`Fahrenheit: ${temp.fahrenheit}°F`);

temp.fahrenheit = 98.6;
console.log(`After setting to 98.6°F:`);
console.log(`Celsius: ${temp.celsius.toFixed(1)}°C`);
console.log(`Fahrenheit: ${temp.fahrenheit}°F`);