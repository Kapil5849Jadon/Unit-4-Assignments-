const express = require("express");

const User = require("../models/user.model");

const { upload, uploadSingle, uploadMultiple } = require("../middlewares/file_upload");


const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("/single", uploadSingle("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      profile_pic : req.file.path,
    });

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("/multiple",uploadMultiple("profile_pic"), async (req, res) => {
  try {
    const filePaths = req.files.map((file)=>file.path);
    
    const user = await User.create({
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      profile_pic : filePaths,
    });

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
