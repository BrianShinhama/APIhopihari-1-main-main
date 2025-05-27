const mysql = require("../mysql");

exports.verificarBrinquedo = async (req, res) => {
    try {
        const resultado = await mysql.execute(`
            SELECT * FROM rides WHERE id = ?;
            `, [req.params.idRides]);

            if(resultado.leght == 0) {
                return res.status(404).send({"Mensagem": "Brinquedo não Encontrado"});
            }
            next();
    } catch (error) {
        
    }
}

exports.entrarFila = async (req, res) => {
    try {
        const resultados = await mysql.execute(`
            INSERT INTO hopi_hari_db.lines (id_users, rides) VALUES(?, ?)
            `,[res.locals.idUsuario, req.params.idRides]);
            return res.status(201).send({"Mensagens": resultados});
    } catch (error) {
        return res.status(500).send(error)
    }
}