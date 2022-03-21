const express = require("express")
const { getApiKey } = require("../controllers/payments-controller")

const paymentRouter = express.Router()

paymentRouter.get("/apikey", getApiKey)

exports.paymentRouter = paymentRouter