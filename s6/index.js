const yargs = require("yargs")
const user = require("./modules/users")

yargs.command({
    command:"addUser",
    builder:{
        name:{ demandOption: true},
        age:{ demandOption: true},
        email:{demandOption:true}
    },
    handler : (argv) => user.addUser(argv)
})

yargs.command({
    command:"showAll",
    handler : ()=> user.showAll()
})

yargs.command({
    command:"showSingle",
    builder:{ id:{demandOption:true}},
    handler: (argv)=> user.showSingle(argv)
})
yargs.command({
    command:"delAll",
    handler:()=> user.delAll()
})
yargs.command({
    command:"delSingle",
    builder:{ id:{demandOption:true}},
    handler: (argv)=> user.delSingle(argv)
})
yargs.command({
    command:"edit"
})

yargs.argv
