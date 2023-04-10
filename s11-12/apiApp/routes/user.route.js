const router = require("express").Router()
const userController = require("../app/controller/user.controller")

router.post("/register", userController.register)

router.get("/", userController.all)
router.get("/single/:id", userController.single)

router.delete("/", userController.delAll)
router.delete("/single/:id", userController.delSingle)

router.patch("/single/:id", userController.editSingle)

router.post("/login", userController.login)

module.exports = router