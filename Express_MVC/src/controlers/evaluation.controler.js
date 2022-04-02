const express =require("express");

const router =express.Router();

const Evaluation = require("../models/evaluation.model")
const crudController = require("./crud.controller")
// ----------------------------------EVALUATION CRUD----------------------------------------


router.get("", crudController(Evaluation).getAll);

router.get("/:id", crudController(Evaluation).getOne);

router.post("", crudController(Evaluation).post );

router.patch("/:id", crudController(Evaluation).patchOne);

router.delete("/:id", crudController(Evaluation).deleteOne);

module.exports =router;