import express from "express";
import ProductModel from "../models/product.js";
const router = express.Router();

router.get("/products", async (request, response) => {
    try {
        const products = await ProductModel.find({});
        response.send(products);
    } catch (error) {
        response.status(500).send({ error });
    }
});

router.post("/products", async (request, response) => {
    const product = new ProductModel(request.body);

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/products/:id", async (request, response) => {
    try {
        const product = await ProductModel.findOne({ _id: request.params.id });
        response.send(product);
    } catch (error) {
        response.status(500).send({ error });
    }
});

export default router;