const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "my_recipes",
})

app.get('/recipes', (req, res) => {
    const sql = "SELECT * FROM recipes";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

app.get('/random-recipe', (req, res) => {
    const sql = "SELECT * FROM recipes ORDER BY RAND() LIMIT 1;";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

app.listen(port, () => {
    console.log("Listening to port: " + port);
})