const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const notificationsController = require("../controllers/notifications.controller");

router.get('/:idUser',
    login.required,
    notificationsController.getNotificacoes 
)
router.put('/:idNot', notificationsController.putNotificacoes) 

module.exports = router;