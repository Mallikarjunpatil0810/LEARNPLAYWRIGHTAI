// Promise example with API connection

// Simulated API call using Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for user ${userId}...`);

    // Simulate network delay
    setTimeout(() => {
      // Simulate successful API response
      const success = true; // Change to false to test rejection

      if (success) {
        const userData = {
          id: userId,
          name: "John Doe",
          email: "john.doe@example.com",
          age: 30,
        };
        resolve(userData);
      } else {
        reject(new Error(`Failed to fetch data for user ${userId}`));
      }
    }, 2000);
  });
}

// Using the Promise
console.log("Starting API call...");

fetchUserData(101)
  .then((user) => {
    console.log("User data received:", user);
    return user.email;
  })
  .then((email) => {
    console.log("User email:", email);
  })
  .catch((error) => {
    console.error("API Error:", error.message);
  })
  .finally(() => {
    console.log("API call completed.");
  });

console.log("Promise is pending... (this runs before the API response)");