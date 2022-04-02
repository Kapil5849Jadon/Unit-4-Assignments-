const express = require("express");

const router = express.Router();

const Batch = require("../models/batch.model");
const crudController = require("./crud.controller")
// ----------------------------------TAG CRUD----------------------------------------

router.get("", crudController(Batch).getAll);

router.get("/:id", crudController(Batch).getOne);

router.post("", crudController(Batch).post );

router.patch("/:id", crudController(Batch).patchOne);

router.delete("/:id", crudController(Batch).deleteOne);

module.exports = router;