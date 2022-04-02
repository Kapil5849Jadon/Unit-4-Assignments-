const express =require("express");

const router =express.Router();

const Submission = require("../models/submission.model");
const crudController = require("./crud.controller")

// ----------------------------------SUBMISSION CRUD----------------------------------------
router.get("", crudController(Submission).getAll);

// router.get("/:id", crudController(Submission).getOne);

router.get("/:evl_id", async (req, res)=>{
     try {
          const allSubmission = await Submission.find({evaluation_id : req.params.evl_id}).populate({path: "student_id", select: ["roll"], populate:[{path:"batch_id"}], populate:[{path:"user_id"}]})
          // const students = allSubmission.map(async (el)=>{
          //      await Submission.find({student_id:el.student_id})//.populate({{path: "post_id"})
          // });
          return res.status(200).send(allSubmission);
     } catch (err) {
          return res.status(500).send(err.message);
     }
});

router.post("", crudController(Submission).post );

router.patch("/:id", crudController(Submission).patchOne);

router.delete("/:id", crudController(Submission).deleteOne);

module.exports = router;
