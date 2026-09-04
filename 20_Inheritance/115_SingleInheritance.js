// Base class
class Test {
    constructor(name) {
        this.name = name;
        this.status = 'Pending';
        this.duration = 0;
    }

    execute() {
        console.log(`Executing test: ${this.name}`);
        this.status = 'Running';
    }

    complete(status, duration) {
        this.status = status;
        this.duration = duration;
        console.log(`Test ${this.name} completed with status: ${this.status} (${this.duration}ms)`);
    }

    getReport() {
        return {
            name: this.name,
            type: this.constructor.name,
            status: this.status,
            duration: this.duration
        };
    }
}

// Derived class: UnitTest
class UnitTest extends Test {
    constructor(name, functionName) {
        super(name);
        this.functionName = functionName;
    }

    execute() {
        super.execute();
        console.log(`Unit testing function: ${this.functionName}`);
        // Simulate test execution
        const passed = Math.random() > 0.2;
        const duration = Math.floor(Math.random() * 100) + 10;
        super.complete(passed ? 'Passed' : 'Failed', duration);
    }
}

// Derived class: ApiTest
class ApiTest extends Test {
    constructor(name, endpoint) {
        super(name);
        this.endpoint = endpoint;
        this.responseCode = null;
    }

    execute() {
        super.execute();
        console.log(`API testing endpoint: ${this.endpoint}`);
        // Simulate API call
        this.responseCode = [200, 201, 400, 500][Math.floor(Math.random() * 4)];
        const duration = Math.floor(Math.random() * 500) + 50;
        const status = this.responseCode < 400 ? 'Passed' : 'Failed';
        super.complete(status, duration);
    }
}

// Derived class: E2ETest
class E2ETest extends Test {
    constructor(name, scenario) {
        super(name);
        this.scenario = scenario;
        this.steps = [];
    }

    execute() {
        super.execute();
        console.log(`E2E testing scenario: ${this.scenario}`);
        // Simulate multiple steps
        this.steps = ['Login', 'Navigate', 'Perform Action', 'Verify Result'];
        this.steps.forEach(step => {
            console.log(`  Step: ${step} - ${Math.random() > 0.1 ? 'OK' : 'FAIL'}`);
        });
        const duration = Math.floor(Math.random() * 2000) + 200;
        const allPassed = Math.random() > 0.15;
        super.complete(allPassed ? 'Passed' : 'Failed', duration);
    }
}

// Report generator
class TestReport {
    constructor() {
        this.tests = [];
        this.startTime = null;
        this.endTime = null;
    }

    addTest(test) {
        this.tests.push(test);
    }

    generate() {
        console.log('\n========== TEST REPORT ==========');
        console.log(`Total Tests: ${this.tests.length}`);
        console.log('---------------------------------');

        let passed = 0, failed = 0;
        let totalDuration = 0;

        this.tests.forEach(test => {
            const report = test.getReport();
            console.log(`| ${report.type.padEnd(10)} | ${report.name.padEnd(20)} | ${report.status.padEnd(8)} | ${String(report.duration).padStart(5)}ms |`);
            if (report.status === 'Passed') passed++;
            else failed++;
            totalDuration += report.duration;
        });

        console.log('---------------------------------');
        console.log(`Passed: ${passed} | Failed: ${failed} | Total Duration: ${totalDuration}ms`);
        console.log('=================================\n');
    }
}

// Run demonstration
console.log('=== Single Inheritance Demo ===\n');

const report = new TestReport();

const unitTest = new UnitTest('UT-001', 'calculateTax');
const apiTest = new ApiTest('API-001', '/api/v2/users');
const e2eTest = new E2ETest('E2E-001', 'User Checkout Flow');

unitTest.execute();
apiTest.execute();
e2eTest.execute();

report.addTest(unitTest);
report.addTest(apiTest);
report.addTest(e2eTest);
report.generate();