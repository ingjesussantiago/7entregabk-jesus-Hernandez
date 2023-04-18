import mongoose from "mongoose"

const productosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },

    stock: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true,
        unique: true

    }
})

export const productosModel = mongoose.model("productos", productosSchema)