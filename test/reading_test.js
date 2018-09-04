const assert = require('assert');

const User = require('../src/models/user');

describe('Readind users out of database', () => {
    let thiago;
    
    beforeEach(done => {
        thiago = new User({
            name: 'Thiago'
        });

        thiago.save()
            .then(() => done())
    });

    it('should find all users with name Thiago', done => {
        User.find({ name: 'Thiago' })
            .then(users => {
                assert(users[0]._id.toString() === thiago._id.toString());
                done();
            });
    });
});