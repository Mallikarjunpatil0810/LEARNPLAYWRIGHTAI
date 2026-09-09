// ============================================================
// Interface Implementation in JavaScript (Duck Typing / Contract)
// Example: API Testing Interface
// ============================================================

/**
 * Interface: ApiTester
 * Defines the contract that any API tester must implement.
 * Methods: testGet, testPost, testPut, testDelete
 */
class ApiTester {
    constructor(baseURL) {
        if (this.constructor === ApiTester) {
            throw new Error("Cannot instantiate abstract class ApiTester directly.");
        }
        this.baseURL = baseURL;
    }

    testGet(endpoint) {
        throw new Error("Method 'testGet' must be implemented.");
    }

    testPost(endpoint, body) {
        throw new Error("Method 'testPost' must be implemented.");
    }

    testPut(endpoint, body) {
        throw new Error("Method 'testPut' must be implemented.");
    }

    testDelete(endpoint) {
        throw new Error("Method 'testDelete' must be implemented.");
    }
}

/**
 * Concrete Implementation: RestApiTester
 * Implements the ApiTester interface using fetch.
 */
class RestApiTester extends ApiTester {
    constructor(baseURL) {
        super(baseURL);
    }

    async testGet(endpoint) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`\n[GET] ${url}`);
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('Status:', response.status);
            console.log('Response:', JSON.stringify(data, null, 2));
            return { status: response.status, data };
        } catch (error) {
            console.error('GET Error:', error.message);
            throw error;
        }
    }

    async testPost(endpoint, body) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`\n[POST] ${url}`);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log('Status:', response.status);
            console.log('Response:', JSON.stringify(data, null, 2));
            return { status: response.status, data };
        } catch (error) {
            console.error('POST Error:', error.message);
            throw error;
        }
    }

    async testPut(endpoint, body) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`\n[PUT] ${url}`);
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log('Status:', response.status);
            console.log('Response:', JSON.stringify(data, null, 2));
            return { status: response.status, data };
        } catch (error) {
            console.error('PUT Error:', error.message);
            throw error;
        }
    }

    async testDelete(endpoint) {
        const url = `${this.baseURL}${endpoint}`;
        console.log(`\n[DELETE] ${url}`);
        try {
            const response = await fetch(url, { method: 'DELETE' });
            const data = await response.json();
            console.log('Status:', response.status);
            console.log('Response:', JSON.stringify(data, null, 2));
            return { status: response.status, data };
        } catch (error) {
            console.error('DELETE Error:', error.message);
            throw error;
        }
    }
}

/**
 * Another Implementation: MockApiTester (for testing without real API)
 * Also implements the ApiTester interface.
 */
class MockApiTester extends ApiTester {
    constructor() {
        super('http://mock.local');
        this.mockData = {
            users: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
            ],
        };
    }

    async testGet(endpoint) {
        console.log(`\n[MOCK GET] ${endpoint}`);
        const data = this.mockData.users;
        console.log('Response:', JSON.stringify(data, null, 2));
        return { status: 200, data };
    }

    async testPost(endpoint, body) {
        console.log(`\n[MOCK POST] ${endpoint}`, body);
        const newUser = { id: Date.now(), ...body };
        this.mockData.users.push(newUser);
        console.log('Response:', JSON.stringify(newUser, null, 2));
        return { status: 201, data: newUser };
    }

    async testPut(endpoint, body) {
        console.log(`\n[MOCK PUT] ${endpoint}`, body);
        const index = this.mockData.users.findIndex(u => u.id === body.id);
        if (index !== -1) {
            this.mockData.users[index] = { ...this.mockData.users[index], ...body };
            console.log('Response:', JSON.stringify(this.mockData.users[index], null, 2));
            return { status: 200, data: this.mockData.users[index] };
        }
        return { status: 404, data: { error: 'Not found' } };
    }

    async testDelete(endpoint) {
        console.log(`\n[MOCK DELETE] ${endpoint}`);
        const id = parseInt(endpoint.split('/').pop(), 10);
        const index = this.mockData.users.findIndex(u => u.id === id);
        if (index !== -1) {
            const deleted = this.mockData.users.splice(index, 1);
            console.log('Deleted:', JSON.stringify(deleted[0], null, 2));
            return { status: 200, data: deleted[0] };
        }
        return { status: 404, data: { error: 'Not found' } };
    }
}

// ============================================================
// Usage Example
// ============================================================

async function runApiTests(tester) {
    console.log('\n========== Running API Tests ==========');

    // Test GET
    const getResult = await tester.testGet('/users');
    console.assert(getResult.status === 200, 'GET should return 200');

    // Test POST
    const postResult = await tester.testPost('/users', { name: 'Charlie' });
    console.assert(postResult.status === 201, 'POST should return 201');

    // Test PUT
    const putResult = await tester.testPut('/users/1', { name: 'Alice Updated' });
    console.assert(putResult.status === 200, 'PUT should return 200');

    // Test DELETE
    const deleteResult = await tester.testDelete('/users/2');
    console.assert(deleteResult.status === 200, 'DELETE should return 200');

    console.log('\n✅ All tests completed successfully!\n');
}

// ============================================================
// Run with Mock API Tester (no external dependency)
// ============================================================

(async () => {
    console.log('Using MockApiTester (no real API needed):');
    const mockTester = new MockApiTester();
    await runApiTests(mockTester);

    // ============================================================
    // Run with Real API Tester (uncomment to test against a real API)
    // ============================================================

    // console.log('Using RestApiTester (real API):');
    // const realTester = new RestApiTester('https://jsonplaceholder.typicode.com');
    // await runApiTests(realTester);
})();