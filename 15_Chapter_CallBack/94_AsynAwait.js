// Real-time Project Example: E-Commerce Order Processing System
// Demonstrates async/await with API calls, database operations, and notifications

// Simulated Database
const database = {
    users: [
        { id: 1, name: "John Doe", email: "john@example.com", balance: 500 },
        { id: 2, name: "Jane Smith", email: "jane@example.com", balance: 1200 }
    ],
    products: [
        { id: 101, name: "Laptop", price: 800, stock: 10 },
        { id: 102, name: "Mouse", price: 25, stock: 50 },
        { id: 103, name: "Keyboard", price: 45, stock: 30 }
    ],
    orders: []
};

// Helper function to simulate delay (like real API/database calls)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Fetch user from database (async operation)
async function fetchUser(userId) {
    await delay(500); // Simulate network/database latency
    const user = database.users.find(u => u.id === userId);
    if (!user) throw new Error(`User with ID ${userId} not found`);
    console.log(`✓ User fetched: ${user.name}`);
    return user;
}

// 2. Fetch product from database (async operation)
async function fetchProduct(productId) {
    await delay(400);
    const product = database.products.find(p => p.id === productId);
    if (!product) throw new Error(`Product with ID ${productId} not found`);
    console.log(`✓ Product fetched: ${product.name} - $${product.price}`);
    return product;
}

// 3. Check stock availability (async operation)
async function checkStock(product, quantity) {
    await delay(300);
    if (product.stock < quantity) {
        throw new Error(`Insufficient stock for ${product.name}. Available: ${product.stock}, Requested: ${quantity}`);
    }
    console.log(`✓ Stock available: ${quantity} x ${product.name}`);
    return true;
}

// 4. Process payment (async operation)
async function processPayment(user, totalAmount) {
    await delay(600);
    if (user.balance < totalAmount) {
        throw new Error(`Insufficient balance. Available: $${user.balance}, Required: $${totalAmount}`);
    }
    user.balance -= totalAmount;
    console.log(`✓ Payment processed: $${totalAmount} deducted from ${user.name}`);
    return { transactionId: `TXN${Date.now()}`, amount: totalAmount };
}

// 5. Update inventory (async operation)
async function updateInventory(product, quantity) {
    await delay(350);
    product.stock -= quantity;
    console.log(`✓ Inventory updated: ${product.name} stock now ${product.stock}`);
    return product.stock;
}

// 6. Send order confirmation email (async operation)
async function sendConfirmationEmail(user, orderDetails) {
    await delay(700);
    console.log(`✓ Email sent to ${user.email}: Order #${orderDetails.orderId} confirmed`);
    return { sent: true, to: user.email, orderId: orderDetails.orderId };
}

// 7. Main order processing function using async/await
async function placeOrder(userId, productId, quantity) {
    console.log(`\n🚀 Starting order processing for User #${userId}...\n`);
    
    try {
        // Sequential async operations (each waits for previous to complete)
        const user = await fetchUser(userId);
        const product = await fetchProduct(productId);
        
        // Parallel async operations (both run simultaneously)
        const [stockResult, paymentResult] = await Promise.all([
            checkStock(product, quantity),
            processPayment(user, product.price * quantity)
        ]);
        
        // Update inventory after payment succeeds
        const updatedStock = await updateInventory(product, quantity);
        
        // Create order record
        const order = {
            orderId: `ORD${Date.now()}`,
            userId: user.id,
            productId: product.id,
            quantity: quantity,
            total: product.price * quantity,
            transactionId: paymentResult.transactionId,
            status: "confirmed",
            timestamp: new Date().toISOString()
        };
        database.orders.push(order);
        
        // Send confirmation
        const emailResult = await sendConfirmationEmail(user, order);
        
        console.log(`\n✅ Order completed successfully!`);
        console.log(`   Order ID: ${order.orderId}`);
        console.log(`   Product: ${product.name} x ${quantity}`);
        console.log(`   Total: $${order.total}`);
        console.log(`   Status: ${order.status}`);
        
        return order;
        
    } catch (error) {
        console.error(`\n❌ Order failed: ${error.message}`);
        throw error;
    }
}

// 8. Demonstrate the async/await flow with error handling
async function runDemo() {
    console.log("=".repeat(50));
    console.log("E-COMMERCE ORDER PROCESSING DEMO");
    console.log("=".repeat(50));
    
    try {
        // Successful order
        const order1 = await placeOrder(1, 101, 1);
        console.log(`\n📦 Final order:`, JSON.stringify(order1, null, 2));
        
        // Another successful order
        const order2 = await placeOrder(2, 102, 3);
        console.log(`\n📦 Final order:`, JSON.stringify(order2, null, 2));
        
        // This will fail (insufficient stock)
        // await placeOrder(1, 101, 100);
        
    } catch (error) {
        console.error(`\n💥 Demo failed: ${error.message}`);
    }
    
    console.log("\n" + "=".repeat(50));
    console.log("FINAL DATABASE STATE:");
    console.log("=".repeat(50));
    console.log("Users:", JSON.stringify(database.users, null, 2));
    console.log("\nProducts:", JSON.stringify(database.products, null, 2));
    console.log("\nOrders:", JSON.stringify(database.orders, null, 2));
}

// Execute the demo
runDemo();