import express from 'express';
import pool from '../../db.js';
const router = express.Router();

// display all logistics

router.get('/', async (req, res) => {
    try{
        const allLogistics = await pool.query("SELECT * FROM logistics");
        res.json(allLogistics.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// display logistic of a participant
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const logistic = await pool.query("SELECT * FROM logistics WHERE pid = $1", [id]);
        res.json(logistic.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }
});

export default router;