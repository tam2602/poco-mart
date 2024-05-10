// Lấy ra elements của trang

const formRegister = document.getElementById("formRegister");
const userNameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const rePasswordElement = document.getElementById("repassword");
const addressElement = document.getElementById("address");

//Element lỗi
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repasswordError = document.getElementById("repasswordError");

//Lấy dữ liệu từ localStorage
const userLocal=JSON.parse(localStorage.getItem("users"))||[];


/**
 * validate địa chỉ email
 * @param {*} email : chuỗi email người dùng nhập vào
 * @returns : Dữ liệu email người dùng định dạng, undifined nếu email không đúng định dạng
 */
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


//Lắng nghe sự kiện submit form đăng ký tài khoản
formRegister.addEventListener("submit", function (e) {
    // Ngăn sự kiện load lại trang
    e.preventDefault();

    // validate dữ liệu đầu vào
    if (!userNameElement.value) {
        //Hiển thị lỗi
        usernameError.style.display = "block";

    } else {
        //Ẩn lỗi
        usernameError.style.display = "none";
    } if (!emailElement.value) {
        //Hiển thị lỗi
        emailError.style.display = "block";

    } else {
        //Ẩn lỗi
        emailError.style.display = "none";
        //Kiểm tra định dạng email
        if (!validateEmail(emailElement.value)) {
            emailError.style.display = "block";
            emailError.innerHTML = "Email không đúng định dạng"
        }
    } if (!passwordElement.value) {
        //Hiển thị lỗi
        passwordError.style.display = "block";

    } else {
        //Ẩn lỗi
        passwordError.style.display = "none";
    } if (!rePasswordElement.value) {
        //Hiển thị lỗi
        repasswordError.style.display = "block";

    } else {
        //Ẩn lỗi
        repasswordError.style.display = "none";
    }
    //Kiểm tra mật khẩu
    if (passwordElement.value !== rePasswordElement.value) {
        repasswordError.style.display = "block"
        repasswordError.innerHTML = "Mật khẩu không khớp";
    }

    if (userNameElement.value && emailElement.value && passwordElement.value && rePasswordElement.value && passwordElement.value === rePasswordElement.value && validateEmail(emailElement.value)) {
        //Lấy dữ liệu từ form và gộp thành đối tượng user
        const user={
            userId: Math.ceil(Math.random()*10000000),
            userName:userNameElement.value,
            email:emailElement.value,
            password:passwordElement.value,
            address:addressElement.value
        };

        //push user vào trong mảng userLocal
        userLocal.push(user);
        //Lưu trữ dữ liệu lên local
        localStorage.setItem("users",JSON.stringify(userLocal));

        //chuyển hướng về trang đăng nhập
        setTimeout(function(){
            //chuyển hướng sau 1s
            window.location.href="login.html";
        },1000)
        
    }

});
