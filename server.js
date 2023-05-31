const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/calculate', (req, res) => {
    let waitTime = getRandomInt(3000);
    console.log('waitTime: ' + waitTime);
    // get the input from the url
    setTimeout(() => {
        let input = req.query.input;
        res.json({ result: eval(formatInput(input)) });
    }, waitTime);
});

function formatInput(input) {
    // format tmp to delete the last character while it is not a number
    while (isNaN(Number(input.slice(-1)))) {
        input = input.slice(0, -1);
    }
    return input;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.listen(3000, () => console.log('Server started on port 3000'));