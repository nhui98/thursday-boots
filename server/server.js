const express = require("express")
const mongoose = require("mongoose")

const { orderRouter } = require("./routers/orders.js")
const { paymentRouter } = require("./routers/payments.js")
const { productsRouter } = require("./routers/products.js")
const { userRouter } = require("./routers/users.js")

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/products", productsRouter)
app.use("/api/users", userRouter)
app.use("/api/payment", paymentRouter)
app.use("/api/orders", orderRouter)

const CONNECTION_URL = "mongodb+srv://khao:kaotik23@cluster0.pgqph.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => { console.log(`listening on port ${PORT}`) }))
    .catch(error => console.log(error.message))




