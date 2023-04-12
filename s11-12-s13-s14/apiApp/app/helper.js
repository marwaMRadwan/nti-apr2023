const fs = require("fs")
class Helper{
    static resHandler = (res, statusCode, apiStatus, data, message)=>{
        res.status(statusCode).send({ apiStatus, data, message })
    }
    static fileHandler = (req)=>{
        const ext = req.file.originalname.split(".").pop()
        const newName = req.file.path+"."+ext
        fs.renameSync(req.file.path, newName)
        return ext
    }
}
module.exports = Helper