const router = require("express").Router()
const userController = require("../app/controller/user.controller")
const auth = require("../app/middleware/auth.middleware")
const upload = require("../app/middleware/upload.middleware")
router.post("/register", userController.register)

router.get("/", auth, userController.all)
router.get("/single/:id", userController.single)

router.delete("/", userController.delAll)
router.delete("/single/:id", userController.delSingle)

router.patch("/single/:id", userController.editSingle)

router.patch("/updatePImg", auth, upload.single("img"), userController.updatePimg)

router.post("/login", userController.login)

router.get("/me", auth, userController.profile)
router.post("/logoutAll", auth, userController.logOutAll)

router.post("/logout", auth, userController.logOut)
module.exports = router