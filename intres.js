const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/get", (req, res) => {
    res.send("hello")
});

app.get("/simpleinterset", (req, res) => {
    let principal = parseFloat(req.query.principal);
    let rate = parseFloat(req.query.rate);
    let time = parseFloat(req.query.time);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        return res.status(400).send('Invalid query parameters');
    }

    let value = (principal * rate * time) / 100;
    return res.send(value.toString());
});

app.listen(3003, () => {
    console.log('Server is running on port 3003');
});
