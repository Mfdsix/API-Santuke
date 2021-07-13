const Log = require('../utils/log');
const fs = require('fs');

const fileExists = (filePath) => {
    try
    {
        return fs.existsSync("../" + filePath);
    }
    catch (err)
    {
        Log.Sys(err);
        return false;
    }
}

const readFile = (filePath) => {
    try{
        fs.readFile('../' + filePath, 'utf8', (err, data) => {
            if(err) {
                return false;
            }else{
                return data;
            }
        });
    }catch(err){
        Log.Sys(err);
        return false;
    }
}

module.exports = {
    fileExists,
    readFile,
}