const express = require("express");

const { connect } = require("./config/db");

const userController = require("./controller/user.controller");

const app = express();

app.use(express.json());

app.use("/user", userController);

app.listen(4500, async()=>{
     try {
          await connect();
          console.log("listening at port no 4500");
     } catch (e) {
          console.log(e.message);
     }
});

