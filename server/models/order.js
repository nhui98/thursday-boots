const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    userId: { type: mongoose.ObjectId },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    deliveryAddress: {
        country: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        postcode: { type: String, required: true },
    },
    phone: { type: String, required: true },
    orderItems: [
        {
            orderItemId: { type: mongoose.ObjectId, required: true },
            style: { type: String, require: true },
            price: { type: Number, require: true },
            color: { type: String, require: true },
            size: { type: Number, require: true },
            quantity: { type: Number, required: true }
        }
    ],
    paymentMethod: { type: String, required: true },
    paymentTotal: { type: Number, required: true},
    orderDate: { type: Date, default: Date.now() }
})

const Order = mongoose.model("Order", orderSchema)

exports.Order = Order