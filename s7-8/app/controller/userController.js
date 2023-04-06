const deal = require("../helper/dealWithJson")
const fileName = "models/users.json"
class User{
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add Data"
        })
    }
    static addLogic = (req,res)=>{
        const allUsers = deal.readJsonData(fileName)
        // const newUser = req.query //{name:"", age:"",....}
        // newUser.id=Date.now()
        const newUser = {id: Date.now(), ...req.query}
        allUsers.push(newUser)
        deal.writeJsonData(fileName, allUsers)
        res.redirect("/")
    }

    static addPost = (req,res)=>{
        res.render("addPost", {
            pageTitle:"Add Data"
        })
    }
    
    static addPostLogic = (req,res)=>{
        const allUsers = deal.readJsonData(fileName)
        const newUser = {id: Date.now(), ...req.body}
        // res.send(newUser)
        allUsers.push(newUser)
        deal.writeJsonData(fileName, allUsers)
        res.redirect("/")
    }

    static all = (req,res)=>{
        const allUsers = deal.readJsonData(fileName)
        res.render("all", {
            pageTitle:"All Data", 
            allUsers,
            hasData: allUsers.length
        })

        // res.send(allUsers)
    }
    static edit = (req,res)=>{
        const id = req.params.id
        const allUsers=deal.readJsonData(fileName)
        const user = allUsers.find(u=> u.id == id)
        res.render("edit", {
            pageTitle:"Edit Data Data",
            user
        })
    }
    static editLogic = (req,res)=>{
        const id = req.params.id
        const allUsers=deal.readJsonData(fileName)
        const index = allUsers.findIndex(u=> u.id == id)
        allUsers[index] = {id, ...req.query}
        deal.writeJsonData(fileName, allUsers)
        res.redirect(`/single/${id}`)
    }
    static single =  (req,res)=>{
        // res.send(req.params)
        const id = req.params.id
        const allUsers=deal.readJsonData(fileName)
        const user = allUsers.find(u=> u.id == id)
        res.render("single", {
            pageTitle:"Single Data",
            user
        })
    }
    static del = (req,res)=>{
        let allUsers=deal.readJsonData(fileName)
        const id = req.params.id
        allUsers = allUsers.filter(u=> u.id != id)
        deal.writeJsonData(fileName, allUsers)
        res.redirect("/")
    }
    static delAll = (req,res)=>{
        deal.writeJsonData(fileName, [])
        res.redirect("/")
    }
}
module.exports = User