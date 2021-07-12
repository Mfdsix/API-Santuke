const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send("You've hit Santuke");
})
app.get('/rand', (req, res) => {
    // TODO - return random sentences from random language
});
app.get('/rand/:country', (req, res) => {
    const country = req.params.country;
    // TODO - return random sentences from selected language
});

app.listen(port, () => {
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("   Santuke HAS BEEN SUMMONED    ");
    console.log("           {HOST}:3000          ");
    console.log("--------------------------------");
    console.log("--------------------------------");
});