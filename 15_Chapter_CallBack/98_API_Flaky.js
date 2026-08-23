/**
 * Simulates a flaky API that randomly succeeds or fails.
 * Useful for testing retry logic and error handling.
 *
 * @param {object} options - Configuration options
 * @param {number} [options.failureRate=0.3] - Probability of failure (0 to 1)
 * @param {number} [options.minDelay=100] - Minimum response delay in ms
 * @param {number} [options.maxDelay=1000] - Maximum response delay in ms
 * @param {any} [options.successData={ message: 'Success' }] - Data returned on success
 * @param {string} [options.errorMessage='Internal Server Error'] - Error message on failure
 * @returns {Promise<any>} - Resolves with successData or rejects with an error
 */
function flakyAPI(options = {}) {
  const {
    failureRate = 0.3,
    minDelay = 100,
    maxDelay = 1000,
    successData = { message: 'Success' },
    errorMessage = 'Internal Server Error',
  } = options;

  const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > failureRate) {
        resolve(successData);
      } else {
        reject(new Error(errorMessage));
      }
    }, delay);
  });
}

module.exports = { flakyAPI };