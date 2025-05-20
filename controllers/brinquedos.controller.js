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