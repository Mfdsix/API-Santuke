const FileUtil = require("../utils/file");
const ResponseUtil = require("../utils/response");
const Log = require('../utils/log');

const LANGUAGES = [
    'cn',
    'de',
    'en',
    'es',
    'id',
    'in',
    'jp',
    'pt',
    'ru',
    'sa',
    // you register more language, this represent filenames in lang folder
];

const get = async () => {
    const random = Math.floor(Math.random() * LANGUAGES.length);
    const lang = LANGUAGES[random];
    return await getSentence(lang);
}

const getByLang = async (lang) => {
    return await getSentence(lang);
}

async function getSentence(lang) {

    if(!LANGUAGES.includes(lang)) return ResponseUtil.errResponse("Language not supported");

    const filepath = 'lang/' + lang + '.txt';
    if(FileUtil.fileExists(filepath)) {
        const readFile = await FileUtil.readFile(filepath);
        if(!readFile){
            const message = "Failed to load file " + filepath;
            
            Log.E(message);
            return ResponseUtil.errResponse(message);
        }
        
        const sentence = parseSentences(readFile);
        return ResponseUtil.succResponse({
            "lang": lang,
            "text": sentence
        });
    }else{
        const message = "File doesn't exist " + filepath;
        
        Log.E(message);
        return ResponseUtil.errResponse(message);
    }
}

function parseSentences(file){
    const explodes = file.split("\n");
    const filtered = [];

    explodes.forEach((v) => {
        if(!v.includes("---")){
            filtered.push(v);
        }
    })
    Log.Sys(filtered.length + " sentences collected", true);
    const random = Math.floor(Math.random() * filtered.length);
    Log.Sys("returning sentences[" + random + "] " + filtered[random], true);
    return filtered[random].replace("\r", "");
}

module.exports = {
    get,
    getByLang,
}