const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes

// create a student

app.post('/students', async (req, res) => {
    try{
        // console.log(req.body.roll);
        const name = req.body.name;
        const roll = req.body.roll;
        const dept = req.body.dept;

        const newStudent = await pool.query("INSERT INTO student (roll, name, dept) VALUES($1, $2, $3) RETURNING *", [roll, name, dept]);
        
        res.json(newStudent);
    }
    catch (err){
        console.error(err.message);
    }
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})