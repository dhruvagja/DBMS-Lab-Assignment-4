import express from 'express';
import pool from '../../db.js';
import authenticateToken from '../../auth.js';
const router = express.Router();



// add authentication after

// create an event
router.post('/',async (req, res) => {
    try{
        const eid = req.body.eid;
        const ename = req.body.ename;
        const date = req.body.date;
        const type = req.body.type;
        const description = req.body.description;

        const newevent = await pool.query("INSERT INTO event (eid, ename, date, type, description) VALUES($1, $2, $3, $4, $5) RETURNING *", [eid, ename, date, type, description]);
        res.json(newevent);
    }
    catch{
        console.error(err.message);
    }
});

// display all events
router.get('/' ,async (req, res) => {
    try{
        
        const allEvents = await pool.query("SELECT * FROM event");
        res.json(allEvents.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// display a single event
router.get('/:eid', authenticateToken, async (req, res) => {

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