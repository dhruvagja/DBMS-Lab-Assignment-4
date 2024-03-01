const express = require('express');
const cors = require('cors');
const pool = require('./db');


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes

// student
app.use('/api/student', require('./routes/api/student'));
// app.use('/api/student/roll' ,require('./routes/api/student'));

// organizer
app.use('/api/organizer', require('./routes/api/organizer'));

// participant
app.use('/api/participant', require('./routes/api/participant'));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})