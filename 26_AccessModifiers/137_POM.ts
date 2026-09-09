// ============================================================
// Page Object Model (POM) Explanation with Playwright
// ============================================================
// POM is a design pattern that creates an object repository for
// web UI elements. Each page of the application has its own class
// that encapsulates page elements and their interactions.
// Benefits: Maintainability, Reusability, Readability
// ============================================================

import { Page, Locator, expect } from "@playwright/test";

// ---- Base Page (Abstract / Shared) ----
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("networkidle");
  }
}

// ---- Login Page Object ----
export class LoginPage extends BasePage {
  // Locators are private — only used within this class
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    // Initialize locators in constructor
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("button[type='submit']");
    this.errorMessage = page.locator(".error-message");
  }

  // --- Page Actions (public API) ---
  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  /**
   * High-level method: performs complete login flow
   */
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  /**
   * Navigates directly to login page
   */
  async goto() {
    await this.navigate("https://example.com/login");
  }

  // --- Assertions / State checks ---
  async getErrorMessage(): Promise<string> {
    return this.errorMessage.textContent() ?? "";
  }

  async isLoginButtonVisible(): Promise<boolean> {
    return this.loginButton.isVisible();
  }
}

// ---- Home Page Object ----
export class HomePage extends BasePage {
  private readonly welcomeMessage: Locator;
  private readonly logoutButton: Locator;
  private readonly userProfileLink: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeMessage = page.locator(".welcome-msg");
    this.logoutButton = page.locator("#logout");
    this.userProfileLink = page.locator("a.profile");
  }

  async goto() {
    await this.navigate("https://example.com/home");
  }

  async getWelcomeText(): Promise<string> {
    return this.welcomeMessage.textContent() ?? "";
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async clickProfile() {
    await this.userProfileLink.click();
  }

  async isUserLoggedIn(): Promise<boolean> {
    return this.welcomeMessage.isVisible();
  }
}

// ---- Dashboard Page Object ----
export class DashboardPage extends BasePage {
  private readonly searchBox: Locator;
  private readonly addItemButton: Locator;
  private readonly itemList: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBox = page.locator("input[placeholder='Search...']");
    this.addItemButton = page.locator("#add-item");
    this.itemList = page.locator(".item-list");
  }

  async goto() {
    await this.navigate("https://example.com/dashboard");
  }

  async searchFor(query: string) {
    await this.searchBox.fill(query);
    await this.page.keyboard.press("Enter");
  }

  async clickAddItem() {
    await this.addItemButton.click();
  }

  async getItemCount(): Promise<number> {
    return this.itemList.locator("> li").count();
  }
}

// ---- Usage Example (commented) ----
/*
import { test } from "@playwright/test";
import { LoginPage, HomePage } from "./137_POM";

test("User can login successfully", async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // Act
  await loginPage.goto();
  await loginPage.login("testuser", "password123");

  // Assert
  await expect(page).toHaveURL(/home/);
  const welcomeText = await homePage.getWelcomeText();
  expect(welcomeText).toContain("Welcome");
});
*/

// ---- Test Suite Using Page Fixture (best practice) ----
/*
// You can also create a PageManager to centralize page objects:

export class PageManager {
  constructor(private page: Page) {}

  get loginPage(): LoginPage {
    return new LoginPage(this.page);
  }

  get homePage(): HomePage {
    return new HomePage(this.page);
  }

  get dashboardPage(): DashboardPage {
    return new DashboardPage(this.page);
  }
}

// Then in tests:
test("example with PageManager", async ({ page }) => {
  const pm = new PageManager(page);
  await pm.loginPage.goto();
  await pm.loginPage.login("admin", "admin123");
  await expect(pm.homePage.getWelcomeText()).resolves.toContain("Welcome");
});
*/
