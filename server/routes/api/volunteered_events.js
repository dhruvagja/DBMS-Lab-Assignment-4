const express = require('express');
const router = express.Router();
const pool = require('../../db');

// display all volunteered events by volunteer
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'student'){
            const allVolunteeredEvents = await pool.query("SELECT * FROM event JOIN event_has_volunteer on event.eid = event_has_volunteer.eid");
            res.json(allVolunteeredEvents.rows);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
    }
    catch (err){
        console.error(err.message);
    }
});

module.exports = router;