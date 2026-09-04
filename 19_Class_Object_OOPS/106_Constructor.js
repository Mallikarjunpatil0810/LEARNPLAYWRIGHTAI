// User class with constructor for login and signup
class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.isLoggedIn = false;
    }

    // Signup method
    signup() {
        if (!this.name || !this.email || !this.password) {
            return { success: false, message: "All fields are required" };
        }
        if (!this.email.includes('@')) {
            return { success: false, message: "Invalid email format" };
        }
        if (this.password.length < 6) {
            return { success: false, message: "Password must be at least 6 characters" };
        }
        // Store user in localStorage (simulating database)
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === this.email);
        if (existingUser) {
            return { success: false, message: "Email already registered" };
        }
        users.push({ name: this.name, email: this.email, password: this.password });
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: "Signup successful" };
    }

    // Login method
    login(email, password) {
        if (!email || !password) {
            return { success: false, message: "Email and password are required" };
        }
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            return { success: false, message: "Invalid email or password" };
        }
        this.isLoggedIn = true;
        this.name = user.name;
        this.email = user.email;
        return { success: true, message: "Login successful" };
    }

    // Logout method
    logout() {
        this.isLoggedIn = false;
        return { success: true, message: "Logged out successfully" };
    }
}

// Test cases for Signup
function testSignup() {
    console.log("=== Signup Tests ===");

    // Test 1: Successful signup
    const user1 = new User("John Doe", "john@example.com", "password123");
    const result1 = user1.signup();
    console.log("Test 1 - Successful signup:", result1.success ? "PASS" : "FAIL");
    console.log("  Result:", result1.message);

    // Test 2: Missing fields
    const user2 = new User("", "test@example.com", "pass123");
    const result2 = user2.signup();
    console.log("Test 2 - Missing name:", result2.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result2.message);

    // Test 3: Invalid email
    const user3 = new User("Jane Doe", "invalid-email", "password123");
    const result3 = user3.signup();
    console.log("Test 3 - Invalid email:", result3.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result3.message);

    // Test 4: Short password
    const user4 = new User("Bob", "bob@example.com", "12345");
    const result4 = user4.signup();
    console.log("Test 4 - Short password:", result4.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result4.message);

    // Test 5: Duplicate email
    const user5 = new User("John Doe Again", "john@example.com", "anotherpass");
    const result5 = user5.signup();
    console.log("Test 5 - Duplicate email:", result5.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result5.message);
}

// Test cases for Login
function testLogin() {
    console.log("\n=== Login Tests ===");

    // Test 1: Successful login
    const user1 = new User();
    const result1 = user1.login("john@example.com", "password123");
    console.log("Test 1 - Successful login:", result1.success ? "PASS" : "FAIL");
    console.log("  Result:", result1.message);
    console.log("  Is logged in:", user1.isLoggedIn);

    // Test 2: Missing credentials
    const user2 = new User();
    const result2 = user2.login("", "");
    console.log("Test 2 - Missing credentials:", result2.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result2.message);

    // Test 3: Wrong password
    const user3 = new User();
    const result3 = user3.login("john@example.com", "wrongpassword");
    console.log("Test 3 - Wrong password:", result3.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result3.message);

    // Test 4: Non-existent user
    const user4 = new User();
    const result4 = user4.login("nonexistent@example.com", "password123");
    console.log("Test 4 - Non-existent user:", result4.success === false ? "PASS" : "FAIL");
    console.log("  Result:", result4.message);

    // Test 5: Logout after login
    const user5 = new User();
    user5.login("john@example.com", "password123");
    const logoutResult = user5.logout();
    console.log("Test 5 - Logout:", logoutResult.success ? "PASS" : "FAIL");
    console.log("  Result:", logoutResult.message);
    console.log("  Is logged in after logout:", !user5.isLoggedIn);
}

// Run all tests
function runAllTests() {
    // Clear localStorage before tests
    localStorage.clear();
    testSignup();
    testLogin();
}

runAllTests();