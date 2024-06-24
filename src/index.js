import express from "express";
import { PORT } from "./config.js";
import productRoutes from "./routes/product.routes.js";
import clientRoutes from "./routes/client.routes.js"
import morgan from "morgan";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(productRoutes);
app.use(clientRoutes);

app.listen(PORT);

console.log('Server on port ', PORT);