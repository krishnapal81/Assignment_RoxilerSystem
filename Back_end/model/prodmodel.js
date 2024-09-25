let mongoose = require("mongoose")

let productsch = new mongoose.Schema({
    "id":Number,
    "title":String,
    "price":{type:Number, required:true},
    "description":String,
    "category":String,
    "image":String,
    "sold": { type: Boolean, required:true },
    "dateOfSale": {type:Date}
})

let prodMod = mongoose.model("products",productsch)
module.exports = prodMod