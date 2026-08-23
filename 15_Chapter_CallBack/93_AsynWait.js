// Asynchronous wait function
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Example usage
async function demo() {
  console.log("Waiting for 2 seconds...");
  await wait(2000);
  console.log("Done waiting!");
}

demo();