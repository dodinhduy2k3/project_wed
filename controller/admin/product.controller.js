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
    // find.status = "active";
    if (req.query.status) {
        find.status = req.query.status
    }
    let keyword = ""
    
    if (req.query.keyword) {
        keyword = req.query.keyword
        const regex = new RegExp(keyword,"i")
        console.log(regex)
        find.title = regex
    }
    let objectPaginations = {
        currentPage: 1,
        limitItem:4
    };

    if (req.query.page){
       objectPaginations.currentPage = parseInt(req.query.page)

    }
    objectPaginations.skip=(objectPaginations.currentPage -1 ) * objectPaginations.limitItem

    
    const products = await Product.find(find).limit(objectPaginations.limitItem).skip(objectPaginations.skip)

    const countProduct = await Product.countDocuments(find)
    objectPaginations.totalPage = Math.ceil(countProduct / objectPaginations.limitItem)
    // console.log(totalPage)
    // console.log(products)
    // console.log(newProducts)
    res.render("admin/page/products/index.pug", {
        pagetitle: "Trang Danh Sách Sản Phẩm ",
        products: products,
        // trả biến filterStatus cho gioa di
        filterStatus : filterStatus,
        keyword : keyword,
        pagination: objectPaginations
    });

}