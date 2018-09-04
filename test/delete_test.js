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

    it('should remove by class method', () => {

    });

    it('should remove by class method findAndRemove', () => {

    });

    it('should remove by class method findByIdAndRemove', () => {

    });
});