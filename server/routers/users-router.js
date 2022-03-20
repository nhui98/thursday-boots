const express = require("express")
const { signin } = require("../controllers/users-controller")

const userRouter = express.Router()

userRouter.post("/signin", signin)

exports.userRouter = userRouter