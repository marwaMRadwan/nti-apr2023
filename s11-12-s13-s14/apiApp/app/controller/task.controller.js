const taskModel = require("../../database/models/task.model")
const {resHandler} = require("../helper")
class Task{
    static addTask = async(req,res)=>{
        try{
            const taskData = new taskModel({
                userId : req.user._id,
                ...req.body
            })
            await taskData.save()
            resHandler(res, 200, true, taskData, "added")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
    }
    static allTasks = async(req,res)=>{
        try{
            const allTasks = await taskModel.find()
            resHandler(res,200, true, allTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
    }
    static myTasks = async(req,res)=>{
        try{
            // const allTasks = await taskModel.find({userId: req.user._id})
            await req.user.populate("myTasks")
            resHandler(res,200, true, req.user.myTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }

    }
    static singleTask = async(req,res)=>{
        try{
            const allTasks = await taskModel.findById(req.params.id)
            resHandler(res,200, true, allTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }

    }
    static delTask = async(req,res)=>{
        try{
            const allTasks = await taskModel.findByIdAndRemove(req.params.id)
            resHandler(res,200, true, allTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
    }
    static editTask = async(req,res)=>{
        try{
            const allTasks = await taskModel.findByIdAndUpdate(
                req.params.id,
                req.body,
                {runValidators:true}
                )
            resHandler(res,200, true, allTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
g
    }
    static delAllTasks = async(req,res)=>{
        try{
            const allTasks = await taskModel.remove()
            resHandler(res,200, true, allTasks, "fetched")
        }
        catch(e){
            resHandler(res,500,false, e, e.message)
        }
    }
}
module.exports=Task