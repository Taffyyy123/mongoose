const Router = require("express");
const userController = require("../controller/userController");
const userRouter = Router();

userRouter.post("/createUser", userController.createUser);
userRouter.put("/updateUser", userController.updateUser);
userRouter.delete("/deleteUser", userController.deleteUser);
userRouter.get("/getUsers", userController.getUsers);

module.exports = userRouter;
