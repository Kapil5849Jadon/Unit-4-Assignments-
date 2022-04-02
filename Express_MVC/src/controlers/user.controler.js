const express = require("express");

const router = express.Router();

const User = require("../models/user.model");
const crudController = require("./crud.controller")
// ----------------------------------USER CRUD----------------------------------------


router.get("", crudController(User).getAll);

router.get("/:id", crudController(User).getOne);

router.post("", crudController(User).post );

router.patch("/:id", crudController(User).patchOne);

router.delete("/:id", crudController(User).deleteOne);

module.exports = router;