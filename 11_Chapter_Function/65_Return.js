// Example: Using return for status codes

function processOrder(orderId) {
  if (!orderId) {
    return { status: 400, message: "Bad Request: Order ID is required" };
  }

  if (orderId <= 0) {
    return { status: 422, message: "Unprocessable Entity: Invalid Order ID" };
  }

  // Simulate processing
  const isSuccess = orderId % 2 === 0;

  if (isSuccess) {
    return { status: 200, message: "OK: Order processed successfully", data: { orderId } };
  } else {
    return { status: 500, message: "Internal Server Error: Processing failed" };
  }
}

// Test the function
console.log(processOrder());        // { status: 400, ... }
console.log(processOrder(-5));      // { status: 422, ... }
console.log(processOrder(42));      // { status: 200, ... }
console.log(processOrder(41));      // { status: 500, ... }