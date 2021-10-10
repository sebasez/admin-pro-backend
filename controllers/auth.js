const { response } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");
const { generarJWT } = require('../helpers/jwt');
const login = async (req, res = response) => {
  try {
    const { email, password } = req.body;
    //valida correo
    const usuarioDB = await Usuario.findOne({ email });
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email no válida",
      });
    }
    //valida password
    const validaPassword = bcryptjs.compareSync(password, usuarioDB.password);
    if (!validaPassword) {
        return res.status(400).json({
            ok: false,
            msg: "Password no válida",
          });
    }
    //Generar TOKEN JWT
    const token = await generarJWT(usuarioDB.id)


    res.json({
      ok: true,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error inesperado... revisar logs",
    });
  }
};

module.exports = {
  login,
};
