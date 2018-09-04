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

    it('should find a user with a particular id', done => {
        User.findOne({ _id: thiago._id })
            .then(user => {
                assert(user.name === 'Thiago');
                done();
            });
    });
});