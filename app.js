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
app.get('/rand', async (req, res) => {
    Log.R("/rand");
    res.send(await SentenceController.get());
});
app.get('/rand/:lang', async (req, res) => {
    const lang = req.params.lang;
    Log.R("hit - /rand/" + lang);
    res.send(await SentenceController.getByLang(lang));
});

app.listen(port, () => {
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("   Santuke HAS BEEN SUMMONED    ");
    console.log("           {HOST}:3000          ");
    console.log("--------------------------------");
    console.log("--------------------------------");
});