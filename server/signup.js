const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('./db');


router.post('/', async (req, res) => {

    console.log(req.body);

    try{
        const id = req.body.id;
        //const password = req.body.password;

        const salt = bcrypt.genSaltSync();
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

        const newuser = await pool.query("INSERT INTO users (id,password) VALUES($1, $2) RETURNING *", [id, hashedPassword]);

        res.status(201).send();
        
    } catch(err){
        res.status(400).send(err.message);
    }

});

module.exports = router;