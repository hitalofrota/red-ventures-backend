import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_CONNECTION = `mongodb+srv://ecommerce:ecommerce@ecommerce.9h7cvnn.mongodb.net/`

mongoose.connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Conection DB success!!")
    })
    .catch((error) => {
        console.error("Erro ao conectar ao MongoDB:", error);
    })

let DB = mongoose.connection;

export default DB;