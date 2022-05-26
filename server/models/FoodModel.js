const mongoose = require('mongoose');

//mongoose.connect("mongodb+srv://admin:1234@cluster0.0fgud.mongodb.net/food-app?retryWrites=true&w=majority")

const foodSchema = new mongoose.Schema({
    name : {type: String, required:true},
    varient: [],
    prices : [],
    category: {type:String, required:true},
    img: {type:String, required:true},
    desc: {type:String, required:true}
},
{
    timestamps:true
});

const FoodModel = mongoose.model("foods", foodSchema);
module.exports = FoodModel;