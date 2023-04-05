const UserController = require("../controller/userController")
const router = require("express").Router()

router.get("/", UserController.all)

router.get("/add", UserController.add)
router.get("/addLogic", UserController.addLogic)

router.get("/addPost", UserController.addPost)
router.post("/addPostLogic", UserController.addPostLogic)

router.get("/single/:id", UserController.single)

router.get("/delAll", UserController.delAll)

router.get("/del/:id", UserController.del)


router.get("/edit/:id",UserController.edit)
router.get("/editLogic/:id",UserController.editLogic)


module.exports=router
