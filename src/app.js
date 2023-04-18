import express from "express"
import { __dirname } from "./util.js"
import productosManager from "./daos/productosManager.js"
import routerproductos from "./routers/productos.router.js"
import "./db/dbConfig.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",routerproductos)

app.listen(8080, () => {
    console.log("desde puerto 8080 ")
})