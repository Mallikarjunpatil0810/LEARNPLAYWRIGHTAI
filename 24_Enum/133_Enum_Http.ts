// Enum for HTTP methods
enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  CONNECT = "CONNECT",
  TRACE = "TRACE"
}

// Example usage
function makeRequest(url: string, method: HttpMethod): void {
  console.log(`Making ${method} request to ${url}`);
}

makeRequest("https://api.example.com/users", HttpMethod.GET);
makeRequest("https://api.example.com/users", HttpMethod.POST);
makeRequest("https://api.example.com/users/1", HttpMethod.PUT);
makeRequest("https://api.example.com/users/1", HttpMethod.DELETE);