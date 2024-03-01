const Pool = require('pg').Pool;

const pool = new Pool({
    user: "21CS30019",
    password: "21CS30019",
    host: "10.5.18.70",
    port: 5432,
    database: "21CS30019"
});

module.exports = pool;