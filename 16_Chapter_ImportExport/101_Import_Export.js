// ============================================================
// 16_Chapter_ImportExport / 101_Import_Export.js
// Real-world scenario: Playwright test utilities with ES6 modules
// ============================================================

// ---------- lib/config.js (exported configuration) ----------
export const BASE_URL = 'https://example.com';
export const TIMEOUT = 30000;
export const BROWSER_OPTIONS = {
  headless: true,
  slowMo: 50,
};

// ---------- lib/selectors.js (exported selectors) ----------
export const LOGIN_SELECTORS = {
  usernameInput: '#username',
  passwordInput: '#password',
  loginButton: 'button[type="submit"]',
  errorMessage: '.error-message',
};

export const DASHBOARD_SELECTORS = {
  welcomeHeader: 'h1.welcome',
  userAvatar: '.user-avatar',
  logoutButton: '#logout',
};

// ---------- lib/helpers.js (exported utility functions) ----------
export async function waitForPageLoad(page, timeout = TIMEOUT) {
  await page.waitForLoadState('networkidle', { timeout });
  console.log(`[Helper] Page loaded within ${timeout}ms`);
}

export async function takeScreenshot(page, name) {
  const path = `./screenshots/${name}_${Date.now()}.png`;
  await page.screenshot({ path, fullPage: true });
  console.log(`[Helper] Screenshot saved: ${path}`);
  return path;
}

export function generateRandomEmail(domain = 'test.com') {
  const id = Math.random().toString(36).substring(2, 10);
  return `user_${id}@${domain}`;
}

// ---------- lib/login.js (exported login flow) ----------
export async function login(page, username, password) {
  await page.goto(`${BASE_URL}/login`);
  await page.fill(LOGIN_SELECTORS.usernameInput, username);
  await page.fill(LOGIN_SELECTORS.passwordInput, password);
  await page.click(LOGIN_SELECTORS.loginButton);
  await waitForPageLoad(page);
  console.log(`[Login] User "${username}" logged in successfully`);
}

export async function logout(page) {
  await page.click(DASHBOARD_SELECTORS.logoutButton);
  await waitForPageLoad(page);
  console.log('[Logout] User logged out');
}

// ---------- lib/validators.js (exported assertion helpers) ----------
export async function expectElementVisible(page, selector) {
  const element = page.locator(selector);
  await element.waitFor({ state: 'visible', timeout: 5000 });
  console.log(`[Validator] Element "${selector}" is visible`);
  return element;
}

export async function expectTextMatch(page, selector, expectedText) {
  const element = await expectElementVisible(page, selector);
  const actualText = await element.textContent();
  if (actualText.trim() !== expectedText.trim()) {
    throw new Error(
      `Text mismatch: expected "${expectedText}", got "${actualText}"`
    );
  }
  console.log(`[Validator] Text matches: "${expectedText}"`);
}

// ---------- Default export: a test runner class ----------
export default class TestRunner {
  constructor(browser) {
    this.browser = browser;
    this.context = null;
    this.page = null;
  }

  async setup() {
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    console.log('[TestRunner] Browser context & page created');
  }

  async teardown() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    console.log('[TestRunner] Cleanup complete');
  }

  async runTest(testFn) {
    try {
      await this.setup();
      await testFn(this.page);
      console.log('[TestRunner] Test passed');
    } catch (error) {
      console.error('[TestRunner] Test failed:', error.message);
      if (this.page) await takeScreenshot(this.page, 'failure');
      throw error;
    } finally {
      await this.teardown();
    }
  }
}

// ============================================================
// IMPORT EXAMPLE (commented out — uncomment to use in another file)
// ============================================================
//
// // In a test file like `tests/login.test.js`:
//
// import TestRunner, {
//   BASE_URL,
//   TIMEOUT,
//   BROWSER_OPTIONS,
//   LOGIN_SELECTORS,
//   DASHBOARD_SELECTORS,
//   waitForPageLoad,
//   takeScreenshot,
//   generateRandomEmail,
//   login,
//   logout,
//   expectElementVisible,
//   expectTextMatch,
// } from '../101_Import_Export.js';
//
// // Or import only what you need:
// // import { login, logout, expectTextMatch } from '../101_Import_Export.js';
// // import TestRunner from '../101_Import_Export.js';
//
// (async () => {
//   const { chromium } = await import('playwright');
//   const browser = await chromium.launch(BROWSER_OPTIONS);
//
//   const runner = new TestRunner(browser);
//   await runner.runTest(async (page) => {
//     await login(page, 'admin', 'password123');
//     await expectTextMatch(page, DASHBOARD_SELECTORS.welcomeHeader, 'Welcome, Admin!');
//     await logout(page);
//   });
//
//   await browser.close();
// })();