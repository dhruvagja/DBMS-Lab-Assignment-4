import express from 'express';
import pool from '../../db.js';
const router = express.Router();

// display the volunteers in event organized by organizer

router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const role = user.rows[0].role;
        if(role === 'organizer'){
            // console.log(`${id}, ${role}`);
            const allVolunteeredEvents = await pool.query("SELECT event.eid,event_has_volunteer.roll,event.ename,event.type FROM event_has_volunteer ,event, student_manage WHERE event_has_volunteer.eid = event.eid and event.eid = student_manage.eid and student_manage.roll = $1",[id]);
            res.json(allVolunteeredEvents.rows);
        }
        else{
            res.status(400).json({msg: "Invalid Role"});
        }
        
    }
    catch (err){
        console.error(err.message);
    }
});

export default router;