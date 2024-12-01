function validateForm(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    if (fullName === '') {
        alert("Vui lòng không để trống họ và tên");
    }
    if (age === '') {
        alert("Vui lòng không để trống tuổi");
    }
    if (gender === '') {
        alert("Vui lòng chọn giới tính");
    }
}
document.getElementById('registrationForm').addEventListener('submit', function validateForm() {
    let isValid = true;
    let errorMessage = '';
    e.preventDefault();
    let username= document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let verifyPassword = document.getElementById('verifyPassword').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    // let user = {
    //     name: username,
    //     age: age,
    //     phone: phone,
    //     password: password,
    //     verifyPassword: verifyPassword,
    //     gender: gender
    // };
    
    //     localStorage.setItem('user', JSON.stringify(user))
    //     alert('Đăng ký thành công')
    if (username.length < 6 || username.length > 18) {
        errorMessage += 'Username phải từ 6 đến 18 ký tự.\n';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += 'Email không đúng định dạng.\n';
        isValid = false;
    }

    if (password.length < 8 || password.length > 20) {
        errorMessage += 'Password phải từ 8 đến 20 ký tự.\n';
        isValid = false;
    }

    if (password !== verifyPassword) {
        errorMessage += 'Verify Password phải trùng với Password.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }

    return isValid;
})
function saveInfo() {
    if (validateForm()) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userData = {
            username: username,
            email: email,
            password: password
        };

        localStorage.setItem('user', JSON.stringify(userData));
        alert('Thông tin đã được lưu!');
    }
}   
function loadInfo() {
    const storedData = localStorage.getItem('user');
    if (storedData) {
        const userData = JSON.parse(storedData);
        document.getElementById('username').value = userData.username;
        document.getElementById('password').value = userData.password;
        document.getElementById('verifyPassword').value = userData.password;
    }
}
// localStorage.clear()
window.onload = loadInfo;