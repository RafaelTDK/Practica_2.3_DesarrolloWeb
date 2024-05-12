import express from "express";
import ClienteModel from "../models/cliente.js";

const router = express.Router();

router.get("/clientes", async (request, response) => {
    try {
        const clientes = await ClienteModel.find({});
        response.send(clientes);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/clientes", async (request, response) => {
    const cliente = new ClienteModel(request.body);

    try {
        await cliente.save();
        response.send(cliente);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/clientes/:id", async (request, response) => {
    try {
        const cliente = await ClienteModel.findOne({ _id: request.params.id });
        response.send(cliente);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;
