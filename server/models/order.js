const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
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
            quantity: { type: Number, required: true }
        }
    ],
    paymentMethod: { type: String, required: true },
    paymentTotal: { type: Number, required: true},
    orderDate: { type: Date, default: Date.now() }
})

const Order = mongoose.model("Order", orderSchema)

exports.Order = Order