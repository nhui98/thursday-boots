const express = require("express")

const { productRouter } = require("./routers/products-router.js")

const app = express()

const port = process.env.PORT || 8080

app.use("/productsapi", productRouter)

app.get("/", (req, res) => {
    res.send("server online")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})