// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');
import express from 'express';
import pool from '../../db.js';
const router = express.Router();
// display all volunteered events by volunteer

import authenticateToken from '../../auth.js';

// add authentication
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'student'){
            const allVolunteeredEvents = await pool.query("SELECT * FROM event, event_has_volunteer where event.eid = event_has_volunteer.eid and event_has_volunteer.roll = $1", [id]);
            // SELECT * FROM event, student_participates where event.eid = student_participates.eid and student_participates.roll = $1
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

// create volunteered event
router.post('/:id', async (req, res) => {
    try{
        const eid = req.body.eid;
        const roll = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [roll]);
        const role = user.rows[0].role;
        if(role === 'student'){
            const newVolunteeredEvent = await pool.query("INSERT INTO event_has_volunteer (eid, roll) VALUES($1, $2) RETURNING *", [eid, roll]);
            res.json(newVolunteeredEvent);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
    }
    catch (err){
        console.error(err.message);
    }
});

// module.exports = router;
export default router;