const { productData } = require("../data.js")

exports.getProducts = async (req, res, next) => {
    const { category, type } = req.body
    
    if (!category || !type) res.status(404).send({message: "problem retrieving products"})
    
    const products = productData.filter(product => product.category === category && product.type === type)

    if (products && products.length > 0) {
        res.status(200).json(products)
    } else {
        res.status(404).send({ message: "no products found" })
    }
}

exports.getProduct = async (req, res, next) => {
    const product = productData.find(x => x.id == req.params.id)

    if (product) {
        res.send(JSON.stringify(product))
    } else {
        res.status(404).send({message: "product not found"})
    }
}
