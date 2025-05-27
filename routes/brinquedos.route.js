const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const brinquedosController = require("../controller/brinquedos.controller");

router.post("/",
    login.required,
    login.userRegistred,
    brinquedosController.cadastrarBrinquedo

);
module.exports = router;