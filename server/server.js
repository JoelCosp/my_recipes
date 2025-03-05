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

// OBTENER CATEGORIAS
app.get('/categories', (req, res) => {
    const sql = "SELECT * FROM categories";
    db.query(sql, (err, result) => {
        if(err) {
            res.json({message: "Server error"});
        }
        return res.json(result);
    })
})

//CREAR receta
app.post('/create-recipe', (req, res) => {

    const name = req.body.name;
    const description = req.body.description;
    const time = req.body.time;
    const difficulty = req.body.difficulty;
    const img_url = req.body.img_url;
    const category_id= req.body.category_id

    const sql = "INSERT INTO `recipes`(`name`, `description`, `time`, `difficulty`, `img_url`, `category_id`) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [name , description, time, difficulty, img_url , category_id], (err, result) => {
        if(err) {
            return res.json({ message: "Server error", error: err });
        }
        res.json({ message: "Recipe created successfully", result });
    });
})

app.listen(port, () => {
    console.log("Listening to port: " + port);
})