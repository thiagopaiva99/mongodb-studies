const assert = require('assert');

const User = require('../src/models/user');

describe('Creating records', () => {
    it('should save a user', () => {
        const thiago = new User({
            name: 'Thiago'
        });

        thiago.save();
    });
});