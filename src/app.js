import express from "express"
import { __dirname } from "./util.js"
import managerProductoMongo from "./daos/managerProductoMongo.js"
import "./db/dbConfig.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.send("desde navegador")
})

app.listen(8080, () => {
    console.log("desde puerto 8080")
})