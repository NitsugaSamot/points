const express = require("express");
const router = express.Router();

const { createPoint, getAllPoints, getPointById ,filterPointsByLatLng, filterPointsByMaterial, editPointById, deletePointById, deleteAllPoints } = require("../controllers/recyclingcenter.controller")

router.get("/points", getAllPoints)
router.post("/create", createPoint )
router.get("/point/:id", getPointById)

router.get("/filter-points", filterPointsByLatLng);

router.get("/filter-points-by-materials/:materialId", filterPointsByMaterial);

router.put("/edit/:id", editPointById);

router.delete("/delete/:id", deletePointById);
router.delete("/delete", deleteAllPoints);

module.exports = router;

// const express = require("express");
// const router = express.Router();

// const { createPoint, getAllPoints, getPointById ,filterPointsByLatLng } = require("../controllers/recyclingcenter.controller")

// router.get("/points", getAllPoints)
// router.post("/points", createPoint )
// router.get("/point/:id", getPointById)

// router.get("/filter-points", filterPointsByLatLng);

// module.exports = router;