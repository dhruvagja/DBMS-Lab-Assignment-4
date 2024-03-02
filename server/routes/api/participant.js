// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');

import express from 'express';
import pool from '../../db.js';
const router = express.Router();

// create a participant

router.post('/', async (req, res) => {
    try{
        const name = req.body.name;
        const pid = req.body.pid;
        const collegename = req.body.collegename;

        const newParticipant = await pool.query("INSERT INTO participant (name, pid, collegename) VALUES($1, $2, $3) RETURNING *", [name, pid, collegename]);
        
        res.json(newParticipant);
    }
    catch (err){
        console.error(err.message);
        return res.status(500).json({msg: "Server Error"});
    }
});

// GET all participants
router.get('/', async (req, res) => {
    try{
        const allParticipants = await pool.query("SELECT * FROM participant");
        res.json(allParticipants.rows);
    }
    catch (err){
        console.error(err.message);
    }
});

// GET participant
router.get('/:pid', async (req, res) => {

    try{
        const participant = await pool.query("SELECT * FROM participant WHERE pid = $1", [req.params.pid]);
        res.json(participant.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }

});

// Update participant
router.put('/:pid', async (req, res) => {

    try{
        const pid = req.params.pid;
        const name = req.body.name;
        const collegename = req.body.collegename;

        const updateParticipant = await pool.query("UPDATE participant SET name = $1, collegename = $2 WHERE pid = $3", [name, collegename, pid]);
        res.json(`Participant ${pid} was updated`);
    }
    catch (err){
        console.error(err.message);
    }
});

// Delete participant
router.delete('/:pid', async (req, res) => {
    try{
        const pid = req.params.pid;
        const deleteParticipant = await pool.query("DELETE FROM participant WHERE pid = $1", [pid]);
        res.json("Participant was deleted");
    }
    catch (err){
        console.error(err.message);
    }
});

// module.exports = router;
export default router;