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

// OBTENER RECETA
app.get('/recipes', (req, res) => {
    const sql = "SELECT * FROM recipes";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

// OBTENER RECETA RANDOM
app.get('/random-recipe', (req, res) => {
    const sql = "SELECT * FROM recipes ORDER BY RAND() LIMIT 1;";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

// OBTENER INGREDIENTES
app.get('/ingredients', (req, res) => {
    const sql = "SELECT * FROM ingredients";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

// OBTENER DATOS DE LA RECETA X
app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM recipes WHERE `id` = ?";
    db.query(sql, [id], (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

// OBTENER INGREDIENTES DE LA RECETA X
app.get('/ingredients/:id', (req, res) => {
    const sql = "SELECT * FROM `ingredients` JOIN recipes_ingredients ON ingredients.id = recipes_ingredients.ingredient_id WHERE recipes_ingredients.recipe_id = ?";
    db.query(sql, [req.params.id] , (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

app.listen(port, () => {
    console.log("Listening to port: " + port);
})