const express = require("express")

const { getProducts, getProduct } = require("../controllers/products.js")

const productRouter = express.Router()

productRouter.post("/", getProducts)
productRouter.get("/product/:id", getProduct)

exports.productRouter = productRouter