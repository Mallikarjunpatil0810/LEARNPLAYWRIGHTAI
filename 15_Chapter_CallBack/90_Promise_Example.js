const { chromium } = require('playwright');

// Promise function to open browser and handle credentials
function launchBrowserAndLogin(username, password) {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto('https://example.com/login');

      // Fill credentials
      await page.fill('#username', username);
      await page.fill('#password', password);
      await page.click('#login-button');

      // Wait for navigation after login
      await page.waitForURL('**/dashboard');

      console.log('Login successful!');
      resolve({ browser, page, context });
    } catch (error) {
      reject(error);
    }
  });
}

// Usage example
launchBrowserAndLogin('testuser', 'testpass123')
  .then(({ browser, page, context }) => {
    console.log('Browser is open and logged in.');
    // Perform further actions...
    // await browser.close();
  })
  .catch((error) => {
    console.error('Failed to launch browser or login:', error);
  });