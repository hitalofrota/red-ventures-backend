import mongoose from "mongoose";
import { Schema } from "mongoose";

const brothSchema = new Schema ({
    id: { type: String, required: true }, 
    imageInactive: { type: String, required: true },
    imageActive: { type: String, required: true }, 
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }
})

const Broth = mongoose.model('Broth', brothSchema);

export default Broth;