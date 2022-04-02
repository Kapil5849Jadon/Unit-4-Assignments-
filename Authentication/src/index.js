const express = require("express");

const connect =require("./config/db")

const { register, login } = require("./controller/auth.controller");
const productController = require("./controller/product.controller")

const app = express()

app.use(express.json());

app.post("/register", register )
app.post("/login", login )
app.use("/product", productController)

// app.get("/login", postControler )



app.listen(4700, async function(){
    try {
        await connect();
        console.log("listing at port no 4700")
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
