import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/CartGymm.css'

import { Helmet } from 'react-helmet';
import axios from "axios";
import Swal from 'sweetalert2';
export default function CartGym(props) {

    const [cartUser, setcartUser] = useState(null);
    const history = useHistory();

    // useEffect(() => {
    //   const cartUser = JSON.parse(localStorage.getItem('Cart-Gym')) || [];
    //   if (cartUser) {
    //     setcartUser(cartUser);
    //   }

    // }, [history]);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
        const cartUser = JSON.parse(localStorage.getItem('Cart-Gym')) || [];
        if (cartUser) {
            setcartUser(cartUser);
            // tính tổng tiền
            const newSubtotal = cartUser.reduce((acc, item) => {
                return acc + item.GiaTien;
            }, 0);
            setSubtotal(newSubtotal);
        }
    }, [history]);
    console.log(cartUser)

    //user
    const [user, setUser] = useState(null);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('User-GYM'));
        if (user) {
            setUser(user);
        }

    }, [history]);
    console.log(user)

    const handleRemoveKT = (id) => {
        const newCartUser = cartUser.filter(item => item._id !== id);
        setcartUser(newCartUser);
        localStorage.setItem('Cart-Gym', JSON.stringify(newCartUser));

        // tính lại giá trị subtotal từ danh sách sản phẩm sau khi xóa sản phẩm đó
        const newSubtotal = newCartUser.reduce((acc, item) => {
            return acc + item.GiaTien;
        }, 0);
        setSubtotal(newSubtotal);
    };

    const handleCheckout = () => {
        const cartUser = JSON.parse(localStorage.getItem('Cart-Gym')) || [];
        const user = JSON.parse(localStorage.getItem('User-GYM'));

        const khoaTapIds = cartUser.map(item => item._id);
        const GiaTiens = cartUser.map(item => item.GiaTien);
        console.log(khoaTapIds)
        console.log(GiaTiens)

        const chiTietHoaDon = [];
        for (let i = 0; i < cartUser.length; i++) {
            const item = cartUser[i];
            chiTietHoaDon.push({
                idKhoaTap: item._id,
                donGia: item.GiaTien
            });
        }
        const payload = {
            idHocVien: user._id,
            tongTien: subtotal,
            // trangThai: 'Đã tính tiền',
            chiTietHoaDon: chiTietHoaDon
        };

        axios.post('http://localhost:3002/api/hoadon/createHoaDon', payload)
        .then(response => {
          console.log(response.data);
          localStorage.removeItem('Cart-Gym');
          history.push('/homegym');
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đã thanh toán thành công',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Lỗi không được vì trùng lịch',
            showConfirmButton: false,
            timer: 1500
          })
        //  alert('Thanh toán thất bại, vì bạn đã trùng lịch học');
        });
      
    }
    return (
        <div>

            <UserHeader />
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
                    style={{
                        minHeight: '400px'
                    }}
                >
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Thanh toán</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Thanh toán</p>
                    </div>
                </div>
            </div>
            <h1 className="text-center">Thanh toán hóa đơn</h1>

            <div className="shopping-cart mt-5">
                <div className="column-labels">
                    <label className="product-image">Hình ảnh</label>
                    <label className="product-details">Khóa Tập</label>
                    <label className="product-price text-black">Giá</label>
                    <label class="product-quantity">*</label>
                    {/* <label className="product-removal"><p>remove</p></label> */}
                </div>
                {cartUser?.map((itemcarts) => (
                    <div className="product">
                        <div className="product-image">
                            <img src={itemcarts.ImageKhoaTap} />
                        </div>
                        <div className="product-details">
                            <div className="product-title">{itemcarts.TenKhoaTap}</div>
                            <p className="product-description">{itemcarts.MotaKhoaTap}</p>
                        </div>
                        <div className="product-details">
                            {itemcarts.GiaTien.toLocaleString('vi-VN',
                                {
                                    style: 'currency', currency: 'VND'
                                }
                            )}
                        </div>
                        <div className="">
                            <button className="remove-product text-red-600" onClick={() => handleRemoveKT(itemcarts._id)}>Remove</button>

                        </div>
                    </div>
                ))}
                <div className="totals">
                    <div className="totals-item">
                        <label className="text-black">Tổng tiền</label>
                        <div className="float-right" id="cart-subtotal">
                            {subtotal.toLocaleString('vi-VN',
                                {
                                    style: 'currency', currency: 'VND'
                                }
                            )}
                        </div>
                    </div>
                    <div className="totals-item">
                        <label className="text-black">tính %</label>
                        <div className="float-right" id="cart-tax">0</div>
                    </div>
                    <div className="totals-item">
                        <label className="text-black">Phí trả thuế</label>
                        <div className="float-right" id="cart-shipping">0</div>
                    </div>
                </div>
                <button className="checkout"
                    onClick={handleCheckout}
                >Thanh toán</button>

            </div>
            <UserFooter />
        </div>
    )
}