const deal = require("../helper/dealWithJson")
const userModel = require("../../db/models/user.model")
const fileName = "models/users.json"
class User{
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"Add Data"
        })
    }
    static addLogic = async(req,res)=>{
        try{
            const data = new userModel(req.query)
            await data.save()
            res.redirect("/")
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
            const data = new userModel(req.body)
            await data.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static all = async(req,res)=>{
        try{
            const allUsers = await userModel.find()
            res.render("all", {
                pageTitle:"All Data", 
                allUsers,
                hasData: allUsers.length
            })    
        }
        catch(e){
            res.send(e.message)
        }
    }
    static edit =  async(req,res)=>{
        try{
            const user = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle:"Edit Data",
                user
            })
        }
        catch(e){
            res.send(e.message)
        }
        }
    static editLogic = async(req,res)=>{
        try{
            const id = req.params.id
            await userModel.findByIdAndUpdate(id, req.query, {runValidators:true})
            res.redirect(`/single/${id}`)
        }
        catch(e){
            res.send(e.message)
        }
    }
    static single =  async(req,res)=>{
try{
    const user = await userModel.findById(req.params.id)
    res.render("single", {
        pageTitle:"Single Data",
        user
    })
}
catch(e){
    res.send(e.message)
}
}

    static single =  async(req,res)=>{
        try{
            const user = await userModel.findOne({_id:req.params.id, name:"marwa"})
            res.render("single", {
                pageTitle:"Single Data",
                user
            })
        }
        catch(e){
            res.send(e.message)
        }
    }    
    static del = async(req,res)=>{
        try{
            const d = await userModel.findByIdAndRemove(req.params.id)
            console.log(d)
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static delAll = (req,res)=>{
        deal.writeJsonData(fileName, [])
        res.redirect("/")
    }
}
module.exports = User

