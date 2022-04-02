const express = require("express");

const connect =require("./config/db")

const userController = require("./controlers/user.controler");
const studentController =require("./controlers/student.controler");
const SubmissionController =require("./controlers/submission.controller");
const BatchController =require("./controlers/batch.controler");
const EvaluationController = require("./controlers/evaluation.controler");

const app = express();

app.use(express.json());

app.use("/user", userController )
app.use("/student", studentController )
app.use("/submission", SubmissionController )
app.use("/batch", BatchController )
app.use("/evaluation", EvaluationController)


//---------------------------SERVER-----------------------
app.listen(5050, async function(){
    try {
        await connect();
        console.log("listing at port no 5050")
    } catch (e) {
        return res.status(500).send("Error:",e.message)
    }
})




