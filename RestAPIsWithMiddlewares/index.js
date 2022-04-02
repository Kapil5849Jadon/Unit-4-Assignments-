const express= require("express");

let app=express();


app.get("/books",allBooks,(req,res)=>{
    res.send("book api call")
})

function allBooks(req,res,next){
    console.log("Fetching all books");
    next();
}

app.get("/books/:name",(req,res)=>{
    req.name = req.params.name
    res.send({bookName: req.name})
})
// function allBooks(req,res,next){
//     console.log("Fetching all books");
//     next();
// }

app.listen(5050,function(){
    console.log("express server started at 5050")
})