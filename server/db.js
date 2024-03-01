const Pool = require('pg').Pool;

const pool = new Pool({
    user: "21CS10022",
    password: "21CS10022",
    host: "10.5.18.68",
    port: 5432,
    database: "21CS10022"
});

module.exports = pool;