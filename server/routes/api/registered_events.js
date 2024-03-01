const express = require('express');
const router = express.Router();
const pool = require('../../db');

// display all registered events by a user
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'student'){
            const allRegisteredEvents = await pool.query("SELECT * FROM event JOIN student_participates on event.eid = student_participates.eid ");
            res.json(allRegisteredEvents.rows);
        }
        // organizer will get events managed by him
        // else if(role === 'organizer'){
        //     const allRegisteredEvents = await pool.query("SELECT * FROM event JOIN student_manage on event.eid = student_manage.eid");
        //     res.json(allRegisteredEvents.rows);
        // }
        else if(role === 'participant'){
            const allRegisteredEvents = await pool.query("SELECT * FROM event JOIN event_has_participants on event.eid = event_has_participants.eid", [id]);
            res.json(allRegisteredEvents.rows);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
        res.json(allRegisteredEvents.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

module.exports = router;