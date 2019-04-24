const express = require("express");
const router = express.Router();

router.use("/student", require("./api/studentRoutes"));

//add more api routes here

module.exports = router;