const { productData } = require("../data.js")
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

// exports.getProducts = async (req, res, next) => {
//     const { category, type } = req.body
    
//     if (!category || !type) res.status(404).send({message: "problem retrieving products"})
    
//     const products = productData.filter(product => product.category === category && product.type === type)

//     if (products && products.length > 0) {
//         res.status(200).json(products)
//     } else {
//         res.status(404).send({ message: "no products found" })
//     }
// }