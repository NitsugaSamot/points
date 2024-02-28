const express = require("express");
const router = express.Router();

const { createPoint, getAllPoints, getPointById ,filterPointsByLatLng, filterPointsByMaterial, filterPointsByMaterials, editPointById, deletePointById, deleteAllPoints } = require("../controllers/recyclingcenter.controller")

router.get("/points", getAllPoints)
router.post("/create", createPoint )
router.get("/point/:id", getPointById)

router.get("/filter-points", filterPointsByLatLng);

// Ruta adicional para manejar el nombre del material en minúsculas
router.get('/filter-points-by-materials/:materialName([a-zA-Z]+)', (req, res, next) => {
    req.params.materialName = req.params.materialName.charAt(0).toUpperCase() + req.params.materialName.slice(1).toLowerCase();
    next();
}, filterPointsByMaterial);


router.get("/filter-many-points-by-materials/:materialIds", filterPointsByMaterials);


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