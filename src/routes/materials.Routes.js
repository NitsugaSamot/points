const express = require("express");
const router = express.Router();

const { QRGenerator, createMaterial, getAllMaterials, deleteAllMaterials, deleteMaterialById, editMaterialById } = require("../controllers/materials.controller.js");

router.post("/QRGenerator", QRGenerator);
router.post("/create", createMaterial);
router.get("/", getAllMaterials);
router.put("/update/:id", editMaterialById);
router.delete("/delete-all", deleteAllMaterials);
router.delete("/delete/:id", deleteMaterialById);

module.exports = router;


// const express = require("express");
// const router = express.Router();

// const { QRGenerator, createMaterial, getAllMaterials } = require("../controllers/materials.controller.js");

// router.post("/QRGenerator", QRGenerator);
// router.post("/create", createMaterial);
// router.get("/", getAllMaterials);

// module.exports = router;
