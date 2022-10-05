const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const orderRouter = require('./routes/order')
const MongoDB = require('./config/db')
const authRouter = require('./routes/auth')


// Crear app de express
const app = express();

app.use(bodyParser.json());

/* ------ Configuraciones ------ */
MongoDB.connectDB();

/* ------ Middlewares ------ */
// Agregar soporte de cors
app.use(cors());

// Agregar morgan
app.use(morgan("dev"));

// Agregar soporte de json
app.use(express.json());

/* ------ Rutas ------ */
app.use("/api", orderRouter);

app.use("/api", authRouter);

app.use((req,res,next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error,req,res,next) => {
  if(res.headerSent) {
      return next(error);
  }

  res.status(error.code || 500);
  res.json({message: error.message || 'An unknow error occurred'});


});

/* ------ Colocar en escucha el servidor ------ */
mongoose
  .connect(process.env.MONGODB_HOST)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server online on", process.env.PORT);
    });
  })
  .catch(err => {
    console.log(err)
  })

