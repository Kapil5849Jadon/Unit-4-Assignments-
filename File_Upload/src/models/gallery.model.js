const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
     pictures: [{type: pictures}],
     user_id : {type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
},{
     versionKey: false,
     timestamps: true,
});

module.exports = mongoose.model("gallery", gallerySchema);

// pictures ( multiple images are allowed );
// user_id ( belong to the user);