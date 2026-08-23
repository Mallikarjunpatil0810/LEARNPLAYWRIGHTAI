# Salesforce Login — Playwright + JavaScript Framework

Enterprise-grade Playwright + JavaScript test framework for the Salesforce login page (`https://login.salesforce.com/?locale=in`), the direct equivalent of a Selenium + Java + TestNG + PageFactory setup.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
cd salesforce-playwright-framework
npm install
npx playwright install chromium
```

Install additional browsers only if you want them: `npx playwright install firefox webkit`.

## Credentials

Valid-login tests read credentials from environment variables — never hardcode them:

```bash
# Windows (cmd)
set SF_USERNAME=your.salesforce.username@example.com
set SF_PASSWORD=yourpassword

# Windows (PowerShell)
$env:SF_USERNAME = "your.salesforce.username@example.com"
$env:SF_PASSWORD = "yourpassword"

# macOS / Linux
export SF_USERNAME=your.salesforce.username@example.com
export SF_PASSWORD=yourpassword
```

Copy `.env.example` to `.env` (loaded automatically via dotenv) if you prefer, or set the variables in your shell. When credentials are absent, the valid-login tests **skip** with a clear message — there is no public Salesforce test account. Invalid-login tests run with no credentials at all.

## Run the tests

```bash
npm test                        # full suite, all browsers
npm run test:chromium           # full suite, Chromium only
npm run test:valid              # valid-login spec only
npm run test:invalid            # invalid-login spec only
npm run test:headed             # run with visible browsers
npm run report                  # open the HTML report
```

> **Note:** the `npm` scripts call `node node_modules/@playwright/test/cli.js test` directly instead of the `playwright` bin shim, and this repo relies on junction links (below) so `require('@playwright/test')` resolves without a physical `node_modules` in the synced folder.

## Known issue: npm reify no-op on this machine

`npm install` on this machine (npm 11.16.0 / Node 24) fetches manifests but its `reify` phase performs **zero file extraction** — the log shows `reify moves {}` and `audited 1 package` with no `node_modules` created. This is a machine-wide npm bug, reproducible on any path (OneDrive or `C:\`). Workarounds that did **not** help: `npm ci`, `npm install --force`, cache relocation, deleting `node_modules`/`package-lock.json`.

**Working setup used here** — dependencies are installed once on a local, non-synced drive and linked into the repo via junctions (invisible to git):

1. Working copy with a real `node_modules`:

   ```bash
   cd C:\Automation\salesforce-playwright-framework
   # create node_modules manually if npm install still no-ops:
   #   curl -sL -o d.tgz https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz
   #   curl -sL -o pw-core.tgz https://registry.npmjs.org/playwright-core/-/playwright-core-1.62.1.tgz
   #   curl -sL -o pw.tgz https://registry.npmjs.org/playwright/-/playwright-1.62.1.tgz
   #   curl -sL -o pwt.tgz https://registry.npmjs.org/@playwright/test/-/test-1.62.1.tgz
   # then extract each into the proper node_modules/@playwright|playwright|playwright-core|dotenv folders
   npx playwright install chromium firefox webkit
   ```

2. Junction links in this repo (so `require('@playwright/test')` and the npm scripts resolve):

   ```bash
   cd <repo>/salesforce-playwright-framework
   mkdir node_modules\@playwright
   mklink /J node_modules\@playwright\test  C:\Automation\salesforce-playwright-framework\node_modules\@playwright\test
   mklink /J node_modules\playwright         C:\Automation\salesforce-playwright-framework\node_modules\playwright
   mklink /J node_modules\playwright-core    C:\Automation\salesforce-playwright-framework\node_modules\playwright-core
   mklink /J node_modules\dotenv             C:\Automation\salesforce-playwright-framework\node_modules\dotenv
   ```

3. Run tests normally with `npm test` from this repo — code stays in the repo, dependencies execute from the local drive.

If npm is fixed on this machine (upgrade/downgrade), replace the junction links with a normal `npm install` and the standard `"playwright test"` scripts.

## Framework structure

```
salesforce-playwright-framework/
├── package.json            # dependencies + npm scripts (node <cli.js> test)
├── playwright.config.js    # enterprise config (timeouts, retries, reporters, 3 browser projects, failure artifacts)
├── .env.example            # credential template
├── pages/
│   └── LoginPage.js        # Page Object: XPath locators + reusable actions, structured try/catch on every method
└── tests/
    ├── valid-login.spec.js     # valid test cases (page render, valid login, remember-me + valid login)
    └── invalid-login.spec.js   # invalid test cases (bad credentials, empty fields, remember-me before submit)
```

## Selenium/Java → Playwright/JS mapping

| Java/Selenium/TestNG | Playwright/JavaScript |
|---|---|
| `@Test` | `test('...', async ({ page }) => { ... })` |
| `@BeforeTest` / `@AfterTest` | `test.beforeEach(...)` / `test.afterEach(...)` |
| `PageFactory.initElements(driver, this)` + `@FindBy(xpath = "...")` | Page Object class with `page.locator('//input[@id="..."]')` in the constructor |
| `WebDriverWait` | Playwright auto-waiting + `expect(...).toBeVisible()` polling |
| `Thread.sleep()` | never used — Playwright waits automatically |
| `driver.findElement(By.id("..."))` | `page.locator('//input[@id="..."]')` |
| Maven project | Node project (`package.json` + `playwright.config.js`) |

## Design decisions

- **XPath-only locators** — every locator is an attribute XPath, matching the `@FindBy(xpath=...)` requirement; no CSS selectors.
- **Robust exception handling** — every Page Object action and test body uses structured try/catch that rethrows a contextual error identifying the exact failing step (e.g. `[LoginPage] clickLogin failed: ...`).
- **No sleeps** — Playwright's built-in actionability waiting and `expect` polling replace `WebDriverWait`/`Thread.sleep`.
- **Enterprise defaults** — 60s test timeout, 10s expect timeout, retries on CI, parallel workers, `list` + `html` reporters, and screenshot/video/trace captured on failure only.
- **Valid-login safe by default** — credentials come from env vars; tests auto-skip with an explanatory message when they are not set.
