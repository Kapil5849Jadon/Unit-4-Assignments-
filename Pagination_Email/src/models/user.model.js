const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     id: {type: Number, required: true},
     name: {type: String, required: true},
     age: {type:Number, required: true},
     mail: {type: String, required: true},
},{
     versionKey: false,
     timestamps: true,
})

module.exports = mongoose.model("user", userSchema)