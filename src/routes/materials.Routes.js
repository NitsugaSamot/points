const express = require("express");
const router = express.Router();

const { QRGenerator } = require("../controllers/materials.controller.js");

router.post("/QRGenerator", QRGenerator);

module.exports = router;
