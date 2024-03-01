// const express = require('express');
// const cors = require('cors');
// const pool = require('./db');

// const jwt = require('jsonwebtoken');

import express from 'express';
import cors from 'cors';
import pool from './db.js';
import jwt from 'jsonwebtoken';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import eventroute from './routes/api/event.js';
import organizerroute from './routes/api/organizer.js';
import participantroute from './routes/api/participant.js';
import registered_eventsroute from './routes/api/registered_events.js';
import studentroute from './routes/api/student.js';
import loginroute from './login.js';
import signuproute from './signup.js';
import adminRouter from './admin.js';


const app = express();

// middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

//Admin

// Login / signup

app.use('/admin', adminRouter);

app.use('/signup', signuproute);

app.use('/login', loginroute);

// create a student

app.use('/api/student', studentroute);
// app.use('/api/student/roll' ,require('./routes/api/student'));

// organizer
app.use('/api/organizer', organizerroute);

// participant
app.use('/api/participant', participantroute);

// event
app.use('/api/event', eventroute);

// registered events
app.use('/api/registered_events', registered_eventsroute);


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})