const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const filaController = require("../controllers/files.controller");

router.post("/:idRides",
    login.required,
    filaController.verificarBrinquedo,
    filaController.entrarFila
);
module.exports = router;