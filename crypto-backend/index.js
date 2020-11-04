const express = require('express');
const crypto = require('./crypto.json');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 1337;

app.get('/api/crypto', (req, res) => {
    res.send(crypto);
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});