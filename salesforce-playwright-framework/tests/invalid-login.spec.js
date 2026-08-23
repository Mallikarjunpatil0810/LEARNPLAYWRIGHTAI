const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const INVALID_CREDENTIALS_ERROR = 'Please check your username and password';
const EMPTY_FIELDS_ERROR = 'Please enter your username and password';

test.describe('Salesforce Login - Invalid Test Cases', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test.afterEach(async ({ context }) => {
    await context.close();
  });

  test('Login fails with invalid credentials and shows error message', async () => {
    try {
      await loginPage.doLogin('invalid.user@example.com', 'WrongPassword123!');
      await expect(loginPage.errorMessage).toBeVisible();
      const actual = (await loginPage.getErrorMessage()).trim();
      expect(actual).toContain('Please check your username and password');
    } catch (err) {
      throw new Error(`[invalid-login] invalid credentials test failed: ${err.message}`);
    }
  });

  test('Login fails with empty username and password', async () => {
    try {
      await loginPage.doLogin('', '');
      await expect(loginPage.errorMessage).toBeVisible();
      const actual = (await loginPage.getErrorMessage()).trim();
      expect(actual).toContain(EMPTY_FIELDS_ERROR);
    } catch (err) {
      throw new Error(`[invalid-login] empty credentials test failed: ${err.message}`);
    }
  });

  test('Remember-me checkbox can be checked before submitting login', async () => {
    try {
      await loginPage.checkRememberMe();
      expect(await loginPage.isRememberMeChecked()).toBe(true);
      await loginPage.doLogin('invalid.user@example.com', 'WrongPassword123!');
      await expect(loginPage.errorMessage).toBeVisible();
    } catch (err) {
      throw new Error(`[invalid-login] remember-me test failed: ${err.message}`);
    }
  });
});
