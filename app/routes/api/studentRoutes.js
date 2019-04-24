const express = require("express");
const router = express.Router();

// controller here
const StudentController = require("../../controller/studentController");
const studentController = new StudentController();

// student routes
router.get("/", function (req, res) {
    studentController.findAll(res);
    // res.send([{hello:"world"}]);
});

module.exports = router;