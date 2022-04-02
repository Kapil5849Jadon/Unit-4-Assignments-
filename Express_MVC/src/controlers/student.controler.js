const express =require("express");

const router =express.Router();

const Student = require("../models/student.model");
const crudController = require("./crud.controller")

// ----------------------------------POST CRUD----------------------------------------
router.get("", crudController(Student).getAll);

router.get("/:id", crudController(Student).getOne);

router.post("", crudController(Student).post );

router.patch("/:id", crudController(Student).patchOne);

router.delete("/:id", crudController(Student).deleteOne);

module.exports = router;
