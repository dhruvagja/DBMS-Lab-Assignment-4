const express = require('express');
const cors = require('cors');
const pool = require('./db');


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes

// create a student

app.use('/api/student', require('./routes/api/student'));
// app.use('/api/student/roll' ,require('./routes/api/student'));


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})