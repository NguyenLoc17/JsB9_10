const layThongTinTuForm = () => {
    let taiKhoan = document.getElementById("tknv").value;
    let hoTen = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let matKhau = document.getElementById("password").value;
    let ngayLam = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value * 1;
    let chucVu = document.getElementById("chucVu").value;
    let gioLam = document.getElementById("gioLam").value * 1;

    let nhanVien = new NhanVien(
        taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    return nhanVien;
};

const renderDSNV = (DSNV) => {
    let contentHTML = "";
    for (let index = 0; index < DSNV.length; index++) {
        let nhanVien = DSNV[index];
       let tr = `
        <tr>
            <td>${nhanVien.taiKhoan}</td>
            <td>${nhanVien.hoTen}</td>
            <td>${nhanVien.email}</td>
            <td>${nhanVien.ngayLam}</td>
            <td>${nhanVien.chucVu}</td>
            <td>${10}</td>
            <td>${"tốt"}</td>
            <td><button onclick="xoaSv('${nhanVien.taiKhoan}')">Xoá</button></td>
        </tr>`;
        contentHTML +=tr;
    }   

    document.getElementById("tableDanhSach").innerHTML = contentHTML;
};

const showDataForm = (nv) => {
    document.getElementById("tknv").value = nv.taiKhoan;
    document.getElementById("name").value = nv.hoTen;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.matKhau;
    document.getElementById("datepicker").value = nv.ngayLam;
    document.getElementById("luongCB").value = nv.luongCB;
    document.getElementById("chucVu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;
};