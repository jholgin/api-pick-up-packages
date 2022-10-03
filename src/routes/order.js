import { Router } from "express";
import { getConnecion, prueba } from "../config/db.js";

// Router
const router = Router();

// Obtener todas las ordenes
router.get("/orders", (req, res) => {
  res.send("Ordenes");
  prueba(getConnecion());
});

export { router as orderRouter };
