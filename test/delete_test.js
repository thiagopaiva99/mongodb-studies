const assert = require('assert');
const User = require('../src/models/user');

describe('Deleting a user', () => {
    let thiago;

    beforeEach(done => {
        thiago = new User({ name: 'Thiago' });

        thiago.save()
            .then(() => done());
    });
});