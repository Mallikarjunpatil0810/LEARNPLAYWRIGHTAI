// Example using Promise.race()
// Promise.race() returns a promise that resolves or rejects as soon as
// one of the promises in the iterable resolves or rejects.

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 resolved after 2 seconds"), 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2 resolved after 1 second"), 1000);
});

const promise3 = new Promise((_, reject) => {
  setTimeout(() => reject("Promise 3 rejected after 500ms"), 500);
});

// Race between promise1 and promise2 — promise2 should win (faster resolve)
Promise.race([promise1, promise2])
  .then((result) => {
    console.log("Race winner (resolve):", result);
  })
  .catch((error) => {
    console.log("Race error:", error);
  });

// Race between promise1, promise2, and promise3 — promise3 should win (fastest reject)
Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("Race winner:", result);
  })
  .catch((error) => {
    console.log("Race error (rejection wins):", error);
  });

// Practical example: timeout wrapper using Promise.race()
function fetchWithTimeout(url, timeoutMs) {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error(`Request timed out after ${timeoutMs}ms`)), timeoutMs)
  );
  return Promise.race([fetchPromise, timeoutPromise]);
}

// Uncomment to test the timeout wrapper:
// fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 3000)
//   .then((response) => response.json())
//   .then((data) => console.log("Fetched data:", data))
//   .catch((error) => console.error("Error:", error.message));