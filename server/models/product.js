const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    category: { type: String, required: true },
    type: { type: String, required: true },
    style: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    mainImg: { type: String, required: true },
    altImg: [
        { src: { type: String }}
    ],
    sizes: [
        {
            size: { type: Number, required: true },
            stock: { type:Number, required: true }
        }
    ],
})

const Product = mongoose.model("Product", productSchema)

exports.Product = Product