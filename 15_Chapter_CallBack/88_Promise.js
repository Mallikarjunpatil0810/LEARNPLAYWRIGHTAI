// Example: Ordering food using Promises

function orderFood(foodItem) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${foodItem}...`);

    // Simulate a delay (e.g., restaurant preparing food)
    setTimeout(() => {
      const isAvailable = Math.random() > 0.2; // 80% chance food is available

      if (isAvailable) {
        resolve(`${foodItem} is ready! 🍽️`);
      } else {
        reject(`Sorry, ${foodItem} is not available. 😞`);
      }
    }, 2000);
  });
}

// Using the Promise
orderFood("Pizza")
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Order process completed.");
  });

// Example with async/await
async function placeOrder() {
  try {
    const result = await orderFood("Burger");
    console.log("Async Success:", result);
  } catch (error) {
    console.log("Async Error:", error);
  } finally {
    console.log("Async order process completed.");
  }
}

placeOrder();