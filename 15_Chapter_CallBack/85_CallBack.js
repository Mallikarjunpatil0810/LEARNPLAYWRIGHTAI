// Order Placed Example using Callback Functions

function placeOrder(orderId, callback) {
    console.log(`Placing order #${orderId}...`);
    setTimeout(() => {
        console.log(`Order #${orderId} placed successfully.`);
        callback(orderId);
    }, 2000);
}

function processPayment(orderId, callback) {
    console.log(`Processing payment for order #${orderId}...`);
    setTimeout(() => {
        console.log(`Payment for order #${orderId} completed.`);
        callback(orderId);
    }, 2000);
}

function shipOrder(orderId, callback) {
    console.log(`Shipping order #${orderId}...`);
    setTimeout(() => {
        console.log(`Order #${orderId} shipped successfully.`);
        callback(orderId);
    }, 2000);
}

function sendConfirmation(orderId) {
    console.log(`Confirmation email sent for order #${orderId}.`);
    console.log(`Order #${orderId} process completed!`);
}

// Execute the order process using callbacks (Callback Hell example)
placeOrder(101, (orderId) => {
    processPayment(orderId, (orderId) => {
        shipOrder(orderId, (orderId) => {
            sendConfirmation(orderId);
        });
    });
});