const router = require("express").Router()
const userController = require("../app/controller/user.controller")
router.get("/", userController.all)
router.post("/register", userController.register)
module.exports = router