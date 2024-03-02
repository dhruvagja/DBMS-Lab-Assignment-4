// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');

import express from 'express';
import pool from '../../db.js';
const router = express.Router();

import authenticateToken from '../../auth.js';

// display all organized events by organizer
router.get('/:id', authenticateToken, async (req, res) => {
    try{
        const id = req.params.id;

        if(id != req.user.id){
            res.status(404).json({msg:"page not found"});
        }
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'organizer'){
            const allOrganizedEvents = await pool.query("SELECT * FROM event JOIN student_manage on event.eid = student_manage.eid where student_manage.roll = $1", [id]);
            res.json(allOrganizedEvents.rows);
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