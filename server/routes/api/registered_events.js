// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');
import express from 'express';
import pool from '../../db.js';
const router = express.Router();
// display all registered events by a user

import authenticateToken from '../../auth.js';

// create a registered event
router.post('/:id', async (req, res) => {
    try{
        const eid = req.body.eid;
        const role = req.body.role;
        console.log(role);
        if(role === 'student'){
            const newRegisteredEvent = await pool.query("INSERT INTO student_participates (roll, eid) VALUES($1, $2) RETURNING *", [req.params.id, eid]);
            res.json(newRegisteredEvent.rows);
        }
        else if(role === 'external'){
            const newRegisteredEvent = await pool.query("INSERT INTO event_has_participant (eid, pid) VALUES($1, $2) RETURNING *", [eid, req.params.id]);
            res.json(newRegisteredEvent);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
    }
    catch (err){
        console.error(err.message);
    }
});

// display all registered events by a user
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id);

        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;

        if(role === 'student'){
            const allRegisteredEvents = await pool.query("SELECT * FROM event, student_participates where event.eid = student_participates.eid and student_participates.roll = $1", [id]);
            res.json(allRegisteredEvents.rows);
        }
        else if(role === 'external'){
            console.log("external");
            const allRegisteredEvents = await pool.query("SELECT * FROM event, event_has_participant where event.eid = event_has_participant.eid and event_has_participant.pid = $1", [id]);
            res.json(allRegisteredEvents.rows);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
        // res.json(allRegisteredEvents.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// module.exports = router;
export default router;