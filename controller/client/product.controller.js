module.exports.index = (req,res)=>{
    res.render("client/pages/products/index.pug",{
        pagetitle : "Trang Danh Sách Sản Phẩm "
    });

}