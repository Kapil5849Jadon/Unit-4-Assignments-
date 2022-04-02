const mongoose = require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://Kapil_Jadon:jadonkp1221@cluster0.54jxz.mongodb.net/Express_MVC?retryWrites=true&w=majority")
}