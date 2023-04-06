// //npm i yargs
// //yargs.argv
// //node fileName Command --builderElement=value
// const yargs = require("yargs")
// yargs.command({
// command:"test", //command name
// builder:{ //command inputs
//     x:{demandOption:true},
//     y:{demandOption:true}
// },
// //command function
// handler:(argv)=>{
//     console.log(argv);
//     }
// })
// yargs.argv

const ob = {a:1, b:3}
for (const item in ob) {console.log(item);}

