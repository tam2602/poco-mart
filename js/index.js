//Lấy dữ liệu trên Local về
const userLogin = JSON.parse(localStorage.getItem("userLogin"))

const userLoginElement= document.getElementById("userLogin");
if(userLogin){
    //Hiển thị tên user
    userLoginElement.innerHTML=userLogin.userName;
}else{
    userLoginElement.innerHTML="Đăng nhập";
}

document.querySelectorAll('.fa-cart-plus').forEach(item => {
    item.addEventListener('click', event => {
        // Chuyển người dùng đến trang giỏ hàng
        window.location.href = '/cart.html';
    });
});

function searchProducts() {
    var searchKeyword = document.getElementById("searchInput").value.toLowerCase();
    var products = Array.from(document.getElementsByClassName("col col-md-3 mb-3"));
    
    products.forEach(product => {
        var productName = product.querySelector(".fs-5").innerText.toLowerCase();
        if (productName.includes(searchKeyword)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

