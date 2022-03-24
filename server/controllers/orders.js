const { Order } = require("../models/order.js")

exports.createOrder = async (req, res, next) => {
    const { order } = req.body

    if (!order) return res.status(400).json({ message: "no order" })
    
    try {
        const newOrder = new Order(order)

        const placedOrder = await newOrder.save()

        res.status(201).json({ orderId: placedOrder._id })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}