const deal = require('./dealWithJson')
const userHeads = ["id", "name", "age","email"]
const createObj=(data)=>{ 
    const userData = { }
    userHeads.forEach(h=>{
        if(h=="id") userData[h]= Date.now()
        else userData[h]= data[h]
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
    static delAll = () => deal.writeJsonData("users.json", [])
    static delSingle = (argv)=>{
        const allUsers = deal.readJsonData("users.json")
        const ind = allUsers.findIndex(u => u.id == argv.id)
        if(ind==-1){
            console.log("user not found");
            return
        }
        allUsers.splice(ind,1)
        deal.writeJsonData("users.json", allUsers)
    }

static editUser=(argv)=>{
    const allUsers = deal.readJsonData("users.json")
    const ind = allUsers.findIndex(u => u.id == argv.id)
    if(ind==-1){
        console.log("user not found");
        return
    }
    for (const key in argv) {
        // if(key!="_" && key!="$0" && key!="id")
        if(userHeads.includes(key))
            allUsers[ind][key] = argv[key]
    }
// console.log(allUsers[ind]);
deal.writeJsonData("users.json", allUsers)
}
}
module.exports = User