const { test, expect } = require('@playwright/test');

// ============================================================
// Interface (Abstract Base Class) for Page Object Model
// ============================================================

class IPage {
    constructor(page) {
        if (this.constructor === IPage) {
            throw new Error('Cannot instantiate abstract class IPage directly.');
        }
        this.page = page;
    }

    async navigate() {
        throw new Error('Method "navigate()" must be implemented.');
    }

    async getTitle() {
        throw new Error('Method "getTitle()" must be implemented.');
    }

    async waitForPageLoad() {
        throw new Error('Method "waitForPageLoad()" must be implemented.');
    }

    async takeScreenshot(name) {
        throw new Error('Method "takeScreenshot()" must be implemented.');
    }
}

// ============================================================
// Concrete Page Object: LoginPage
// ============================================================

class LoginPage extends IPage {
    constructor(page) {
        super(page);
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = '#login-btn';
        this.errorMessage = '.error-msg';
    }

    async navigate() {
        await this.page.goto('https://example.com/login');
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.loginButton, { state: 'visible' });
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    async fillUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(this.loginButton);
    }

    async login(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await this.page.textContent(this.errorMessage);
    }
}

// ============================================================
// Concrete Page Object: DashboardPage
// ============================================================

class DashboardPage extends IPage {
    constructor(page) {
        super(page);
        this.welcomeMessage = '.welcome-msg';
        this.logoutButton = '#logout-btn';
        this.profileLink = '#profile-link';
    }

    async navigate() {
        await this.page.goto('https://example.com/dashboard');
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForPageLoad() {
        await this.page.waitForSelector(this.welcomeMessage, { state: 'visible' });
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }

    async getWelcomeText() {
        return await this.page.textContent(this.welcomeMessage);
    }

    async clickLogout() {
        await this.page.click(this.logoutButton);
    }

    async clickProfile() {
        await this.page.click(this.profileLink);
    }
}

// ============================================================
// Test using the Interface-based POM
// ============================================================

test.describe('Interface-based Page Object Model Tests', () => {
    test('Login and verify dashboard', async ({ page }) => {
        let currentPage;

        const loginPage = new LoginPage(page);
        currentPage = loginPage;

        await currentPage.navigate();
        await currentPage.waitForPageLoad();
        console.log('Login Page Title:', await currentPage.getTitle());

        await loginPage.login('testuser', 'password123');
        await loginPage.takeScreenshot('after-login');

        const dashboardPage = new DashboardPage(page);
        currentPage = dashboardPage;

        await currentPage.waitForPageLoad();
        console.log('Dashboard Title:', await currentPage.getTitle());

        const welcomeText = await dashboardPage.getWelcomeText();
        expect(welcomeText).toContain('Welcome');

        await dashboardPage.takeScreenshot('dashboard-view');
    });
});

// ============================================================
// Factory pattern with the interface
// ============================================================

class PageFactory {
    static createPage(pageType, page) {
        switch (pageType.toLowerCase()) {
            case 'login':
                return new LoginPage(page);
            case 'dashboard':
                return new DashboardPage(page);
            default:
                throw new Error(`Unknown page type: ${pageType}`);
        }
    }
}

test.describe('PageFactory with Interface', () => {
    test('Factory creates correct page type', async ({ page }) => {
        const loginPage = PageFactory.createPage('login', page);
        expect(loginPage).toBeInstanceOf(LoginPage);
        expect(loginPage).toBeInstanceOf(IPage);

        const dashboardPage = PageFactory.createPage('dashboard', page);
        expect(dashboardPage).toBeInstanceOf(DashboardPage);
        expect(dashboardPage).toBeInstanceOf(IPage);
    });
});

// ============================================================
// Test demonstrating LoginPage usage
// ============================================================

test.describe('LoginPage Usage Demo', () => {
    test('should fill login form and capture screenshot', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.waitForPageLoad();
        console.log('Page title:', await loginPage.getTitle());

        await loginPage.fillUsername('demo_user');
        await loginPage.fillPassword('securePass!');
        await loginPage.takeScreenshot('login-form-filled');

        await loginPage.clickLogin();
        await loginPage.takeScreenshot('after-login-click');
    });

    test('should login using the composite login method', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.waitForPageLoad();

        await loginPage.login('admin', 'admin123');
        await loginPage.takeScreenshot('login-composite-method');
    });

    test('should capture error message on failed login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.waitForPageLoad();

        await loginPage.login('wronguser', 'badpassword');
        const error = await loginPage.getErrorMessage();
        console.log('Error message:', error);
        await loginPage.takeScreenshot('login-error');
    });
});