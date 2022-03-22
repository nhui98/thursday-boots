const express = require("express")
const { getApiKey } = require("../controllers/payments.js")

const paymentRouter = express.Router()

paymentRouter.get("/apikey", getApiKey)

exports.paymentRouter = paymentRouter