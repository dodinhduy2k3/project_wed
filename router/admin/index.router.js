const dashboardRouter = require("./dashboard.router")
const productsRouter = require("./product.router")
const systemConfig = require("../../config/system")

module.exports=(app)=>{
const PATH_ADMIN = "/" + systemConfig.PREFIX_ADMIN
    
app.use(PATH_ADMIN + '/dashboard',dashboardRouter)
  
  
app.use(PATH_ADMIN + '/products',productsRouter)
}
 