/*
    Ruta: /api/usuarios
*/
const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const {
  getUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", validarJWT, getUsuarios);
router.post(
  "/",
  [
    validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("password", "El password es requerido").not().isEmpty(),
    check("email", "El email es requerido").isEmail(),
    validarCampos,
  ],
  crearUsuario
);
router.put(
  "/:id",
  [
    validarJWT,
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("password", "El password es requerido").not().isEmpty(),
    check("role", "El role es requerido").not().isEmpty(),
    validarCampos,
  ],
  actualizarUsuario
);
router.delete("/:id", validarJWT, eliminarUsuario);
module.exports = router;
