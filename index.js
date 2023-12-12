const express = require('express');
const router = require("./router/client/index.router")
require('dotenv').config()
// console.log(process.env) 
const app = express();
const port = process.env.PORT;
// nhúng pug
app.set('view engine', 'pug');
app.set("views", "./views");
// router
// truyền biến app sang router.index
router(app)
app.listen(port,()=>{
  console.log('Lắng Nghe Cổng ',port);
})