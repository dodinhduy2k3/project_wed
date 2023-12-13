const Product = require('../../model/product.model')
module.exports.index = async (req,res)=>{
    const products = await Product.find({})
    // console.log(products)
    res.render("client/pages/products/index.pug",{
        pagetitle : "Trang Danh Sách Sản Phẩm ",
        products: products

    });

}