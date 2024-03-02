// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');

import express from 'express';
import pool from '../../db.js';
const router = express.Router();

import authenticateToken from '../../auth.js';

// create an organizer

router.post('/', async (req, res) => {
    try{
        console.log(req.body.roll);
        const roll = req.body.roll;
        const eid = req.body.eid;
        const rid = req.body.rid;

        const newOrganizer = await pool.query("INSERT INTO student_manage (roll, eid, rid) VALUES($1, $2, $3) RETURNING *", [roll, eid, rid]);
        
        res.json(newOrganizer);
    }
    catch (err){
        console.error(err.message);
    }
});

// GET all organizers
router.get('/', async (req, res) => {
    try{
        const allOrganizers = await pool.query("SELECT * FROM student_manage");
        res.json(allOrganizers.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// GET organizer
router.get('/:roll', async (req, res) => {

    try{
        //const { roll } = req.params;
        if(req.params.roll != req.user.id){
            res.status(404).json({msg : "Page not found"});
        }
        const organizer = await pool.query("SELECT * FROM student_manage WHERE roll = $1", [req.params.roll]);
        res.json(organizer.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }

});

// Update organizer
router.put('/:roll', async (req, res) => {

    try{
        const roll = req.params.roll;
        const eid = req.body.eid;
        const rid = req.body.rid;

        const updateOrganizer = await pool.query("UPDATE student_manage SET eid = $1, rid = $2 WHERE roll = $3", [eid, rid, roll]);
        res.json("Organizer was updated");
    }
    catch (err){
        console.error(err.message);
    }

});

// Delete organizer
router.delete('/:roll', authenticateToken,async (req, res) => {
    try{
        const roll = req.params.roll;
        if(roll != req.user.id){
            res.status(404).json({msg : "page not found"});
        }
        const deleteOrganizer = await pool.query("DELETE FROM student_manage WHERE roll = $1", [roll]);
        res.json("Organizer was deleted");
    }
    catch (err){
        console.error(err.message);
    }
});

// module.exports = router;
export default router;