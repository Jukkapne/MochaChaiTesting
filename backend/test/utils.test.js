// backend/test/utils.test.js

const { expect } = require('chai');
const { isValidEmail } = require('../src/utils/utils'); // Adjust the path as necessary

describe('Utility Functions', function() {
  describe('isValidEmail', function() {
    it('should return true for a valid email', function() {
      expect(isValidEmail('test@example.com')).to.be.true;
      expect(isValidEmail('user.name+tag@domain.co.uk')).to.be.true;
      // Add more valid email examples
    });

    it('should return false for an invalid email', function() {
      expect(isValidEmail('invalid-email')).to.be.false;
      expect(isValidEmail('user@')).to.be.false;
      expect(isValidEmail('@example.com')).to.be.false;
      expect(isValidEmail('user@example')).to.be.false;
      expect(isValidEmail('')).to.be.false;
      // Add more invalid email examples
    });
  });

  // Additional utility function tests...
});
