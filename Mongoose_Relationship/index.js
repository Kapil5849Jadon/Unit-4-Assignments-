const express = require("express");
const mongoose = require("mongoose");

const connect =()=>{
    return mongoose.connect("mongodb+srv://Kapil_Jadon:jadonkp1221@cluster0.54jxz.mongodb.net/Mongoose_Relationship?retryWrites=true&w=majority")
}

const app = express();

app.use(express.json());


// Section ( 1 Book can belong to only one section at a time but 1 section can have multiple books )
const sectionSchema = new mongoose.Schema({
    section_name: {type: String, required:true},
},{
    versionKey:false,
    timestamps:true,
})
const Section = mongoose.model("section", sectionSchema)
// Books ( Book can be written by 1 or more author and also contains name, body )
const bookSchema = new mongoose.Schema({
    name: {type: String, required:true},
    body: {type:String, required:true},
    auther_id: [{type: mongoose.Schema.Types.ObjectId, ref:"auther", required:true}],
    section_id: {type: mongoose.Schema.Types.ObjectId, ref:"section", required:true}
},{
    versionKey:false,
    timestamps:true,
})
const Book = mongoose.model("book", bookSchema)
// Author ( an author can write one or more books and he also has first_name and last_name)
const autherSchema = new mongoose.Schema({
    first_name:{type: String, required:true},
    last_name:{type: String, required:true},
},{
    versionKey:false,
    timestamps:true,
})
 
const Auther = mongoose.model("auther", autherSchema)
// question controler
app.get("/books/:id", async (req,res)=>{
    try {
        const books = await Book.find({auther_id: req.params.id}).populate({path: "auther_id", select: ["first_name","last_name"]}).lean().exec();
        return res.send(books)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.get("/books/section/:id", async (req,res)=>{
    try {
        const books = await Book.find({section_id: req.params.id}).populate({path: "auther_id", select: ["first_name","last_name"]}).populate({path: "section_id", select: "section_name"}).lean().exec();
        return res.send(books)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})

app.get("/books/:section_id/:auther_id", async (req,res)=>{
    try {
        const books = await Book.find({$and: [{section_id: req.params.section_id},{auther_id: req.params.id}]}).populate({path: "auther_id", select: ["first_name","last_name"]}).populate({path: "section_id", select: "section_name"}).lean().exec();
        return res.send(books)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})






//--------------------------------------BOOK CRUD-----------------------------------------
app.get("/books", async (req,res)=>{
    try {
        const book = await Book.find().populate({path: "auther_id", select: ["first_name","last_name"]}).populate({path: "section_id", select: "section_name"}).lean().exec();
        // 
        return res.send(book)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.post("/books", async (req,res)=>{
    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.patch("/books/:id", async (req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.send(book)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.delete("/books/:id", async (req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(book)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
//---------------------------AUTHER CRUD-----------------------------------------
app.get("/auther", async (req,res)=>{
    try {
        const auther = await Auther.find().lean().exec();
        return res.send(auther)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.post("/auther", async (req,res)=>{
    try {
        const auther = await Auther.create(req.body);
        return res.status(201).send(auther)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.patch("/auther/:id", async (req,res)=>{
    try {
        const auther = await Auther.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.send(auther)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.delete("/auther/:id", async (req,res)=>{
    try {
        const auther = await Auther.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(auther)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
//---------------------------SECTION CRUD-----------------------------------------
app.get("/section", async (req,res)=>{
    try {
        const section = await Section.find().lean().exec();
        return res.send(section)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.post("/section", async (req,res)=>{
    try {
        const section = await Section.create(req.body);
        return res.status(201).send(section)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.patch("/section/:id", async (req,res)=>{
    try {
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.send(section)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
app.delete("/section/:id", async (req,res)=>{
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(section)
    } catch (e) {
        return res.status(500).send(e.message)
    }
})
// find all books written by an author
// find books in a section
// find books in a section that are not checked out
// find books of 1 author inside a section

app.listen(5050, async ()=>{
    try {
        await connect()
        console.log("listenig at port no 5050")
    } catch (e) {
        console.log(e.message)
    }
})


