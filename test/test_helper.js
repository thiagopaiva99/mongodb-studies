const mongoose = require('mongoose');

const options = { useNewUrlParser: true };

mongoose.connect('mongodb://localhost:27017/users_test', options);
mongoose.connection
    .once('open', () => console.log('Good to Go!'))
    .on('error', error => console.warn('Error', error));