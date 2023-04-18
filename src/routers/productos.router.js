import { Router } from "express"
import fs from "fs"
import { __dirname } from "../util.js"
import ManagerProductos from "../daos/productosManager.js"

const router = Router()

const path = __dirname + "/data/productos.json"
const productosManager = new ManagerProductos()

router.get("/", async (req, res) => {
    const data = { nombre: "camisa" }
    const productos = await productosManager.getProductEstadistico(data)
    res.json({ productos })

})


router.get("/add", async (req, res) => {
    const productosData = await fs.promises.readFile(path, "utf8")
    await productosManager.addProduct(JSON.parse(productosData))
    res.json({ message: "adicionado a la base de datos de mongoatlas" })
})

export default router