document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    let errorMessage = '';
    const usernameRegister= document.getElementById('username').value;
    const passwordRegister = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verifyPassword').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    
    if (usernameRegister.length < 6 || usernameRegister.length > 18) {
        errorMessage += 'usernameRegister phải từ 6 đến 18 ký tự.\n';
        isValid = false;
    }

    const regex = /^(?:\+84|0)(9[0-9]{8}|1[2,6,8,9][0-9]{7})$/;
    if (!regex.test(phone)) {
        errorMessage += 'Số điện thoại không đúng định dạng.\n';
        isValid = false;
    }
    if (usernameRegister.length < 6 || usernameRegister.length > 18) {
        errorMessage += 'usernameRegister phải từ 6 đến 18 ký tự.\n';
        isValid = false;
    }

    if (passwordRegister.length < 8 || passwordRegister.length > 20) {
        errorMessage += 'Password phải từ 8 đến 20 ký tự.\n';
        isValid = false;
    }

    if (passwordRegister !== verifyPassword) {
        errorMessage += 'Verify Password phải trùng với Password.\n';
        isValid = false;
    }
    if (age < 18) {
        errorMessage += 'Bạn phải ít nhất 18 tuổi để đăng ký.\n';
        isValid = false;
    }
    if (!gender) {
        errorMessage += 'Vui lòng chọn giới tính.\n';
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
        return false;
    }
    if (isValid) {
        alert("Form hợp lệ! Đang gửi dữ liệu...");

    }
    if(localStorage.getItem(usernameRegister)){
        alert("Tài khoản đã tồn tại. Vui lòng đăng ký tài khoản mới.");
        return false;
    }
    else { const userInfo = {
            usernameRegister: usernameRegister,
            passwordRegister: passwordRegister,
            phone: phone,
            age: age,
            gender: gender,
        };
        console.log(userInfo);
        
        localStorage.setItem(usernameRegister,passwordRegister);
        alert("Đăng ký thành công!");
        // window.location.href = 'trangchu.html';
    }
    return isValid;
})
