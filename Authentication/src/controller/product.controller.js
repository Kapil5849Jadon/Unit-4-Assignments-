const express = require("express");

const router = express.Router();

const Product = require("../model/product.model");
const authenticate = require("../middleware/authenticate");


router.get("", async (req, res) => {
  try {
    
    const product = await Product.find().lean().exec();
    return res.send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post("/", authenticate, async (req, res) => {
  try {
    const user_id = req.user_id;
    const product = await Product.create({
      name: req.body.name,
      price : req.body.price,
      user_id : user_id,
    });

    return res.status(201).send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});



module.exports = router;
