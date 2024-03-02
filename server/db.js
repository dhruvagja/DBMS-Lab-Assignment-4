import * as pg from 'pg'
const { Pool } = pg.default;

// const pool = new Pool({
//     user: "21CS10022",
//     password: "21CS10022",
//     host: "10.5.18.68",
//     port: 5432,
//     database: "21CS10022"
// });

const pool = new Pool({
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

// module.exports = pool;
export default pool;