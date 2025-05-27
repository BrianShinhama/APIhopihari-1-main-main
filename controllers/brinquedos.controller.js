const mysql = require("../mysql");

exports.cadastrarBrinquedo = async (requestAnimationFrame, res) => {
    try {
        const resultados = await mysql.execute(`
            INSERT INTO rides (name, tempo_espera, status, area)
            VALUES (?, ?, ?, ?)
            `,[
                req.body.name,
                req.body.tempo_espera,
                req.body.status,
                req.body.area
            ]);
    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.getBrinquedosByAreaName = async (req, res) => {
    try {
        resultados = await mysql.execute(`
            SELECt * FROM rides WHERE id_areas = (
            SELeCT id FROM areas WHERE name = ?
            );
            `, [req.params.areaName]);

            if (resultados.leght ==0) {
                return res.status(404).send({"Mensagem": "Area do parque não encontrada"});
            }
            return res.status(200).send({
                "Mensagem": "Consulta realizada com Sucesso",
                "resultados": resultados
            });
    } catch (error) {
        
    }
}