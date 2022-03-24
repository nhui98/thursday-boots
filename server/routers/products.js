const express = require("express")

const { getProducts, getProduct, addProduct, getProductsByCategory, getProductsByCategoryType, getProductsByCategoryTypeStyle } = require("../controllers/products.js")

const productsRouter = express.Router()

productsRouter.post("/addProduct", addProduct)
productsRouter.get("/getProduct/:id", getProduct)
productsRouter.get("/getProducts", getProducts)
productsRouter.post("/getProductsByCategory", getProductsByCategory)
productsRouter.post("/getProductsByCategoryType", getProductsByCategoryType)
productsRouter.post("/getProductsByCategoryTypeStyle", getProductsByCategoryTypeStyle)

exports.productsRouter = productsRouter