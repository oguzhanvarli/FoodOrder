const express = require('express');
const mongoose = require('mongoose');
//const { default: Food } = require('../client/src/components/Food');
const cors = require('cors');
const FoodModel = require('./models/FoodModel');
const { db } = require('./models/FoodModel');
const app = express();

app.use(express.json());
app.use(cors());



//mongoose.connect("mongodb+srv://admin:1234@cluster0.0fgud.mongodb.net/food-app?retryWrites=true&w=majority")



app.get("/getfoods", (req, res) => {
    FoodModel.find({}, (err,result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    });
})

app.listen(3030, () => {
    console.log("Server is runing!")
});