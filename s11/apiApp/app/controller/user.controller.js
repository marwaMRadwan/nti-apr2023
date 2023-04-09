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
}
module.exports=User