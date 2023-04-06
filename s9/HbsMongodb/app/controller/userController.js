const deal = require("../helper/dealWithJson")
const connectDb = require("../../models/dbConnect")
const ObjectId = require("mongodb").ObjectId
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

    static single =  async(req,res)=>{
        try{
            connectDb(async(db)=>{
                const user = await db.collection("users").findOne({
                    _id: new ObjectId(req.params.id)
                })
                res.render("single", {
                    pageTitle:"Single Data",
                    user
                })
                
            })
        }
        catch(e){
            res.send(e)
        }
    }


    static edit = async(req,res)=>{
        try{
            connectDb(async(db)=>{
                const user = await db.collection("users").findOne({
                    _id: new ObjectId(req.params.id)
                })
                res.render("edit", {
                    pageTitle:"Single Data",
                    user
                })
                
            })
        }
        catch(e){
            res.send(e)
        }
    }
    static editLogic = (req,res)=>{
        const id = req.params.id
        const allUsers=deal.readJsonData(fileName)
        const index = allUsers.findIndex(u=> u.id == id)
        allUsers[index] = {id, ...req.query}
        deal.writeJsonData(fileName, allUsers)
        res.redirect(`/single/${id}`)
    }
    static del = async(req,res)=>{
        try{
            connectDb( async(db) => 
                await db.collection("users")
                .deleteOne({_id: new ObjectId(req.params.id)}) 
                )
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static delAll = async(req,res)=>{
        try{
            connectDb( async(db) => await db.collection("users").remove() )
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
}
module.exports = User