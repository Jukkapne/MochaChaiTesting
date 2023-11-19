const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app'); // Adjust the path to your app file
const { pool } = require('../src/db/dbConnection'); // Adjust the path to your db connection

describe('User Controller', function() {

    // Before any tests run, set up the environment (HOOKS)
    before(async function() {
        console.log('Setting up test environment');
        // Example: Connect to the test database (if not already handled by dbConnection)
    });

    // After all tests have run, perform cleanup (HOOKS)
    after(async function() {
        console.log('Cleaning up after tests');
        // Example: Close database connection
    });

    // Before each test, reset the test data (HOOKS)
    beforeEach(async function() {
        console.log('Resetting test data');
        await pool.query('TRUNCATE users RESTART IDENTITY');
    });

    // After each test, perform any needed cleanup (HOOKS)
    afterEach(async function() {
        console.log('Post-test cleanup');
        // Example: Additional cleanup tasks, if any
    });

    // Actual test cases
    it('should create a new user', async function() {
        const userData = { username: 'testuser', email: 'test@example.com' };

        const res = await request(app)
            .post('/api/users')
            .send(userData);

        expect(res.status).to.equal(201);
        expect(res.body).to.include({
            username: 'testuser',
            email: 'test@example.com'
        });

        // Further assertions to check if the user is actually added to the database
        // ... 
    });
    
    it('should not create a user with an invalid email', async function() {
        const res = await request(app)
          .post('/api/users')
          .send({ username: 'testuser', email: 'invalid-email' });
      
        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error').that.equals('Invalid email format');
      });
      

    // Additional test cases...
});
