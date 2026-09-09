// ============================================
// ReadOnly Concept in JavaScript/TypeScript
// ============================================

// 1. Object.freeze() - Makes object immutable (ReadOnly at runtime)
const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001"
  }
};

const readOnlyUser = Object.freeze(user);
// readOnlyUser.name = "Jane"; // ❌ Fails silently in strict mode throws error
console.log("Frozen user:", readOnlyUser);

// Note: Object.freeze() is shallow - nested objects can still be mutated
// readOnlyUser.address.city = "Boston"; // ✅ This works!

// 2. Deep freeze - Recursively freezes nested objects
function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

const deepFrozenUser = deepFreeze({
  name: "Alice",
  age: 25,
  address: { city: "Chicago", zip: "60601" }
});
// deepFrozenUser.address.city = "Detroit"; // ❌ Fails

// 3. ReadOnly using Proxy - Custom read-only behavior
function createReadOnly(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(`Accessing property: ${prop}`);
      return target[prop];
    },
    set(target, prop, value) {
      console.log(`Attempted to set ${prop} = ${value} (BLOCKED)`);
      throw new Error(`Cannot modify read-only property: ${prop}`);
    },
    deleteProperty(target, prop) {
      throw new Error(`Cannot delete read-only property: ${prop}`);
    }
  });
}

const proxyReadOnly = createReadOnly({ id: 1, title: "Secret Document" });
console.log("Proxy title:", proxyReadOnly.title);
// proxyReadOnly.title = "New Title"; // ❌ Throws error

// 4. ReadOnly with getters (no setters) - Class-based
class ReadOnlyPerson {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  // No setters - properties are read-only
}

const person = new ReadOnlyPerson("Bob", 40);
console.log("Person name:", person.name);
// person.name = "Robert"; // ❌ Fails - no setter

// 5. Practical use case: Configuration object
const APP_CONFIG = Object.freeze({
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
  MAX_RETRIES: 3,
  FEATURES: Object.freeze({
    DARK_MODE: true,
    EXPORT_PDF: false
  })
});

// APP_CONFIG.API_URL = "https://evil.com"; // ❌ Protected!

function fetchData(endpoint) {
  console.log(`Fetching from ${APP_CONFIG.API_URL}/${endpoint}`);
  console.log(`Timeout: ${APP_CONFIG.TIMEOUT}ms`);
}

fetchData("users");

// 6. Practical use case: Immutable state in Redux-like pattern
function createStore(initialState) {
  let state = deepFreeze(initialState);
  const listeners = [];

  return {
    getState: () => state,
    dispatch: (action) => {
      // Reducer returns new state (immutable update)
      const newState = reducer(state, action);
      state = deepFreeze(newState);
      listeners.forEach(fn => fn());
    },
    subscribe: (fn) => listeners.push(fn)
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

const store = createStore({ name: "Default", count: 0 });
console.log("Store state:", store.getState());
// store.getState().name = "Hacked"; // ❌ Frozen!

// 7. Practical use case: Constants / Enum pattern
const COLORS = Object.freeze({
  RED: "#FF0000",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
  WHITE: "#FFFFFF",
  BLACK: "#000000"
});

function getColorHex(colorName) {
  return COLORS[colorName.toUpperCase()] || COLORS.BLACK;
}

console.log("Red hex:", getColorHex("red"));

// 8. Practical use case: DTO / API Response wrapper
class ReadOnlyResponse {
  #data;

  constructor(responseData) {
    this.#data = deepFreeze({ ...responseData });
  }

  get data() {
    return this.#data;
  }

  toJSON() {
    return this.#data;
  }
}

const apiResponse = new ReadOnlyResponse({
  id: 101,
  title: "Post Title",
  body: "Post body content",
  userId: 1
});

console.log("API Response:", apiResponse.data);
// apiResponse.data.title = "Modified"; // ❌ Frozen!

// ============================================
// Summary of ReadOnly approaches:
// ============================================
// 1. Object.freeze()     - Runtime, shallow
// 2. deepFreeze()        - Runtime, deep
// 3. Proxy               - Runtime, customizable
// 4. Getters (no setters)- Design-time, class-based
// 5. TypeScript Readonly - Compile-time only
// ============================================