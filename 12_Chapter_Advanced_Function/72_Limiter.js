// Rate Limiter using Token Bucket algorithm
class Limiter {
  constructor(maxTokens, refillRate, refillInterval) {
    this.maxTokens = maxTokens;
    this.tokens = maxTokens;
    this.refillRate = refillRate;
    this.refillInterval = refillInterval;
    this.lastRefillTime = Date.now();
  }

  refill() {
    const now = Date.now();
    const elapsed = now - this.lastRefillTime;
    if (elapsed >= this.refillInterval) {
      const tokensToAdd = Math.floor(elapsed / this.refillInterval) * this.refillRate;
      this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
      this.lastRefillTime = now;
    }
  }

  tryConsume(tokens = 1) {
    this.refill();
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    return false;
  }

  async waitAndConsume(tokens = 1) {
    while (!this.tryConsume(tokens)) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

// Example usage
async function main() {
  const limiter = new Limiter(5, 1, 1000); // max 5 tokens, refill 1 per second

  console.log('Testing rate limiter...');

  for (let i = 0; i < 10; i++) {
    if (limiter.tryConsume()) {
      console.log(`Request ${i + 1}: Allowed`);
    } else {
      console.log(`Request ${i + 1}: Rate limited`);
    }
  }

  console.log('\nWaiting for tokens to refill...');
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('\nTrying again with wait:');
  for (let i = 0; i < 3; i++) {
    await limiter.waitAndConsume();
    console.log(`Request ${i + 1}: Executed after waiting`);
  }
}

main().catch(console.error);