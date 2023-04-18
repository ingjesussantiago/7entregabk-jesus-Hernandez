import mongoose from "mongoose"

const URI = "mongodb+srv://ingjesussantiago:1BJqXKhkrqa9kOEM@cluster0.nwy2csb.mongodb.net/7entregabk?retryWrites=true&w=majority"

mongoose.connect(URI)
.then(()=>console.log("conectado a db de mongoatlas"))
.catch((error)=>console.log(error))
