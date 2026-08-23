// Simulated Database Connection with Auth & Cache Check using Promises

class Database {
  constructor(config) {
    this.config = config;
    this.connected = false;
    this.cache = new Map();
  }

  // Authenticate with the database
  authenticate() {
    return new Promise((resolve, reject) => {
      console.log('🔐 Authenticating...');
      setTimeout(() => {
        const { username, password } = this.config;
        if (username === 'admin' && password === 'password123') {
          console.log('✅ Authentication successful');
          resolve({ token: 'auth-token-xyz', expiresIn: 3600 });
        } else {
          reject(new Error('❌ Authentication failed: Invalid credentials'));
        }
      }, 1000);
    });
  }

  // Connect to the database
  connect() {
    return new Promise((resolve, reject) => {
      console.log('🔌 Connecting to database...');
      setTimeout(() => {
        if (this.config.host && this.config.port) {
          this.connected = true;
          console.log(`✅ Connected to ${this.config.host}:${this.config.port}`);
          resolve({ status: 'connected', db: this });
        } else {
          reject(new Error('❌ Connection failed: Invalid host or port'));
        }
      }, 1500);
    });
  }

  // Check cache for existing data
  checkCache(key) {
    return new Promise((resolve) => {
      console.log(`🔍 Checking cache for key: "${key}"...`);
      setTimeout(() => {
        if (this.cache.has(key)) {
          const cachedData = this.cache.get(key);
          console.log(`✅ Cache HIT for "${key}"`);
          resolve({ hit: true, data: cachedData });
        } else {
          console.log(`❌ Cache MISS for "${key}"`);
          resolve({ hit: false, data: null });
        }
      }, 500);
    });
  }

  // Simulate fetching data from database
  fetchData(query) {
    return new Promise((resolve, reject) => {
      console.log(`📦 Fetching data for query: "${query}"...`);
      setTimeout(() => {
        if (!this.connected) {
          reject(new Error('❌ Not connected to database'));
          return;
        }
        const result = { id: Date.now(), query, result: `Result for "${query}"`, timestamp: new Date().toISOString() };
        console.log('✅ Data fetched successfully');
        resolve(result);
      }, 2000);
    });
  }

  // Store data in cache
  setCache(key, data) {
    return new Promise((resolve) => {
      console.log(`💾 Storing data in cache for key: "${key}"...`);
      setTimeout(() => {
        this.cache.set(key, data);
        console.log('✅ Cached successfully');
        resolve({ cached: true, key });
      }, 300);
    });
  }

  // Disconnect from database
  disconnect() {
    return new Promise((resolve) => {
      console.log('🔌 Disconnecting from database...');
      setTimeout(() => {
        this.connected = false;
        console.log('✅ Disconnected');
        resolve({ status: 'disconnected' });
      }, 500);
    });
  }
}

// Usage example with promise chaining
function runDatabaseDemo() {
  const dbConfig = {
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password123',
    database: 'test_db'
  };

  const db = new Database(dbConfig);
  const cacheKey = 'users:all';

  db.authenticate()
    .then((authResult) => {
      console.log(`   Token: ${authResult.token}`);
      return db.connect();
    })
    .then((connResult) => {
      console.log(`   Status: ${connResult.status}`);
      return db.checkCache(cacheKey);
    })
    .then((cacheResult) => {
      if (cacheResult.hit) {
        console.log('   Using cached data:', cacheResult.data);
        return cacheResult.data;
      } else {
        return db.fetchData('SELECT * FROM users')
          .then((data) => {
            return db.setCache(cacheKey, data).then(() => data);
          });
      }
    })
    .then((finalData) => {
      console.log('🎯 Final result:', finalData);
      return db.disconnect();
    })
    .then((disconnectResult) => {
      console.log(`   ${disconnectResult.status}`);
      console.log('🏁 Demo completed successfully');
    })
    .catch((error) => {
      console.error('💥 Error:', error.message);
    });
}

// Run the demo
runDatabaseDemo();

// Export for reuse
module.exports = { Database };