import express from 'express';
const router = express.Router();
// const bcrypt = require('bcrypt');
// const pool = require('./db');
import bcrypt from 'bcrypt';
import pool from './db.js';
import jwt from 'jsonwebtoken';

import 'dotenv/config';


