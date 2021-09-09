require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {dbConecction} = require('./database/config');

//Crea el servidor
const app = express();

app.use( cors());

//Base de datos
dbConecction();
//ver variables de entorno
//console.log(process.env);


//rutas
app.get('/', (req, res) => {
    res.json({'ok':true,'msg':'Hola mundo'});
});


app.listen(process.env.PORT, ()=>{console.log('Sevidor correindo en puerto ' + process.env.PORT);});