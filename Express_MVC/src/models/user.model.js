const mongoose = require("mongoose");
//user Schema and model
const userSchema= new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    dob: {type: Date, required: true},
    gender: {type: String, required: false, default: "Male"},
    type: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true,
})

module.exports= mongoose.model("user",userSchema);

// Users :- has all the basic details like firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt