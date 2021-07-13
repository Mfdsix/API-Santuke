const express = require('express');
const cors = require('cors');

const SentenceController = require('./controllers/sentence');
const Log = require('./utils/log');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
    Log.R("/");
    res.send("You've hit Santuke");
})
app.get('/rand', (req, res) => {
    Log.R("/rand");
    res.send(SentenceController.get());
});
app.get('/rand/:lang', (req, res) => {
    const lang = req.params.lang;
    Log.R("hit - /rand/" + lang);
    res.send(SentenceController.getByLang(lang));
});

app.listen(port, () => {
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("   Santuke HAS BEEN SUMMONED    ");
    console.log("           {HOST}:3000          ");
    console.log("--------------------------------");
    console.log("--------------------------------");
});