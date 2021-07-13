const Log = require('../utils/log');
const fs = require('fs');

const fileExists = (filePath) => {
    try {
        fs.accessSync(filePath, fs.constants.R_OK | fs.constants.W_OK);
        return true;
    } catch (err) {
        Log.Sys(err);
        return false;
    }
}

const readFile = async (filePath) => {
    try{
        const read = fs.readFileSync(filePath, 'utf8');
        Log.Sys("successfully read file " + filePath, true);
        return read;
    }catch(err){
        Log.Sys(err);
        return false;
    }
}

module.exports = {
    fileExists,
    readFile,
}