import { Router } from "express";
import { getOrders } from "../controller/getOrders.js";
import { getConnecion, prueba } from "../config/db.js";

// Router
const router = Router();

// Obtener todas las ordenes
router.get("/auth/login",getOrders);

router.get("/auth/register", (req, res) => {
  res.send("Ordenes");
  prueba(getConnecion());
});


export { router as authRouter };
