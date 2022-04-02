const express = require("express");

const Gallery = require("../models/gallery.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const gallery = await Gallery.find().lean().exec();
    return res.send(gallery);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("", async (req, res) => {
  try {
    const gallery = await Gallery.create(req.body);

    return res.status(201).send(gallery);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});
module.exports = router;
