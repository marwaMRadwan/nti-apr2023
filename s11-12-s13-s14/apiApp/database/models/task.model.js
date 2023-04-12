const mongoose = require("mongoose")
const taskSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    taskType:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        enum:["txt", "file"]
    },
    content:{
        type:String,
        trim:true,
        required: () => this.taskType == "txt"
    },
    file:{
        type:String,
        trim:true,
        required: () => this.taskType == "file"
    }
}, {timestamps:true})

taskSchema.pre("save", async function(){
    if(this.taskType=="txt" && this.file) 
        throw new Error("file must be removed") 
    else if (this.taskType!="txt" && this.content) 
        throw new Error("content must be removed") 
})

const taskModel = mongoose.model("Task", taskSchema)
module.exports = taskModel