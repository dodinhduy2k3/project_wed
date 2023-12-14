const Product = require('../../model/product.model')
module.exports.index = async (req,res)=>{
    const products = await Product.find({
        
        deleted: false,

    })

    // console.log(products)

    // console.log(newProducts)
    res.render("admin/page/products/index.pug",{
        pagetitle : "Trang Danh Sách Sản Phẩm ",
        products: products

    });

}