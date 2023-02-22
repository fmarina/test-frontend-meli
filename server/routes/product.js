const express = require("express");
const router = express.Router();
const { getProducts, getProductById } = require("../controllers/product");

router.get("/items", getProducts);

router.get("/items/:id", getProductById);

module.exports = router;
