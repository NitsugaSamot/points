const express = require("express");
const router = express.Router();
const { createCategory, getAllCategories, getAllInfoCategories, getCategoryById, getCategoryInfoById } = require("../controllers/category.controller");

router.post("/category", createCategory);
router.get("/", getAllCategories)
router.get("/categories", getAllInfoCategories)
router.get("/info-categoria/:id", getCategoryById )


module.exports = router;
