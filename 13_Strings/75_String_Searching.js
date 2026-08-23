// String Searching and Checking using Staging URL
// Demonstrates various string methods for searching within URLs

const stagingURL = "https://staging.example.com/api/v2/users?page=1&limit=10";

console.log("=== String Searching & Checking ===");
console.log("Staging URL:", stagingURL);
console.log("");

// 1. indexOf() - Find position of a substring
const apiIndex = stagingURL.indexOf("/api");
console.log("1. indexOf('/api'):", apiIndex); // Position where '/api' starts

const pageIndex = stagingURL.indexOf("page");
console.log("   indexOf('page'):", pageIndex);

const notFound = stagingURL.indexOf("admin");
console.log("   indexOf('admin') [not found]:", notFound); // -1

// 2. lastIndexOf() - Find last occurrence
const lastSlash = stagingURL.lastIndexOf("/");
console.log("2. lastIndexOf('/'):", lastSlash);

// 3. includes() - Check if substring exists (boolean)
const hasApi = stagingURL.includes("/api");
console.log("3. includes('/api'):", hasApi); // true

const hasHttps = stagingURL.includes("https");
console.log("   includes('https'):", hasHttps); // true

const hasProduction = stagingURL.includes("production");
console.log("   includes('production'):", hasProduction); // false

// 4. startsWith() - Check if string starts with a value
const startsWithHttps = stagingURL.startsWith("https");
console.log("4. startsWith('https'):", startsWithHttps); // true

const isStaging = stagingURL.startsWith("https://staging");
console.log("   startsWith('https://staging'):", isStaging); // true

// 5. endsWith() - Check if string ends with a value
const endsWithSlash = stagingURL.endsWith("/");
console.log("5. endsWith('/'):", endsWithSlash); // false

const endsWith10 = stagingURL.endsWith("10");
console.log("   endsWith('10'):", endsWith10); // true

// 6. search() - Search using regex pattern
const digitPattern = stagingURL.search(/[0-9]{2}/);
console.log("6. search(/[0-9]{2}/):", digitPattern); // First occurrence of two consecutive digits

const versionMatch = stagingURL.search(/v[0-9]/);
console.log("   search(/v[0-9]/):", versionMatch); // Position of 'v2'

// 7. match() - Extract matches using regex
const queryParams = stagingURL.match(/[?&]([^=]+)=([^&]+)/g);
console.log("7. match() query params:", queryParams);

const numbers = stagingURL.match(/[0-9]+/g);
console.log("   match() numbers:", numbers); // ['2', '1', '10']

// 8. Practical: Validate staging URL components
function validateStagingURL(url) {
    const checks = {
        isHttps: url.startsWith("https"),
        isStaging: url.includes("staging"),
        hasApiEndpoint: url.includes("/api"),
        hasVersion: /v[0-9]/.test(url),
        hasQueryParams: url.includes("?"),
        validDomain: url.includes(".com") || url.includes(".net") || url.includes(".org")
    };
    return checks;
}

console.log("8. URL Validation:", validateStagingURL(stagingURL));

// 9. Extract subdomain from staging URL
function extractSubdomain(url) {
    const match = url.match(/https?:\/\/([^.]+)/);
    return match ? match[1] : null;
}

console.log("9. Subdomain:", extractSubdomain(stagingURL)); // "staging"

// 10. Check if URL contains specific environment
function checkEnvironment(url) {
    if (url.includes("staging")) return "Staging";
    if (url.includes("dev") || url.includes("development")) return "Development";
    if (url.includes("localhost") || url.includes("127.0.0.1")) return "Local";
    if (url.includes("prod") || url.includes("production") || !url.includes("staging")) return "Production";
    return "Unknown";
}

console.log("10. Environment:", checkEnvironment(stagingURL)); // "Staging"

// 11. Practical: Search for specific path segments
const pathSegments = stagingURL.split("/");
console.log("11. Path segments:", pathSegments);

const apiVersionSegment = pathSegments.find(seg => /v[0-9]/.test(seg));
console.log("    API version segment:", apiVersionSegment); // "v2"

// 12. Count occurrences of a character
function countChar(str, char) {
    let count = 0;
    let pos = str.indexOf(char);
    while (pos !== -1) {
        count++;
        pos = str.indexOf(char, pos + 1);
    }
    return count;
}

console.log("12. Count of '/' in URL:", countChar(stagingURL, "/"));
console.log("    Count of '&' in URL:", countChar(stagingURL, "&"));

// 13. Using slice() with indexOf for extraction
const domainStart = stagingURL.indexOf("://") + 3;
const domainEnd = stagingURL.indexOf("/", domainStart);
const domain = stagingURL.slice(domainStart, domainEnd);
console.log("13. Extracted domain:", domain); // "staging.example.com"

// 14. Check for multiple conditions
const isWellFormed = 
    stagingURL.startsWith("https") &&
    stagingURL.includes(".") &&
    stagingURL.includes("/") &&
    !stagingURL.includes(" ") &&
    stagingURL.length > 10;

console.log("14. Is well-formed URL?:", isWellFormed); // true