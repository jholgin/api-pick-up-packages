import { Router } from "express";
import { getOrders } from "../controller/getOrders.js";
import { getConnecion, prueba } from "../config/db.js";

// Router
const router = Router();

// Obtener todas las ordenes
router.get("/orders/",getOrders);

//ejemplo que tenemos en proyecto diseño
// app.get('/getData', (req, res) => {
//   res.status(200).json({
//       lat: lat,
//       long: long,
//       date: date,
//       time: time
//   })
// })

router.get("/orders/create", (req, res) => {
  res.send("Ordenes create");
  prueba(getConnecion());
});

router.get("/orders/edit/", (req, res) => {
  res.send("Ordenes edit");
  prueba(getConnecion());
});

export { router as orderRouter };
