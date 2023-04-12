const TaskController = require("../app/controller/task.controller")
const auth = require("../app/middleware/auth.middleware")
const router = require("express").Router()

router.post("/addTask", auth, TaskController.addTask)

router.get("/", auth, TaskController.allTasks)
router.delete("/", auth, TaskController.delAllTasks)

router.get("/myTasks", auth, TaskController.myTasks)

router.get("/all/:id", auth, TaskController.singleTask)
router.delete("/all/:id", auth, TaskController.delTask)
router.patch("/all/:id", auth, TaskController.editTask)

module.exports = router