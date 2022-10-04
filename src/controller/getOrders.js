import { getConnecion, prueba } from "../config/db.js";


export const getOrders =  (req, res) => {
    res.send("Ordenes");
    prueba(getConnecion());
  }

