const express = require("express")
const { signin } = require("../controllers/users.js")

const userRouter = express.Router()

userRouter.post("/signin", signin)
// userRouter.post("/register", register)

exports.userRouter = userRouter