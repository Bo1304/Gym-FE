import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/LoginUsers.css'
import { Helmet } from 'react-helmet';
import axios from "axios";
export default function LoginUserGym(props) {
    const [credentials, setCredentials] = useState({ TenDangNhap: '', MatKhau: '' });
    const [error, setError] = useState('');

    const history = useHistory();
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3002/api/authentication/userlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('User-GYM', JSON.stringify(data));
                // chuyển hướng đến trang khác khi đăng nhập thành công
                history.push('/homegym');

            } else {
                const data = await response.json();
                setError(data.msg);
            }
        } catch (err) {
            console.error(err);
            setError('Bạn chưa nhập mật khẩu và tên đăng nhập hoặc chưa chính xác !');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value });
    };

    return (
        <div>

            <section>
                <div className="img-bg">
                    <img src={carousel2} alt="Hình Ảnh Minh Họa" />
                </div>

                <div className="noi-dung">
                    <div className="form">
                        <h2>Trang Đăng Nhập</h2>
                        <form onSubmit={handleLogin} >
                            <div className="input-form">
                                <span>Tên Người Dùng</span>
                                <input type="text" id="TenDangNhap" name="TenDangNhap" value={credentials.TenDangNhap} onChange={handleInputChange} />
                            </div>
                            <div className="input-form">
                                <span>Mật Khẩu</span>
                                <input type="password" id="MatKhau" name="MatKhau" value={credentials.MatKhau} onChange={handleInputChange} />
                            </div>
                           

                            <div className="input-form">
                            {error && <div className="text-orange-600 mt-3">{error}</div>}
                                <input type="submit" value="Đăng Nhập" />
                            </div>
                            <div className="input-form flex mx-2">
                                <p className=" mt-10">Bạn Chưa Có Tài Khoản?
                                </p>
                                <NavLink exact to="/register-users" className="nav-item nav-link leading-10 mt-4" activeClassName="active">Đăng ký
                                </NavLink>
                            </div>

                        </form>
                        <h3>Đăng Nhập Bằng</h3>
                        <ul className="icon-dang-nhap">
                            <li>
                                <i className="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i class="fab fa-google"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}

