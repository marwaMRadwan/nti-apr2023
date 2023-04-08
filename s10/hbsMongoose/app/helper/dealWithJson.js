const fs = require("fs")
class DealWithJSON{
    static writeJsonData = (fileName, data) =>{
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    static readJsonData = (fileName) => {
        let result
        try{
            result = JSON.parse(fs.readFileSync(fileName))
            if(!Array.isArray(result)) throw new Error("not an array")
        }
        catch(e){
            result = []
        }
        return result
    }
}
module.exports = DealWithJSON
