import { pool } from "../db.js";

export const getEmployes = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM employe');
    res.json(rows);
};

export const getEmploye = async (req, res) => {
    const { id } = req.params;
    const {rows} = await pool.query('SELECT * FROM employe WHERE id = $1', [id]);
    
    if(rows.length === 0){
        return res.status(404).json({ message: "Employe not found"});
    }

    res.json(rows[0]);
};

export const createEmploye = async (req, res) => {
    const data = req.body;
    const { rows } = await pool.query('INSERT INTO employe(codigo, nombre, email) VALUES($1, $2, $3) RETURNING *', [data.codigo, data.nombre, data.email]);

    return res.json(rows[0]);
};

export const deleteEmploye = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM employe WHERE id = $1 RETURNING *', [id]);

    if(rowCount === 0){
        return res.status(404).json({message: "Employe not found"});
    }

    return res.sendStatus(204);
};

export const updateEmploye = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const { rows } = await pool.query("UPDATE employe SET codigo = $1, nombre = $2, email = $3 WHERE id = $4 RETURNING *", [data.codigo, data.nombre, data.email, id]);

    return res.json(rows[0])
};