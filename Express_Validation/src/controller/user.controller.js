const express = require("express");

const User = require("../models/user.module");

const { body, validationResult } = require("express-validator");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await User.find().lean().exec();
    return res.send(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.post(
  "",
  body("id")
    .isNumeric()
    .withMessage("Id must be a number")
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ id: value });
      if (user) {
        throw new Error("Id already in use");
      }
      return true;
    }),
  body("first_name")
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage("Name must be 3 to 20 latters"),
  body("first_name")
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage("Name must be 1 to 20 latters"),
  body("age").isNumeric().isLength({ min: 1, max: 100 }),
  body("mail")
    .isEmail()
    .custom(async (value /*,{req}*/) => {
      const user = await User.findOne({ mail: value });
      if (user) {
        throw new Error("E-mail already in use");
      }
      return true;
    }),
  body("password").custom(async (value) => {
    const ckeckPass =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (ckeckPass.test(value)) {
      return true;
    }
    throw new Error("Password is not Strong");
  }),
  body("pincode").isLength({ min: 6, max: 6 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        let newError;
        newError = errors.array().map((err) => {
          return { key: err.param, message: err.msg };
        });
        return res.status(400).json({ errors: newError });
      }
      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  }
);
module.exports = router;
