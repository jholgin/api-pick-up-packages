import express from "express";
import cors from "cors";
import morgan from "morgan";
import { orderRouter } from "./routes/order.js";
import { connectDB } from "./config/db.js";

// Crear app de express
const app = express();

/* ------ Configuraciones ------ */
connectDB();

/* ------ Middlewares ------ */
// Agregar soporte de cors
app.use(cors());

// Agregar morgan
app.use(morgan("dev"));

// Agregar soporte de json
app.use(express.json());

/* ------ Rutas ------ */
app.use("/api", orderRouter);

/* ------ Colocar en escucha el servidor ------ */
app.listen(process.env.PORT || 3000, () => {
  console.log("Server online on", process.env.PORT);
});
