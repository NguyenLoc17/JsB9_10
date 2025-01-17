class NhanVien {
    constructor(_taiKhoan, _tenNV, _email, _matKhau, _chucVu, _luongCB, _gioLam) {
        this.taiKhoan = _taiKhoan;
        this.tenNV = _tenNV;
        this.email = _email;
        this.matKhau = _matKhau;
        this.chucVu = _chucVu;
        this.luongCB = _luongCB;
        this.gioLam = _gioLam;
        this.tinhLuong = this.tinhLuong();
        this.xepLoai = this.xepLoai();
    }

    tinhLuong() {
        if (this.chucVu === 'Giám đốc') {
            return this.luongCB * 3;
        } else if (this.chucVu === 'Trưởng phòng') {
            return this.luongCB * 2;
        } else {
            return this.luongCB;
        }  
    }

    xepLoai() {
        if (this.gioLam >= 192) return 'Xuất sắc';
        if (this.gioLam >= 176) return 'Giỏi';
        if (this.gioLam >= 160) return 'Khá';
        return 'Trung bình';
    }
}

