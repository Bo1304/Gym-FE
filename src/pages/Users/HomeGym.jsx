import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import about from "../../assets/libUser/img/about.jpg";
import feature1 from "../../assets/libUser/img/feature-1.jpg";
import feature2 from "../../assets/libUser/img/feature-2.jpg";
import feature3 from "../../assets/libUser/img/feature-3.jpg";
import feature4 from "../../assets/libUser/img/feature-4.jpg";
import {Helmet} from 'react-helmet';
export default function HomeGym(props) {
   return (
   <div>
   
        <UserHeader/>
    <div className="container-fluid p-0">
        <div id="blog-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carousel1} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-primary text-capitalize m-0">Câu Lạc Bộ WibuGym</h3>
                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Rèn Luyện Sức Khỏe</h2>
                        <a href="" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Đăng ký ngay</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carousel2} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-primary text-capitalize m-0">Câu Lạc Bộ WibuGym</h3>
                        <h2 className="display-2 m-0 mt-2 mt-md-4 text-white font-weight-bold text-capitalize">Giữ Gìn Vóc Dáng</h2>
                        <a href="" className="btn btn-lg btn-outline-light mt-3 mt-md-5 py-md-3 px-md-5">Đăng ký ngay</a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>




    <div className="container gym-className mb-5">
        <div className="row px-3">
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-end justify-content-center bg-primary text-right text-white py-5 px-5">
                    <i className="flaticon-six-pack"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Body Building</h3>
                    <p>
                    Tập cùng huấn luyện viên sẽ giúp mang lại những kết quả tốt đảm bảo những giờ tập luyện an toàn, đúng cách và hiệu quả. Ngoài ra có gợi ý chế độ ăn uống kết hợp với tập luyện dựa theo mục tiêu khách hàng để khách hàng đạt kết quả nhanh nhất.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="gym-className-box d-flex flex-column align-items-start justify-content-center bg-secondary text-left text-white py-5 px-5">
                    <i className="flaticon-bodybuilding"></i>
                    <h3 className="display-4 mb-3 text-white font-weight-bold">Muscle Building</h3>
                    <p>
                    Với chuỗi hoạt động liên tục, Kickfit đem lại vẻ săn chắc đặc biệt là phần bụng; giúp vóc dáng thon gọn nhanh nhất; giảm căng thẳng, tốt cho thể chất và tinh thần; nâng cao khả năng tự vệ; rèn luyện phản xạ và tính kỷ luật.
                    </p>
                    <a href="" className="btn btn-lg btn-outline-light mt-4 px-4">Join Now</a>
                </div>
            </div>
        </div>
    </div>
 



    <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img className="img-fluid mb-4 mb-lg-0" src={about} alt="Image"/>
            </div>
            <div className="col-lg-6">
                <h2 className="display-4 font-weight-bold mb-4">10 năm kinh nghiệm</h2>
                <p>Kinh nghiệm luyện tập hấp dẫn đến với Wibu GYM chúng tôi</p>
                <div className="row py-2">
                    <div className="col-sm-6">
                        <i className="flaticon-barbell display-2 text-primary"></i>
                        <h4 className="font-weight-bold">Certified GYM Center</h4>
                        <p>Tập luyện với Huấn luyện viên cá nhân theo hình thức 1 kèm 1.</p>
                    </div>
                    <div className="col-sm-6">
                        <i className="flaticon-medal display-2 text-primary"></i>
                        <h4 className="font-weight-bold">Award Winning</h4>
                        <p>BodyPump là 1 bộ môn tập cho toàn bộ nhóm cơ trên cơ thể kết hợp với tạ và âm nhạc.</p>
                    </div>
                </div>
                <a href="" className="btn btn-lg px-4 btn-outline-primary">Đăng ký ngay</a>
            </div>
        </div>
    </div>




    <div className="container-fluid my-5">
        <div className="row">
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight:'300px'}}>
                    <i className="flaticon-training display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">BODY COMBAT</h2>
                        <p>BodyCombat là phương pháp tập luyện cardio, tim mạch kết hợp với các thế võ tự do
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-primary text-white px-5" style={{minHeight:'300px'}}>
                    <i className="flaticon-weightlifting display-3 text-secondary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">BODY BALANCE</h2>
                        <p>môn thể thao kết hợp đặc biệt giữa đấm bốc truyền thống với trường phái Muay Thai quốc tế nổi tiếng.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 p-0">
                <div className="d-flex align-items-center bg-secondary text-white px-5" style={{minHeight:'300px'}}>
                    <i className="flaticon-treadmill display-3 text-primary mr-3"></i>
                    <div className="">
                        <h2 className="text-white mb-3">Yoga</h2>
                        <p>bộ môn tập cho toàn bộ nhóm cơ trên cơ thể kết hợp với tạ và âm nhạc. Sử dụng tạ nhẹ đến trung bình qua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  


  
    <div className="container feature pt-5">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Dịch vụ</h4>
            <h4 className="display-4 font-weight-bold">Các Dịch Vụ Của Chúng Tôi</h4>
        </div>
        <div className="row">
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={feature1} alt="Image"/>
                        <i className="flaticon-barbell"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Videos Instruction</h4>
                        <p>Các động tác yoga chào mặt trời, là một chuỗi gồm 12 tư thế nhằm giúp cải thiện thể lực và độ dẻo dai của các cơ và cột</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={feature2} alt="Image"/>
                        <i className="flaticon-training"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Training Calendar</h4>
                        <p>Các động tác yoga Chuỗi Mặt Trăng là sự đảo ngược của Chuỗi Mặt Trời. Mặt trăng tượng trưng cho sự nhẹ nhàng và tĩnh lặng</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={feature3} alt="Image"/>
                        <i className="flaticon-trends"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Free Apps & WiFi</h4>
                        <p>Có rất nhiều các động tác yoga để giãn duỗi cơ thể, trong đó static stretching (giãn cơ tĩnh) là bài tập mang lại sự tĩnh tịnh</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                        <img className="img-fluid mb-3 mb-sm-0" src={feature4} alt="Image"/>
                        <i className="flaticon-trends"></i>
                    </div>
                    <div className="col-sm-7">
                        <h4 className="font-weight-bold">Community Support</h4>
                        <p>Hatha yoga là hình thức Yoga cổ xưa nhất, nền tảng cho nhiều loại hình Yoga khác, tốc độ chậm và nhẹ nhàng</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
   
        <UserFooter/>
    </div>
   )
}