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

const get = () => {
    const random = Math.floor(Math.random() * LANGUAGES.length);
    const lang = LANGUAGES[random];
    return getSentence(lang);
}

const getByLang = (lang) => {
    return getSentence(lang);
}

function getSentence(lang) {
    const filepath = 'lang/' + lang + '.txt';
    if(FileUtil.fileExists(filepath)) {
        const readFile = FileUtil.readFile(filepath);
        if(!readFile){
            const message = "Failed to load file " + filepath;

            Log.E(message);
            return ResponseUtil.errResponse(message);
        }
        return ResponseUtil.succResponse(parseSentences(readFile));
    }else{
        const message = "File doesn't exist " + filepath;

        Log.E(message);
        return ResponseUtil.errResponse(message);
    }
}

function parseSentences(file){
    const explodes = file.split("\n");
    explodes.forEach((v, i) => {
        if(v.includes("---")){
            explodes.splice(i, 1);
        }
    })
    const random = Math.floor(Math.random() * explodes.length);
    return explodes[random];
}

module.exports = {
    get,
    getByLang,
}