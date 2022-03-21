const express = require("express")
const { createOrder } = require("../controllers/orders-controller")

const orderRouter = express.Router()

orderRouter.post("/createorder", createOrder)

exports.orderRouter = orderRouter