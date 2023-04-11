const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
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
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
},{
    timestamps:true
})

userSchema.pre("save", async function(){
    if(this.isModified("password"))
        this.password = await bcrypt.hash(this.password, 12)
})
userSchema.statics.loginMe = async (email, password) => {
    const userData = await userModel.findOne( { email } )
    if(!userData) throw new Error ("invalid email")
    const matched = await bcrypt.compare(password, userData.password)
    if(!matched) throw new Error ("invalid password")
    return userData
}

userSchema.methods.generateToken = async function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTKEY)
    // this.tokens.push({token})
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel