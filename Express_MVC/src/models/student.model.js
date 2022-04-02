const mongoose = require("mongoose");

//POST Schema & Model
const studentSchema =new mongoose.Schema({
    roll: {type: String, required: true},
    batch_id: {type: mongoose.Schema.Types.ObjectId, ref:"batch"},
    user_id: {type: mongoose.Schema.Types.ObjectId, ref:"user"},
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("student", studentSchema)

// Student :- has fields like roll id, current batch, createdAt, updatedAt