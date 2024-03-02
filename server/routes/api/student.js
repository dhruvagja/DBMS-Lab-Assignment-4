// const express = require('express');
// const router = express.Router();
// const pool = require('../../db');

import express from 'express';
import pool from '../../db.js';
const router = express.Router();

// create a student

router.post('/', async (req, res) => {
    try{
        console.log(req.body.roll);
        const name = req.body.name;
        const roll = req.body.roll;
        const dept = req.body.dept;

        const newStudent = await pool.query("INSERT INTO student (roll, name, dept) VALUES($1, $2, $3) RETURNING *", [roll, name, dept]);
        
        // inserting in volunteer table to maintain the foreign key constraint
        const newVolunteer = await pool.query("INSERT INTO volunteer (roll) VALUES($1) RETURNING *", [roll]);

        res.json(newStudent);
    }
    catch (err){
        console.error(err.message);
    }
});

// GET all students

router.get('/', async (req, res) => {
    try{
        const allStudents = await pool.query("SELECT * FROM student");
        res.json(allStudents.rows);
    }
    catch (err){
        console.error(err.message);
    }
});


// GET student

router.get('/:roll', async (req, res) => {

    try{
        //const { roll } = req.params;
        const student = await pool.query("SELECT * FROM student WHERE roll = $1", [req.params.roll]);
        res.json(student.rows[0]);
    }
    catch (err){
        console.error(err.message);
    }

});


// Update student

router.put('/:roll', async (req, res) => {

    try{
        const roll = req.params.roll;
        const name = req.body.name;
        const dept = req.body.dept;

        const updateStudent = await pool.query("UPDATE student SET name = $1, dept = $2 WHERE roll = $3", [name, dept, roll]);
        res.json("Student was updated");
    }
    catch (err){
        console.error(err.message);
    }

});


// Delete student

router.delete('/:roll', async (req, res) => {

    try{
        const roll = req.params.roll;
        const deleteStudent = await pool.query("DELETE FROM student WHERE roll = $1", [roll]);
        res.json("Student was deleted");
    }
    catch (err){
        console.error(err.message);
    }

});



// module.exports = router;
export default router;