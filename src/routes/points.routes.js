const express = require("express");
const router = express.Router();

const { createPoint, getAllPoints, getPointById ,filterPointsByLatLng } = require("../controllers/points.controller")

router.get("/", getAllPoints)
router.post("/", createPoint )
router.get("/point/:id", getPointById)


router.get("/filter-points", filterPointsByLatLng);

module.exports = router;