import express from "express";
import PedidoModel from "../models/pedido.js";

const router = express.Router();

router.get("/pedidos", async (request, response) => {
    try {
        const pedidos = await PedidoModel.find({});
        response.send(pedidos);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/pedidos", async (request, response) => {
    const pedido = new PedidoModel(request.body);

    try {
        await pedido.save();
        response.send(pedido);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/pedidos/:id", async (request, response) => {
    try {
        const pedido = await PedidoModel.findOne({ _id: request.params.id });
        response.send(pedido);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;
