import { pool } from "../db.js";

export const getProducts = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM product');
    res.json(rows);
};

export const getProduct = async (req, res) => {
    const { id } = req.params;
    const {rows} = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
    
    if(rows.length === 0){
        return res.status(404).json({ message: "Product not found"});
    }

    res.json(rows[0]);
};

export const createProduct = async (req, res) => {
    const data = req.body;
    const { rows } = await pool.query('INSERT INTO product(codigo, nombre) VALUES($1, $2) RETURNING *', [data.codigo, data.nombre]);

    return res.json(rows[0]);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM product WHERE id = $1 RETURNING *', [id]);

    if(rowCount === 0){
        return res.status(404).json({message: "Product not found"});
    }

    return res.sendStatus(204);
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const { rows } = await pool.query("UPDATE product SET codigo = $1, nombre = $2 WHERE id = $3 RETURNING *", [data.codigo, data.nombre, id]);

    return res.json(rows[0])
};