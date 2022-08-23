require('./models/db');

const express = require('express');
const bodyparser = require('body-parser');

const expenseController = require('./controllers/expenseController');

var cors = require('cors');
const app = express();
app.use(cors());

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
    res.send(`
        <h2>Sam's expense dashboard</h2>
        <h3>Click here to get access to the <b><a href="/expense/list">Database</a></b></h3>`)
});

app.listen(3000, () => console.log('Server started at 3000'));

app.use("/expense", expenseController);