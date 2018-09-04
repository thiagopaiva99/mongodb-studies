const assert = require('assert');
const User = require('../src/models/user');

describe('Updating records', () => {
    let thiago;

    beforeEach(done => {
        thiago = new User({ name: 'Thiago' });

        thiago.save()
            .then(() => done());
    });

    it('should update using instance set and save', done => {
        thiago.set('name', 'Thiagooo');
        thiago.save()
            .then(() => User.find({ name: 'Thiagooo' }))
                .then(users => {
                    assert(users.length === 1);
                    assert(users[0].name === 'Thiagooo');
                    done();
                });
    });
});