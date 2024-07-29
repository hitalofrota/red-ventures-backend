import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_CONNECTION = process.env.DB_CONNECTION;    

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conection DB success!!")
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MongoDB:", error);
    })

let DB = mongoose.connection;

export default DB;