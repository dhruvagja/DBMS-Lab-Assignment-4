import express from 'express';
import pool from '../../db.js';
const router = express.Router();

// display all events
router.get('/', async (req, res) => {
    try{
        const allEvents = await pool.query("SELECT * FROM event");
        res.json(allEvents.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// display a single event
router.get('/:eid', async (req, res) => {

    try{
        const event = await pool.query("SELECT * FROM event WHERE eid = $1", [req.params.eid]);
        res.json(event.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }

});

// module.exports = router;
export default router;