// ============================================
// Generic Class - API Response Example
// ============================================

// Generic class to handle API responses
class ApiResponse<T> {
  public statusCode: number;
  public message: string;
  public data: T;
  public timestamp: Date;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.timestamp = new Date();
  }

  // Check if response is successful (2xx status)
  isSuccess(): boolean {
    return this.statusCode >= 200 && this.statusCode < 300;
  }

  // Return formatted response
  getResponse(): { status: string; message: string; data: T; timestamp: Date } {
    return {
      status: this.isSuccess() ? "success" : "error",
      message: this.message,
      data: this.data,
      timestamp: this.timestamp,
    };
  }
}

// ---- Example Usage ----

// 1. User API Response
interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse = new ApiResponse<User>(200, "User fetched successfully", {
  id: 1,
  name: "Mallikarjun",
  email: "malli@example.com",
});

console.log("User API Response:");
console.log(userResponse.getResponse());
console.log("Success:", userResponse.isSuccess());

// 2. Product List API Response
interface Product {
  id: number;
  title: string;
  price: number;
}

const productResponse = new ApiResponse<Product[]>(
  200,
  "Products fetched successfully",
  [
    { id: 1, title: "Laptop", price: 999.99 },
    { id: 2, title: "Mouse", price: 19.99 },
  ]
);

console.log("\nProduct List API Response:");
console.log(productResponse.getResponse());

// 3. Error API Response with string message
const errorResponse = new ApiResponse<string>(
  404,
  "Resource not found",
  "The requested user does not exist"
);

console.log("\nError API Response:");
console.log(errorResponse.getResponse());
console.log("Success:", errorResponse.isSuccess());
