import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import { Helmet } from "react-helmet";
const UserFooter = () => {
    return(
        <div>
       <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div className="row pt-5">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Liên hệ</h4>
                <p><i className="fa fa-map-marker-alt mr-2"></i>Nguyễn Thị Định, Quận 2, Tp.Hồ Chí Minh</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope mr-2"></i>wibu@gmail.com</p>
                <div className="d-flex justify-content-start mt-4">
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{
                        width:'40px',
                        height:'40px',
                    }} href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{
                        width:'40px',
                        height:'40px',
                    }} href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{
                        width:'40px',
                        height:'40px',
                    }} href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{
                        width:'40px',
                        height:'40px',
                    }} href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Đến các trang</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Chúng tôi</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>CLB</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Lịch học</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Liên hệ</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Link phổ biến</h4>
                <div className="d-flex flex-column justify-content-start">
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Home</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Our Features</a>
                    <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>classNamees</a>
                    <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-primary mb-4">Giờ Mở Cửa</h4>
                <h5 className="text-white">Thứ Hai - Thứ Sáu</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 className="text-white">Thứ Bảy - Chủ Nhật</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div className="container border-top border-dark pt-5">
            <p className="m-0 text-center text-white">
                 <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
                <a className="text-white font-weight-bold" href="#"> hhihi</a>
            </p>
        </div>   
    </div>
    {/* <h1>footer</h1> */} 
        </div>
    )
}
export default UserFooter;