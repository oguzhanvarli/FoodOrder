const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:1234@cluster0.0fgud.mongodb.net/food-app?retryWrites=true&w=majority")

var db = mongoose.connection

db.on("connected", () => {
    console.log("someone connected!")
})

db.on("error", () => {
    console.log("Mongo connection fail!")
})

module.export = mongoose;
