// Closure function with retry example for API calls

/**
 * Creates a retry wrapper around an API function using closure.
 * @param {Function} apiFn - The API function to call
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {number} delayMs - Delay between retries in milliseconds
 * @returns {Function} - A wrapped function with retry logic
 */
function createRetryWrapper(apiFn, maxRetries = 3, delayMs = 1000) {
  let attemptCount = 0;

  // Inner function (closure) that captures apiFn, maxRetries, delayMs, and attemptCount
  return async function (...args) {
    while (attemptCount < maxRetries) {
      try {
        attemptCount++;
        console.log(`Attempt ${attemptCount} of ${maxRetries}...`);
        const result = await apiFn(...args);
        console.log(`Attempt ${attemptCount} succeeded.`);
        // Reset attempt count on success for next call
        attemptCount = 0;
        return result;
      } catch (error) {
        console.error(`Attempt ${attemptCount} failed: ${error.message}`);
        if (attemptCount >= maxRetries) {
          console.error('All retry attempts exhausted.');
          attemptCount = 0; // Reset for future calls
          throw error;
        }
        console.log(`Retrying in ${delayMs}ms...`);
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  };
}

// Example API function that simulates an unreliable API call
function createUnreliableApi(successRate = 0.5) {
  return async function (endpoint, payload) {
    console.log(`Calling API: ${endpoint} with payload:`, payload);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    if (Math.random() < successRate) {
      return { status: 200, data: { message: 'Success', endpoint, payload } };
    } else {
      throw new Error(`API call to ${endpoint} failed with status 500`);
    }
  };
}

// Usage example
(async () => {
  console.log('=== Closure Retry Example ===\n');

  // Create an unreliable API with 40% success rate
  const unreliableApi = createUnreliableApi(0.4);

  // Wrap it with retry logic (closure)
  const apiWithRetry = createRetryWrapper(unreliableApi, 5, 800);

  try {
    const response = await apiWithRetry('/api/users', { userId: 123 });
    console.log('Final response:', response);
  } catch (error) {
    console.error('Final error after all retries:', error.message);
  }

  console.log('\n=== Second call with same wrapper ===\n');

  try {
    const response2 = await apiWithRetry('/api/orders', { orderId: 456 });
    console.log('Final response:', response2);
  } catch (error) {
    console.error('Final error after all retries:', error.message);
  }
})();