import { Router } from "express";
import { getOrders } from "../controller/getOrders.js";
import { getConnecion, prueba } from "../config/db.js";

// Router
const router = Router();

// Obtener todas las ordenes
router.get("/orders/",getOrders);

router.get("/orders/create", (req, res) => {
  res.send("Ordenes create");
  prueba(getConnecion());
});

router.get("/orders/edit/", (req, res) => {
  res.send("Ordenes edit");
  prueba(getConnecion());
});

export { router as orderRouter };
