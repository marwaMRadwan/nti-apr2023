const yargs = require("yargs")
// const deal = require('./modules/dealWithJson')
const user = require("./modules/users")
yargs.command({
    command:"addUser",
    builder:{
        name:{ demandOption: true},
        age:{ demandOption: true},
        email:{demandOption:true}
    },
    handler:(argv)=>{
        user.addUser(argv)
        // const data = deal.readJsonData("users.json")
        // const userData = { 
        //     id: Date.now(), 
        //     name:argv.name, 
        //     email:argv.email, 
        //     age:argv.age
        // }
        // data.push(userData)
        // deal.writeJsonData("users.json", data)

    }
})

yargs.command({
    command:"showAll",
    handler: ()=> user.showAll()
})

yargs.command({
    command:"showSingle",
    builder:{ id:{demandOption:true}},
    handler: (argv)=> user.showSingle(argv)
})

yargs.argv
