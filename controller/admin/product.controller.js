const Product = require('../../model/product.model')
module.exports.index = async (req, res) => {
    // tạo ra một mảng gồm các nút bấm 
    // mỗi 1 object là 1 nut bấm 
    // có các status nếu nút bấm đầu tiên là tất cả thì status là active tương tự các nút còn lại

    let filterStatus = [
        {
            name : "Tất Cả",
            status : "",
            class:""
        },
        {
            name : "Hoạt Động",
            status : "active",
            class:""
        },
        {
            name : "Dừng Hoạt Động",
            status: "inactive",
            class: ""
        }
    ]
    // nếu người dùng gửi status nên URL
    if (req.query.status) {
        // tìm đến mảng tương ứng ở trên 
        const index = filterStatus.findIndex((item)=>{
            // cập nhật class active cho nut
            return item.status == req.query.status
        });
        // console.log(index)
        filterStatus[index].class="active"

    }else{
        const index = filterStatus.findIndex((item)=>{
            return item.status == ""
        })
        filterStatus[index].class="active"

    }
        // console.log(filterStatus)

    // console.log(req.query.status)
    let find = {
        deleted: false,
    }
    find.status = "active";
    if (req.query.status) {
        find.status = req.query.status
    }
    const products = await Product.find(find)
    // console.log(products)
    // console.log(newProducts)
    res.render("admin/page/products/index.pug", {
        pagetitle: "Trang Danh Sách Sản Phẩm ",
        products: products,
        // trả biến filterStatus cho gioa diện
        filterStatus : filterStatus
    });

}