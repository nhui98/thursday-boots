const  {productData } = require("../data.js")

exports.getProducts = async (req, res, next) => {
    const products = await JSON.stringify(productData)
    res.send(products)
}

exports.getProduct = async (req, res, next) => {
    console.log("hello");
    const product = productData.find(x => x.id == req.params.id)

    if (product) {
        res.send(JSON.stringify(product))
    } else {
        res.status(404).send({message: "product not found"})
    }
}
