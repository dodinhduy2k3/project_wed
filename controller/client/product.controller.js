const Product = require('../../model/product.model')
module.exports.index = async (req,res)=>{
    const products = await Product.find({})

    // console.log(products)
    const newProducts = products.map(item =>{
        item.priceNew= ((item.price * (100 - item.discountPercentage))/100).toFixed(0)

        return item
    })
    // console.log(newProducts)
    res.render("client/pages/products/index.pug",{
        pagetitle : "Trang Danh Sách Sản Phẩm ",
        products: newProducts

    });

}