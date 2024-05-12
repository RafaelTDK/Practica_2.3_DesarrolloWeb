import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    category: { type: String },
    description: { type: String },
    image: { type: String }
});

const ProductModel = mongoose.model("Product", ProductSchema);
export default ProductModel;