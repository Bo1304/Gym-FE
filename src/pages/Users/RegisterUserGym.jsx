import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/LoginUsers.css'
import { Helmet } from 'react-helmet';
import { UPDATE_GYM_HOCVIEN_LIST_PENDING } from "../../redux/constants/listHocVienconstans";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addFormHV } from "../../redux/actions/formRegisterUserAction";
const RegisterUserGym = (props) => {
    const [TenDangNhap, setTenDangNhap] = useState('');
    const [MatKhau, setMatKhau] = useState('');
    const [SDTHocVien, setSDTHocVien] = useState('');
    const [HoTenHocVien, setHoTenHocVien] = useState('');
    const [GioiTinhHocVien, setGioiTinhHocVien] = useState('');
    const [NgaySinhHocVien, setNgaySinhHocVien] = useState('');
    const [EmailHocVien, setEmailHocVien] = useState('');
    // const [NgayDangKy, setNgayDangKy] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmitDangKy = async (e) => {
        e.preventDefault();
        const itemPT = {
            TenDangNhap, MatKhau, SDTHocVien, HoTenHocVien,
            GioiTinhHocVien, NgaySinhHocVien, EmailHocVien
        };
        // Sử dụng hàm dispatch để gọi hàm addFormHV và truyền vào đối tượng itemPT.
        //  Hàm addFormHV sẽ thêm đối tượng itemPT vào cơ sở dữ liệu.
        await dispatch(addFormHV(itemPT));
        setTenDangNhap('');
        setMatKhau('');
        setHoTenHocVien('');
        setSDTHocVien('');
        setGioiTinhHocVien('');
        setNgaySinhHocVien('');
        setEmailHocVien('');

        const resHocVien = await axios.get('http://localhost:3002/api/hocviens');
        history.push('/login-users')
        dispatch({
            type: UPDATE_GYM_HOCVIEN_LIST_PENDING,
            payload: resHocVien.data
        });
    };
    return (
        <>
            <section>
                <div className="img-bg">
                    <img src={carousel2} alt="Hình Ảnh Minh Họa" />
                </div>

                <div className="noi-dung">
                    <div className="form">
                        <h2>Trang Đăng Ký</h2>
                        <form onSubmit={handleSubmitDangKy}>
                            <div className="input-form">
                                <span>Tên đăng nhập</span>
                                <input type="text" name=""
                                    value={TenDangNhap}
                                    onChange={(e) => setTenDangNhap(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <span>Mật khẩu</span>
                                <input type="password" name=""
                                    value={MatKhau}
                                    onChange={(e) => setMatKhau(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <span>Họ tên</span>
                                <input type="text" name=""
                                    value={HoTenHocVien}
                                    onChange={(e) => setHoTenHocVien(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <span>Số điện thoại</span>
                                <input type="text" name=""
                                    value={SDTHocVien}
                                    onChange={(e) => setSDTHocVien(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <div className="input-form">
                                    <span>Giới tính</span>
                                    <select value={GioiTinhHocVien} onChange={(e) => setGioiTinhHocVien(e.target.value)}>
                                    <option value="" disabled selected hidden>Vui lòng chọn</option>
                                        <option value="1">Nam</option>
                                        <option value="0">Nữ</option>
                                    </select>
                                </div>
                            </div>

                            <div className="input-form">
                                <span>Ngày sinh</span>
                                <input type="date" name=""
                                    value={NgaySinhHocVien}
                                    onChange={(e) => setNgaySinhHocVien(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <span>Email liên hệ</span>
                                <input type="email" name=""
                                    value={EmailHocVien}
                                    onChange={(e) => setEmailHocVien(e.target.value)}
                                />
                            </div>
                        
                            <div className="input-form">
                                <input type="submit" value="Đăng Ký" />
                            </div>
                        </form>
                        {/* <div className="input-form flex mx-2">
                            <p className=" mt-10">Chuyển sang
                            </p>
                            <NavLink exact to="/login-users" className="nav-item nav-link leading-10 mt-4" activeClassName="active">
                                Đăng nhập
                            </NavLink>
                        </div> */}


                    </div>
                </div>

            </section>
        </>
    )
}
export default RegisterUserGym