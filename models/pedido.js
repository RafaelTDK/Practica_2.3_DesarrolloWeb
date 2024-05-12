import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    customer_id: {
        type: String,
        required: true,
    },
    products: {
        type: [{
            name: String,
            price: Number,
            quantity: Number
        }],
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    }
});

const PedidoModel = mongoose.model("Pedido", PedidoSchema);
export default PedidoModel;
