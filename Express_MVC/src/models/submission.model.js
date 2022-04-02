const mongoose = require("mongoose");

const submissionSchema= new mongoose.Schema({
    evaluation_id: {type: mongoose.Schema.Types.ObjectId, ref:"evaluation" },
    student_id: {type: mongoose.Schema.Types.ObjectId, ref:"student"},
    marks: {type: Number, required: true},
},{
    versionKey: false,
    timestamps: true,
})

module.exports= mongoose.model("submission",submissionSchema);


// Submission :- has some submissions related details like evaluation_id(this will reference the evaluations collection), student_id(this will reference the user collection), marks, createdAt, updatedAt