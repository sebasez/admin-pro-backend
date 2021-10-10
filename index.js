require("dotenv").config();

const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;

const { dbConecction } = require("./database/config");

//Crea el servidor
const app = express();

//Configurar Cors
app.use(cors());

//Lectura y parseo body
app.use(express.json());

//Base de datos
dbConecction();
//ver variables de entorno
//console.log(process.env);

//rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/login", require("./routes/auth"));

app.listen(port, () => {
  console.log("Sevidor correindo en puerto " + port);
});
