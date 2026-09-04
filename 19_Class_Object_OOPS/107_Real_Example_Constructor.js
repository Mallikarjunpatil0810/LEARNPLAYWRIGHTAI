// Real Example: Constructor with openBrowser and closeBrowser

class Browser {
  constructor(browserName, version) {
    this.browserName = browserName;
    this.version = version;
    this.isOpen = false;
    console.log(`Constructor: ${this.browserName} v${this.version} object created.`);
  }

  openBrowser() {
    if (this.isOpen) {
      console.log(`${this.browserName} is already open.`);
    } else {
      this.isOpen = true;
      console.log(`${this.browserName} v${this.version} opened successfully.`);
    }
  }

  closeBrowser() {
    if (!this.isOpen) {
      console.log(`${this.browserName} is already closed.`);
    } else {
      this.isOpen = false;
      console.log(`${this.browserName} v${this.version} closed successfully.`);
    }
  }

  getStatus() {
    return `${this.browserName} is ${this.isOpen ? 'Open' : 'Closed'}`;
  }
}

// Usage Example
const chrome = new Browser('Chrome', 120);
chrome.openBrowser();
console.log(chrome.getStatus());
chrome.closeBrowser();
console.log(chrome.getStatus());

const firefox = new Browser('Firefox', 115);
firefox.openBrowser();
console.log(firefox.getStatus());
firefox.closeBrowser();
console.log(firefox.getStatus());