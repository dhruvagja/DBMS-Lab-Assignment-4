// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const pool = require('./db');

import express from 'express';
import bcrypt from 'bcrypt';
import pool from './db.js';


const router = express.Router();


router.post('/', async (req, res) => {

    console.log(req.body);

    try{
        const id = req.body.id;
        //const password = req.body.password;

        const salt = bcrypt.genSaltSync();
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);
        
        // NOTE: changed the query to add role
        const newuser = await pool.query("INSERT INTO users (id,password,role) VALUES($1, $2, $3) RETURNING *", [id, hashedPassword, req.body.role]);

        res.status(201).send();
        
    } catch(err){
        res.status(400).send(err.message);
    }

});

// module.exports = router;
export default router;