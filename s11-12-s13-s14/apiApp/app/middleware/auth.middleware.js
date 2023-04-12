const userModel = require("../../database/models/user.model")
const { resHandler } = require("../helper")
const {verify} = require("jsonwebtoken")
const auth = async(req, res, next)=>{
    try{
        //bearer ey.....
        const token = req.header("Authorization").replace("bearer ", "")
        const decodedToken = verify(token, process.env.JWTKEY)
        const userData = await userModel.findOne({
            _id: decodedToken._id,
            "tokens.token":token
        })
        if(!userData) throw new Error("unauth")
        req.user = userData
        req.token = token
        next()
    }
    catch(e){
        resHandler(res, 500, false, e.message, "unauthorized")
    }
}
module.exports = auth