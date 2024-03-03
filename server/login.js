// const express = require('express');
import express from 'express';
const router = express.Router();
// const bcrypt = require('bcrypt');
// const pool = require('./db');
import bcrypt from 'bcrypt';
import pool from './db.js';
import jwt from 'jsonwebtoken';

import 'dotenv/config';

router.post('/',  async (req, res) => {

    try{
        const id = req.body.id;
        console.log("pass: ", req.body.password);
        
        const user = await pool.query("SELECT id,password from users where users.id = $1 and users.role = $2", [id,req.body.role]);
        
        if(user == null){
            res.status(400).send("User not found");
        }

        if(bcrypt.compare(req.body.password, user.rows[0].password)){
            
            const user = { id : id };   
            
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

            console.log("Logged in");
            res.status(200).json({accessToken : accessToken});


            // res.status(200).send("User found");

        }else{
            res.status(500).send("Wrong passoword");
        }

        
    }catch(err){
        res.status(400).send(err.message);
    }

});





// module.exports = router;
export default router;