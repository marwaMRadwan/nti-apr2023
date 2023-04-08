const mongoose = require('mongoose')
const validator = require("validator")
const userModel = mongoose.model("user",{
    name:{
        type:String,
        required: true,
        trim:true,
        minLength:3,
        maxLength:20,
        unique:true
    },
    age:{
        type:Number,
        min:21,
        max:60
    },
    email:{
        type:String,
        lowercase:true,
        // match:
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid Email format")
        }
    },
    status:{
        type:Boolean,
        default:false
    },
    addedAt:{
        type:Date,
        default: Date.now()
    }
})

module.exports = userModel