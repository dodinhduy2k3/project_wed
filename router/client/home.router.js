const express = require('express');
// không cần khia báo app , đứng từ router để tạo router luôn 
const router = express.Router();
// local/products/"Danh sachs Sanr Phẩm"
const controller = require("../../controller/client/home.controller")
router.get('/',controller.index )


module.exports=router