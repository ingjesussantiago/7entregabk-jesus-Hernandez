import { productosModel } from "../db/models/productos.model.js"

export default class ManagerProductos {

    async getProductEstadistico() {
        try {
            const todosproductos = await productosModel.find({nombre:"camisa"}).explain("executionStats")
            console.log(todosproductos);
            return todosproductos

        } catch (error) {
            console.log(error);
        }
    }

    async addProduct(productos) {
        try {
            const nuevoProducto = await productosModel.create(productos)
            return nuevoProducto

        } catch (error) {
            console.log(error);

        }
    }


}