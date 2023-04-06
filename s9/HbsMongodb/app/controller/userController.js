const deal = require("../helper/dealWithJson")
const connectDb = require("../../models/dbConnect")
const fileName = "models/users.json"
class User{
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add Data"
        })
    }
    static addLogic = async(req,res)=>{
        try{
            connectDb(async(db)=>{
                await db.collection("users").insertOne(req.query)
                res.redirect("/")
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static addPost = (req,res)=>{
        res.render("addPost", {
            pageTitle:"Add Data"
        })
    }
    
    static addPostLogic = async(req,res)=>{
        try{
            connectDb(async(db)=>{
                await db.collection("users").insertOne(req.body)
                res.redirect("/")
            })
        }
        catch(e){
            res.send(e)
        }
    }

    static all =async(req,res)=>{
        try{
            connectDb(async(db)=>{
                const allUsers = await db.collection("users").find().toArray()
                res.render("all", {
                    pageTitle:"All Data", 
                    allUsers,
                    hasData: allUsers.length
                })
            })
        }
        catch(e){
            res.send(e)
        }
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