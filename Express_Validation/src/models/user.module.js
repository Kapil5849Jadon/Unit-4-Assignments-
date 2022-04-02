const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     id: {type: Number, required: true},
     first_name : {type: String, required: true},
     last_name : {type: String, required: true},
     age: {type: Number, required: true},
     mail : {type: String, required: true, unique: true},
     password : {type: String, required: true},
     pincode: {type: Number, required: true},
     gender: {type: String, required: true, default: "male"}
     
},{
     versionKey: false,
     timestamps: true,
})

module.exports = mongoose.model("user", userSchema);
