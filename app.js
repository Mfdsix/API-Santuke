const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const SentenceController = require('./controllers/sentence');
const Log = require('./utils/log');

const swaggerDocument = require('./swagger.json');
const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    Log.R("/");
    res.send("You've hit Santuke");
})
app.use('/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);
app.get('/rand', async (req, res) => {
    Log.R("/rand");
    res.send(await SentenceController.get());
});
app.get('/rand/:lang', async (req, res) => {
    const lang = req.params.lang;
    Log.R("hit - /rand/" + lang);
    res.send(await SentenceController.getByLang(lang));
});

app.listen(port, host, () => {
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("   Santuke HAS BEEN SUMMONED    ");
    console.log("           " + host + ":" + port + "          ");
    console.log("--------------------------------");
    console.log("--------------------------------");
});