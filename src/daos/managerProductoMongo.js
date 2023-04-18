import { productosModel } from "../db/models/productos.model.js"

export default class ManagerProducto {

    async getProduct() {
        try {
            const todosproductos = await productosModel.find()
            return productos

        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(producto) {
        try {
            const nuevoProducto = await productosModel.create(producto)
            return nuevoProducto

        } catch (error) {
            console.log(error);

        }
    }


}