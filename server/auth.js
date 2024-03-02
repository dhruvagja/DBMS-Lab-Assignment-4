import express from 'express';
const router = express.Router();
// const bcrypt = require('bcrypt');
// const pool = require('./db');
import bcrypt from 'bcrypt';
import pool from './db.js';
import jwt from 'jsonwebtoken';

import 'dotenv/config';


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];


    if(token == null){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

export default authenticateToken;