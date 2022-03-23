const { Product } = require("../models/product.js")

exports.addProduct = async (req, res, next) => {

    const { category, type, style, price, color, mainImg, altImg, sizes } = req.body

    const newProduct = new Product({ category, type, style, price, color, mainImg, altImg, sizes })

    try {
        const addedProduct = await newProduct.save()
        res.status(201).json(addedProduct)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

exports.getProduct = async (req, res, next) => {
    const { id } = req.params

    try {
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

exports.getProductsByCategory = async (req, res, next) => {
    const { category } = req.body

    if (category) {
        try {
            const products = await Product.find({ category: category })
            res.status(200).json(products)
        } catch (error) {
            res.status(404).json({ message: error.message })  
        }
    } else {
        res.status(400).json({message: "no products"})
    }
}

exports.getProductsByCategoryType = async (req, res, next) => {
    const { category, type } = req.body

    if (category && type) {
        try {
            const products = await Product.find({ category: category, type: type })
            res.status(200).json(products)
        } catch (error) {
            res.status(404).json({ message: error.message })  
        }
    } else {
        res.status(400).json({message: "no products"})
    }
}

exports.getProductsByCategoryTypeStyle = async (req, res, next) => {
    const { category, type, style } = req.body
    
    if (category && type && style) {
        try {
            const products = await Product.find({ category: category, type: type, style: style })
            res.status(200).json(products)
        } catch (error) {
            res.status(404).json({ message: error.message })  
        }
    } else {
        res.status(400).json({message: "no products"})
    }
}