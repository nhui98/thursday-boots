const express = require("express")

const { productRouter } = require("./routers/products-router.js")
const { userRouter } = require("./routers/users-router.js")

const app = express()

const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)

app.get("/", (req, res) => {
    res.send("server online")
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})