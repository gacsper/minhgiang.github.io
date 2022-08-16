function kiem_tra() {
    // ktra lỗi, có lỗi đổi thành false
    let check = true;

    // tên
    let ten = document.getElementById('ten').value;
    if (ten.length === 0) {
        document.getElementById('loi_ten').innerHTML = 'Tên không được để trống';
        check = false;
    } else {
        let regex_ten = /^([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪ][a-zàáâãèéêếìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]{1,6}\s?)+$/;

        if (!regex_ten.test(ten)) {
            document.getElementById('loi_ten').innerHTML = 'Tên không hợp lệ';
            check = false;
        } else
            document.getElementById('loi_ten').innerHTML = '';
    }

    // giới tính
    let gioi_tinh = document.getElementsByName('gioi_tinh');
    let check_gioi_tinh = false;
    for (let i = 0; i < gioi_tinh.length; i++) {
        if (gioi_tinh[i].checked)
            check_gioi_tinh = true;
    }

    if (!check_gioi_tinh) {
        document.getElementById('loi_gioi_tinh').innerHTML = 'Giới tính không được để trống';
        check = false;
    } else {
        document.getElementById('loi_gioi_tinh').innerHTML = '';
    }

    // địa chỉ
    let dia_chi = document.getElementById('dia_chi').value;
    if (dia_chi.length === 0) {
        document.getElementById('loi_dia_chi').innerHTML = 'Địa chỉ không được để trống';
        check = false;
    } else {
        document.getElementById('loi_dia_chi').innerHTML = '';
    }

    // email
    let email = document.getElementById('email').value;
    if (email.length === 0) {
        document.getElementById('loi_email').innerHTML = 'Email không được để trống';
        check = false;
    } else {
        document.getElementById('loi_email').innerHTML = '';
    }

    // mật khẩu
    let mat_khau = document.getElementById('mat_khau').value;
    if (mat_khau.length === 0) {
        document.getElementById('loi_mat_khau').innerHTML = 'Mật khẩu không được để trống';
        check = false;

    } else {
        if (mat_khau.length < 6)
            document.getElementById('loi_mat_khau').innerHTML = 'Mật khẩu phải nhiều hơn 6 ký tự';
        else
            document.getElementById('loi_mat_khau').innerHTML = '';
    }

    // sở thích

    if (!check)
        return false;
}

function show_pass() {
    let x = document.getElementById("mat_khau");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function exit() {
    location.reload();
}