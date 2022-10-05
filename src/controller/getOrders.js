import { getConnecion, prueba } from "../config/db.js";


export const getOrders =  (req, res) => {
    res.send("Ordenes");
    prueba(getConnecion());
  }

//ejemplo con fetch

//   fetch("api/recor", {
//   method: "POST",
//   body: bodyContent,
//   headers: headersList
// }).then(res => {
//   return res.json() 
// }).then(data => {
//   let rec
//   if (data.fecha=="0" && data.hora=="0"){
//       document.getElementById("rec").innerHTML ='<li> No hay datos en esta posición </li>'
//       }else{
//           data = data.positions
//            rec = data.map(function(bar){
//           fec=bar.Fecha.split("T")
//           return '<li>'+fec[0]+' '+bar.Hora+'</li>'
//         })
//         document.getElementById("rec").innerHTML = rec;}
        
// })