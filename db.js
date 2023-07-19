// lib/db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Akhandbhu@11',
    database:'login'
});

connection.connect();
module.exports = connection;