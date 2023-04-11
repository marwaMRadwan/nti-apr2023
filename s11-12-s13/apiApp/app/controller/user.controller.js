const userModel = require("../../database/models/user.model")
const Helper = require("../helper")
class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            Helper.resHandler(res, 200, true, userData, "user added successfull")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e, "Error Adding data")
        }
    }
    static all = async(req,res)=>{
        try{
            const userData = await userModel.find()
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static single = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static delAll = async(req,res)=>{
        try{
            await userModel.deleteMany()
            Helper.resHandler(res, 200, true, {}, "users deleted")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static delSingle = async(req,res)=>{
        try{
            const userData = await userModel.findByIdAndDelete(req.params.id)
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static editSingle = async(req,res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            for(let key in req.body){
                userData[key]= req.body[key]
            }
            await userData.save()
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static login = async(req, res)=>{
        try{
           const userData = await userModel.loginMe(req.body.email, req.body.password)
           const token = await userData.generateToken()
           Helper.resHandler(res,200, true, {userData,token}, "done")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e, e.message)
        }
    }
    static activate = async(req, res)=>{
        try{
            const userData = await userModel.findById(req.params.id)
            userData.status= true
            await userData.save()
            Helper.resHandler(res, 200, true, userData, "users featched")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }

    }
    static profile = async (req,res)=>{
        Helper.resHandler(res, 200, true, req.user, "fdxd")
    }
    static logOut = async(req,res)=>{
        try{
            req.user.tokens = req.user.tokens.filter(t => t.token != req.token )
            await req.user.save()
            Helper.resHandler(res, 200, true, {}, "logged out")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }
    static logOutAll = async(req,res)=>{
        try{
            req.user.tokens = []
            await req.user.save()
            Helper.resHandler(res, 200, true, req.user, "logged out")
        }
        catch(e){
            Helper.resHandler(res, 500, false, e.message, "Error featch data")
        }
    }

}
module.exports=User