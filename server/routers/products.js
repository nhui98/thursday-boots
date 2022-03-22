const express = require("express")

const { getProducts, getProduct, addProduct } = require("../controllers/products.js")

const productsRouter = express.Router()

productsRouter.post("/addproduct", addProduct)
productsRouter.get("/getproduct/:id", getProduct)
productsRouter.get("/getproducts", getProducts)


exports.productsRouter = productsRouter