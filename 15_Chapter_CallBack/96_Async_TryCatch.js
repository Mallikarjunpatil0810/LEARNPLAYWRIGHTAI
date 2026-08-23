// Async function with try-catch for testing an API
async function testAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('API test failed:', error.message);
    throw error;
  }
}

// Example usage
testAPI()
  .then(data => console.log('Success:', data))
  .catch(err => console.error('Caught error:', err.message));