const express = require("express")

const { getProducts, getProduct } = require("../controllers/products-controller.js")

const productRouter = express.Router()

productRouter.get("/products", getProducts)
productRouter.get("/product/:id", getProduct)

exports.productRouter = productRouter