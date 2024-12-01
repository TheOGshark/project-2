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
