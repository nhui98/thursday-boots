const express = require("express")
const { login, register } = require("../controllers/users.js")

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)

exports.userRouter = userRouter