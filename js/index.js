// Lấy thông tin từ form - thêm nhân viên 
let DSNV = [];
let dsnvJSON = localStorage.getItem("DSNV");

let arrayDsnv = JSON.parse(dsnvJSON); 
// nếu dưới local rỗng = null

if (arrayDsnv) {
    DSNV = arrayDsnv.map((nv) => {
        return new NhanVien(
            nv.taiKhoan, nv.hoTen, nv.email, nv.matKhau, nv.ngayLam,
            nv.luongCB, nv.chucVu, nv.gioLam, 
        );
    });
    renderDSNV(DSNV);
}

//Thêm nhân viên
const themNV = () => {
    let nv = layThongTinTuForm();
    console.log(DSNV);
    DSNV.push(nv);
    let localStorageNV = JSON.stringify(DSNV);
    localStorage.setItem("DSNV", localStorageNV);
    console.log(DSNV);
    renderDSNV(DSNV);
};

//Xóa nhân viên
const xoaNV = (taiKhoan) => {
    DSNV = DSNV.filter((nv) => {
        return nv.taiKhoan !== taiKhoan;
    });
    renderDSNV(DSNV);
};

