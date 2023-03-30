const deal = require('./dealWithJson')
const userHeads = ["id", "name", "age","email"]
const createObj=(data)=>{ 
    //{[]:"addUser", name:"", age:66, email:"", _0:app.js}
    const userData = { }
    userHeads.forEach(h=>{
        if(h=="id") userData[h]= Date.now()
        else userData[h]= data[h]
        //{id:Date.now, name:"",, age:66, email:""}
    })
    return userData
}
class User{
    static addUser = (argv) =>{
        const userData = createObj(argv)
        const data = deal.readJsonData("users.json")
        data.push(userData)
        deal.writeJsonData("users.json", data)
    }
    static showAll = ()=>{
        const allUsers = deal.readJsonData("users.json")
        if(!allUsers.length) {
            console.log("No users yet")
            return
        }
        allUsers.forEach((u, ind)=>{
            console.log(`${ind+1} - ${u.name} - ${u.id} - ${u.email}`)
        })
    }
    static showSingle = (argv)=>{
        const allUsers = deal.readJsonData("users.json")
        const singleUser = allUsers.find(u=> u.id == argv.id)
        if(!singleUser) console.log("no user with this id")
        else console.log(singleUser)
    }
}
module.exports = User