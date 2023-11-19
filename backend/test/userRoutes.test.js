// File: backend/test/userRoutes.test.js

const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('User Registration', function() {
    it('should register a user successfully', async function() {
        const res = await request(app)
            .post('/api/users/register')
            .send({ username: 'newuser', password: 'password123' });

        expect(res.status).to.equal(201);
        // Add more assertions as needed
    });

    // More tests for error cases, etc.
});
