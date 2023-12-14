const express = require('express');
const database = require('./config/database')
const router = require("./router/client/index.router")
const routeradmin = require('./router/admin/index.router');
const systemConfig = require('./config/system')

require('dotenv').config()
database.connect()
// console.log(process.env) 
const app = express();
const port = process.env.PORT;
// nhúng pug
app.set('view engine', 'pug');
// app.set("views", "./views");
app.set('views', `${__dirname}/views`)
// router
// truyền biến app sang router.index
// app.use(express.static("public"))
app.use(express.static(`${__dirname}/public`))
app.locals.prefixAdmin = systemConfig.PREFIX_ADMIN
router(app)
routeradmin(app)
app.listen(port,()=>{
  console.log('Lắng Nghe Cổng ',port);
})