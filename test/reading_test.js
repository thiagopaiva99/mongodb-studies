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

    it('should find users with name Thiago', () => {

    });
});