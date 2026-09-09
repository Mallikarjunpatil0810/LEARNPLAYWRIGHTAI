// =============================
// Access Modifiers: public, private, protected
// Example: API Client
// =============================

// --- Base Class ---
class APIClient {
  public baseURL: string;        // ✅ Accessible everywhere
  private apiKey: string;        // ❌ Accessible only within this class
  protected timeout: number;     // ✅ Accessible within this class & subclasses

  constructor(baseURL: string, apiKey: string, timeout: number = 5000) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.timeout = timeout;
  }

  // Public method — accessible anywhere
  public async fetchData(endpoint: string): Promise<string> {
    this.validateEndpoint(endpoint);          // ✅ private method OK
    console.log(`⏱️ Timeout set to ${this.timeout}ms`); // ✅ protected OK here
    return this.makeRequest(endpoint);        // ✅ private method OK
  }

  // Private method — only usable inside APIClient
  private makeRequest(endpoint: string): string {
    return `✅ Data from ${this.baseURL}/${endpoint} using key ${this.maskKey()}`;
  }

  // Private helper
  private maskKey(): string {
    return this.apiKey.slice(0, 4) + '****';
  }

  // Protected method — usable inside subclasses
  protected validateEndpoint(endpoint: string): void {
    if (!endpoint) {
      throw new Error('❌ Endpoint cannot be empty');
    }
    console.log(`🔍 Validating endpoint: ${endpoint}`);
  }
}

// --- Subclass (demonstrates protected access) ---
class AuthenticatedAPIClient extends APIClient {
  constructor(baseURL: string, apiKey: string, timeout: number) {
    super(baseURL, apiKey, timeout);
  }

  public getWithAuth(endpoint: string): string {
    // ✅ Can access protected member from parent
    this.validateEndpoint(endpoint);
    console.log(`🔐 Using protected timeout: ${this.timeout}ms`);

    // ❌ Cannot access private member from parent
    // this.apiKey ❌ ERROR: Property 'apiKey' is private
    // this.makeRequest(endpoint) ❌ ERROR

    return `✅ Authenticated data from ${this.baseURL}/${endpoint}`;
  }
}

// --- Usage ---
const client = new APIClient('https://api.example.com', 'sk-secret-12345', 3000);

// ✅ Public — accessible
console.log(client.baseURL);          // 'https://api.example.com'
client.fetchData('users');            // works

// ❌ Private — inaccessible outside class
// console.log(client.apiKey);        ❌ ERROR
// client.makeRequest('users');       ❌ ERROR

// ❌ Protected — inaccessible outside class hierarchy
// console.log(client.timeout);       ❌ ERROR
// client.validateEndpoint('users');  ❌ ERROR

const authClient = new AuthenticatedAPIClient('https://api.example.com', 'sk-secret-12345', 2000);
console.log(authClient.getWithAuth('orders'));

// =============================
// Summary:
// ┌───────────┬────────────┬──────────────────────────┐
// │ Modifier  │ Class      │ Subclass   │ Outside     │
// ├───────────┼────────────┼────────────┼─────────────┤
// │ public    │ ✅ Yes     │ ✅ Yes     │ ✅ Yes      │
// │ private   │ ✅ Yes     │ ❌ No      │ ❌ No       │
// │ protected │ ✅ Yes     │ ✅ Yes     │ ❌ No       │
// └───────────┴────────────┴────────────┴─────────────┘
// =============================