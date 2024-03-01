const express = require('express');
const cors = require('cors');
const pool = require('./db');

const jwt = require('jsonwebtoken');


const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes


// Login / signup

app.use('/signup', require('./signup'));

app.use('/login', require('./login'));

// create a student

app.use('/api/student', require('./routes/api/student'));
// app.use('/api/student/roll' ,require('./routes/api/student'));

// organizer
app.use('/api/organizer', require('./routes/api/organizer'));

// participant
app.use('/api/participant', require('./routes/api/participant'));

// event
app.use('/api/event', require('./routes/api/event'));

// registered events
app.use('/api/registered_events', require('./routes/api/registered_events'));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})