//npm init --y 
// const validator = require("validator")
// import validator from 'validator';
// console.log(validator.isEmail("marwa@techsexperts.com"))

/*
modules => build-in , npm , my own modules
global node variables (__dirname)
get input from terminal
*/
// console.log(__dirname);
// console.log(__filename)

// import * as url from 'url';
// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
// console.log(__filename);

// console.log(process.argv)
// node app 5 6
// console.log(+process.argv[2]+ +process.argv[3]);

/* command => handler 
node app add --x=5 --y=3
node app
node app sub
yargs
*/

const yargs = require("yargs")
// import * as yargs from "yargs"
yargs.command({
    command:"add",
    builder:{
        x:{
            demandOption: true
        },
        y:{
            demandOption:true
        }
    },
    handler: (argv)=>{
        console.log("hello from yagrs");
        console.log(argv.x+argv.y);
    }
})
yargs.argv



