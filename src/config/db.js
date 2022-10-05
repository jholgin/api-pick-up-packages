const MongoDb = require('mongodb')

// Instancia de la base de datos
const client = new MongoDb.MongoClient(process.env.MONGODB_HOST);

const connectDB = async () => {
  try {
    // Conexion a la base de datos
    await client.connect();

    // Mostrar esquemas para probar
    await prueba(client);

    console.log("Connected successfully to server");
  } catch (error) {
    console.error(error);
  }
};

const prueba = async (client) => {
  const databases = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databases.databases.map((db) => {
    console.log(db.name);
  });

  // client.db('instaya_db').admin().find({_id:})
};

// Retornar la instancia de la conexion
const getConnecion = () => {
  return client;
};

exports.connectDB = connectDB;
exports.getConnecion = getConnecion;
exports.prueba = prueba;
