const assert = require('assert');

const User = require('../src/models/user');

describe('Creating records', () => {
    it('should save a user', done => {
        const thiago = new User({
            name: 'Thiago'
        });

        thiago.save()
            .then(() => {
                assert(!thiago.isNew);
                done();
            });
    });
});