const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const USERNAME = process.env.SF_USERNAME;
const PASSWORD = process.env.SF_PASSWORD;

test.describe('Salesforce Login - Valid Test Cases', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.afterEach(async ({ context }) => {
    await context.close();
  });

  test('Login page renders with all expected elements', async () => {
    try {
      await expect(loginPage.page).toHaveTitle('Login | Salesforce');
      await expect(loginPage.page).toHaveURL(/login\.salesforce\.com/);
      await expect(loginPage.username).toBeVisible();
      await expect(loginPage.password).toBeVisible();
      await expect(loginPage.loginButton).toBeVisible();
      await expect(loginPage.rememberMe).toBeVisible();
    } catch (err) {
      throw new Error(`[valid-login] page render assertions failed: ${err.message}`);
    }
  });

  test('Login succeeds with valid credentials', async () => {
    test.skip(
      !USERNAME || !PASSWORD,
      'Set SF_USERNAME and SF_PASSWORD env vars to run the valid-login test (no public Salesforce test account exists).'
    );
    try {
      await loginPage.doLogin(USERNAME, PASSWORD);
      await loginPage.page.waitForURL((url) => !url.hostname.includes('login.salesforce.com'), {
        timeout: 60000
      });
      expect(await loginPage.isErrorVisible()).toBe(false);
    } catch (err) {
      throw new Error(`[valid-login] valid credentials login failed: ${err.message}`);
    }
  });

  test('Login succeeds with valid credentials and remember-me checked', async () => {
    test.skip(
      !USERNAME || !PASSWORD,
      'Set SF_USERNAME and SF_PASSWORD env vars to run the valid-login test (no public Salesforce test account exists).'
    );
    try {
      await loginPage.doLogin(USERNAME, PASSWORD, true);
      await loginPage.page.waitForURL((url) => !url.hostname.includes('login.salesforce.com'), {
        timeout: 60000
      });
      expect(await loginPage.isErrorVisible()).toBe(false);
    } catch (err) {
      throw new Error(`[valid-login] valid credentials + remember-me login failed: ${err.message}`);
    }
  });
});
