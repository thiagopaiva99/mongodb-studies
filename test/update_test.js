const assert = require('assert');
const User = require('../src/models/user');

describe('Updating records', () => {
    let thiago;

    beforeEach(done => {
        thiago = new User({ name: 'Thiago' });

        thiago.save()
            .then(() => done());
    });

    const assertName = (operation, done) => {
        operation
            .then(() => User.find({ name: 'Thiagooo' }))
                .then(users => {
                    assert(users.length === 1);
                    assert(users[0].name === 'Thiagooo');
                    done();
                });
    }

    it('should update using instance set and save', done => {
        thiago.set('name', 'Thiagooo');
        assertName(thiago.save(), done);
    });

    it('should update a model instance with update', done => {
        assertName(thiago.update({ name: 'Thiagooo' }), done);
    });

    it('should update a model class with update', done => {
        assertName(User.update({ name: 'Thiago' }, { name: 'Thiagooo' }), done);
    });

    it('should update a model class with update', done => {
        assertName(User.findOneAndUpdate({ name: 'Thiago' }, { name: 'Thiagooo' }), done);
    });
});