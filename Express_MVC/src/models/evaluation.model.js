const mongoose = require("mongoose");


const evaluationSchema =new mongoose.Schema({
    date_of_evaluation: {type: Date, required: true},
    batch_id: {type: mongoose.Schema.Types.ObjectId, ref:"batch", required: true},
    instructor_id: {type: mongoose.Schema.Types.ObjectId, ref:"user", required: true},
},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model("evaluation", evaluationSchema)

// Evaluation :- has some evaluation related details like date_of_evaluation, instructor( this will reference the user collection), batch_id ( this will reference the batches collection)