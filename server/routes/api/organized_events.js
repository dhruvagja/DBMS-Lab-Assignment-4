const express = require('express');
const router = express.Router();
const pool = require('../../db');

// display all organized events by organizer
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'organizer'){
            const allOrganizedEvents = await pool.query("SELECT * FROM event JOIN student_manage on event.eid = student_manage.eid");
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

module.exports = router;