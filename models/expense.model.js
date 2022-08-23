// Schema

const mongoose = require('mongoose');

var expenseSchema = new mongoose.Schema({
    expense: {
        type: String,
        required: 'This field is required'
    },
    amount: {
        type: String,
        required: 'This field is required'
    },
    date: {
        type: String,
        required: 'This field is required'
    },
    notes: {
        type: String,
        required: 'This field is required'
    }
}, {
    versionKey: false
});

mongoose.model('Expense', expenseSchema);