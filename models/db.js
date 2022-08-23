const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/MyExpenseTracker', {
    useNewUrlParser: true
},
err => {
    if (!err) {
        console.log('Connection succeeded');
    } else {
        console.log('Error in connection' + err);
    }
});

require('./expense.model');