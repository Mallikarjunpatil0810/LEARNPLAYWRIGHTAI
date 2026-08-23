class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("//input[@id='username']");
    this.password = page.locator("//input[@id='password']");
    this.loginButton = page.locator("//input[@id='Login']");
    this.rememberMe = page.locator("//input[@id='rememberUn']");
    this.rememberMeLabel = page.locator("//label[@for='rememberUn']");
    this.errorMessage = page.locator("//div[@id='error']");
  }

  async goto() {
    try {
      await this.page.goto('/?locale=in', { waitUntil: 'domcontentloaded' });
    } catch (err) {
      throw new Error(`[LoginPage] goto failed: ${err.message}`);
    }
  }

  async enterUsername(value) {
    try {
      await this.username.fill(value);
    } catch (err) {
      throw new Error(`[LoginPage] enterUsername failed for value "${value}": ${err.message}`);
    }
  }

  async enterPassword(value) {
    try {
      await this.password.fill(value);
    } catch (err) {
      throw new Error(`[LoginPage] enterPassword failed: ${err.message}`);
    }
  }

  async checkRememberMe() {
    try {
      if (!(await this.rememberMe.isChecked())) {
        await this.rememberMeLabel.click();
      }
    } catch (err) {
      throw new Error(`[LoginPage] checkRememberMe failed: ${err.message}`);
    }
  }

  async isRememberMeChecked() {
    try {
      return await this.rememberMe.isChecked();
    } catch (err) {
      throw new Error(`[LoginPage] isRememberMeChecked failed: ${err.message}`);
    }
  }

  async clickLogin() {
    try {
      await this.loginButton.click();
    } catch (err) {
      throw new Error(`[LoginPage] clickLogin failed: ${err.message}`);
    }
  }

  async doLogin(user, pass, rememberMe = false) {
    try {
      await this.enterUsername(user);
      await this.enterPassword(pass);
      if (rememberMe) {
        await this.checkRememberMe();
      }
      await this.clickLogin();
    } catch (err) {
      throw new Error(`[LoginPage] doLogin failed: ${err.message}`);
    }
  }

  async getErrorMessage() {
    try {
      return await this.errorMessage.textContent();
    } catch (err) {
      throw new Error(`[LoginPage] getErrorMessage failed: ${err.message}`);
    }
  }

  async isErrorVisible() {
    try {
      return await this.errorMessage.isVisible();
    } catch (err) {
      throw new Error(`[LoginPage] isErrorVisible failed: ${err.message}`);
    }
  }
}

module.exports = { LoginPage };
