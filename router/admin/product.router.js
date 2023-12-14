const express = require("express");
const router = express.Router()
const controller = require("../../controller/admin/product.controller")


router.get("/",controller.products);


module.exports= router
