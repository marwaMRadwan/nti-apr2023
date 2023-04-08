//npm i mongoose
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/ntis10")
//modeling db collection
const User = mongoose.model("User", {
    name:{
        type:String
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String
    }
})
const myData = new User({name:"marwa", email:"marwa@techs.com"})
myData.save().then(res=>console.log(res)).catch(e=> console.log(e))