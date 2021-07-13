// routes hit log
const R = (route) => {
    console.log("-r | route: "  + route);
}
// error message log
const E = (message) => {
    console.error("-e | message: " + message);
}
// system log
const Sys = (object, success = false) => {
    const prefix = "-sys | log \n";
    if(success){
        console.log(prefix, object);
    }else{
        console.error(prefix, object);
    }
}

module.exports = {
    R,
    E,
    Sys,
}