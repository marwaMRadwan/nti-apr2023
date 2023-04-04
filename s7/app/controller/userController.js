const deal = require("../helper/dealWithJson")
class User{
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add Data"
        })
    }
    static addLogic = (req,res)=>{
        const allUsers = deal.readJsonData("models/users.json")
        // const newUser = req.query //{name:"", age:"",....}
        // newUser.id=Date.now()
        const newUser = {id: Date.now(), ...req.query}
        allUsers.push(newUser)
        deal.writeJsonData("models/users.json", allUsers)
        res.redirect("/")
    }
    static all = (req,res)=>{
        res.render("all", {
            pageTitle:"All Data"
        })
    }
    static edit = (req,res)=>{
        res.render("edit", {
            pageTitle:"Edit Data"
        })
    }
    static single =  (req,res)=>{
        res.render("single", {
            pageTitle:"Single Data"
        })
    }
    static del = (req,res)=>{
        res.send("delete")
    }
    static delAll = (req,res)=>{
        res.send("del all")
    }
}
module.exports = User