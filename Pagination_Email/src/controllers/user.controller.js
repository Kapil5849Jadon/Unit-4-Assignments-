const express = require("express");
const path = require("path");

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const router = express.Router();

const {sendMail, verificationMail, welcomeMail}= require("../util");

const User = require("../models/user.model");

router.post("", async(req,res)=>{
     try {
          const user = await User.create(req.body);

          eventEmitter.on("User registered",verificationMail )
          eventEmitter.on("User registered",welcomeMail )

          eventEmitter.emit("User registered", {
               from: "admin@gmail.com", 
               to: user.mail, 
               user:user, 
               attachments: [{   // file on disk as an attachment
                    filename: 'name.txt',
                    path: path.join(__dirname, "../name.txt")
               }],
               alternatives: [
                    {
                        contentType: 'text/html',
                        path: path.join(__dirname, "../name.html")
                    }
               ],
          });
          // await sendMail({
          //      from:"admin@masai.com",
          //      to:user.mail,
          //      subject: "Wellcom to Masai",
          //      text: " Congratulation Please wait for further development",
          //      html: "<h1>Congratulation</h1><h4>Please wait for further development</h4>"
          // })
          return res.send("message sent")
     } catch (e) {
          return res.status(500).send(e.message);
     }
})




router.get("", async (req, res)=>{
     try {
          const page = req.query.page || 1;
          const size = req.query.size || 5;
          
          const query = {mail:"c@c.com"}
          const user = await User.find(query).skip((page-1)*size).limit(size).lean().exec();
          
          const totalPage = Math.ceil((await User.find(query).countDocuments())/size) ;
          
          return res.status(200).send({user, totalPage});
     } catch (e) {
          return res.status(500).send(e.message);
     }
})
router.get("/gender", async (req, res)=>{
     try {
          const page = req.query.page || 1;
          const size = req.query.size || 5;
          
          const query = {mail:`${req.params.gender}`}
          const user = await User.find(query).skip((page-1)*size).limit(size).lean().exec();
          
          const totalPage = Math.ceil((await User.find(query).countDocuments())/size) ;
          
          return res.status(200).send({user, totalPage});
     } catch (e) {
          return res.status(500).send(e.message);
     }
})
// router.post("", async (req, res)=>{
//      try {
//           const user = await User.create(req.body);
//           return res.status(201).send(user);
//      } catch (e) {
//           return res.status(500).send(e.message);
//      }
// })
router.patch("/:id", async (req, res)=>{
     try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
          return res.send(user);
     } catch (e) {
          return res.status(500).send(e.message);
     }
})
router.delete("/:id", async (req, res)=>{
     try {
          const user = await User.findByIdAndDelete(req.params.id);
          return res.send(user);
     } catch (e) {
          return res.status(500).send(e.message);
     }
})

module.exports = router;