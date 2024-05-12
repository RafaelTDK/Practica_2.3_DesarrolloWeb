import express from "express";
import dotenv from 'dotenv';
import DB from "./config/db.js";
import ProductRouter from "./routes/ProductRoutes.js";
import PedidoRouter from "./routes/PedidoRoutes.js";
import ClienteRouter from "./routes/ClienteRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
console.log(port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", ClienteRouter);
app.use("/api", PedidoRouter);
app.use("/api", ProductRouter);

DB.connectDB(process.env.DB_URI);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});