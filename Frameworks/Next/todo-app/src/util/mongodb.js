//arquivo que vai auxiliar a conexão com o banco

//importar a biblioteca do mongodb

import mongoose from "mongoose";

//arrow function
const connectMongo = async () => {
  mongoose.connect(process.env.DATABASE_URL) // estabele a conexão com o mongo
    .then(()=>console.log("Conectado ao Mongo DB"))
    .catch(err => console.error("Erro ao conectar ao Mongo DB", err))
}

export default connectMongo;
