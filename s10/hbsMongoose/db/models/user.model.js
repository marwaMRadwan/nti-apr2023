const mongoose = require('mongoose')
const userModel = mongoose.model("user",{
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    }
})

module.exports = userModel