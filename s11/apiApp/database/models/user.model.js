const mongoose = require("mongoose")
const validator = require("validator")
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        minLength:5,
        maxLength:20
    }, 
    lname:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        minLength:5,
        maxLength:20
    },
    age:{
        type:Number,
        min:21,
        max:60,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) 
                throw new Error("invalid email format")
        }
    }, 
    password:{
        type:String,
        trim:true,
        required:true,
        // match:/^(?=.*\d)(?=.*[a-z][A-Z]).{6,20}$/
    }, 
    status:{
        type:Boolean,
        default:false
    }, 
    image:{
        type:String
    }, 
    gender:{
        type:String,
        trim:true,
        lowercase:true,
        enum:["male", "female"]
    }, 
    dOfBirth:{
        type:Date
    }, 
    phone:{
        type:String,
        trim:true,
        validate(value){
            if(!validator.isMobilePhone(value, 'ar-EG'))
                throw new Error("invalid phone number")
        }
    }, 
    addresses: [
        {
            addrName:{
                type:String,
                trim:true,
                required:true,
                lowercase:true,        
            }, 
            addrDetails:{
                type:String,
                trim:true,
                required:true,
                lowercase:true,        
            }
        }
    ]
},{
    timestamps:true
})
const userModel = mongoose.model("User", userSchema)
module.exports = userModel