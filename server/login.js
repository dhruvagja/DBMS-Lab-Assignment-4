const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('./db');


router.post('/',  async (req, res) => {

    try{
        const id = req.body.id;
        
        const user = await pool.query("SELECT id,password from users where users.id = $1", [id]);
        
        if(user == null){
            res.status(200).send("User not found");
        }

        if(bcrypt.compare(req.body.password, user.rows[0].password)){
            res.status(200).send("User found");
        }else{
            res.status(200).send("Wrong passoword");
        }


    }catch(err){
        res.status(400).send(err.message);
    }

    

});


module.exports = router;