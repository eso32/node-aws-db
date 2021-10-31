require('dotenv').config()
const mysql = require("mysql");


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: "3306",
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "my_db",
});

db.connect((err) => {
    if (err) {
        console.log(err.message);
        return;
    }

    console.log('connected');
})