const express = require('express');
// không cần khia báo app , đứng từ router để tạo router luôn 
const router = express.Router();
const controller = require("../../controller/client/product.controller")
// local/products/"Danh sachs Sanr Phẩm"
router.get('/',controller.index)

router.get('/add', function (req, res) {
    res.send("thêm sản Phẩm ");
  })

module.exports=router