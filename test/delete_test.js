const assert = require('assert');
const User = require('../src/models/user');

describe('Deleting a user', () => {
    let thiago;

    beforeEach(done => {
        thiago = new User({ name: 'Thiago' });

        thiago.save()
            .then(() => done());
    });

    it('should remove by model instance', done => {
        thiago.remove()
            .then(() => User.findOne({ name: 'Thiago' }))
                .then(user => {
                    assert(user === null);
                    done();
                });
    });

    it('should remove by class method', done => {
        User.remove({ name: 'Thiago' })
            .then(() => User.findOne({ name: 'Thiago' }))
                .then(user => {
                    assert(user === null);
                    done();
                });;
    });

    it('should remove by class method findAndRemove', done => {

    });

    it('should remove by class method findByIdAndRemove', done => {

    });
});