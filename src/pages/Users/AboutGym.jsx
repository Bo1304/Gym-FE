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
import team1 from "../../assets/libUser/img/team-1.jpg";
import team2 from "../../assets/libUser/img/team-2.jpg";
import team3 from "../../assets/libUser/img/team-3.jpg";
import team4 from "../../assets/libUser/img/team-4.jpg";

import {Helmet} from 'react-helmet';
export default function AboutGym(props) {
   return (
   <div>
   
        <UserHeader/>
        <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" 
        style={{
            minHeight:'400px'
        }}
        >
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">About Us</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">About Us</p>
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
                <p>Kinh nghiệm luyện tập hấp dẫn đến với Wibu GYM chúng tôi

</p>
               
                <a href="" className="btn btn-lg px-4 btn-outline-primary">Đăng ký ngay</a>
            </div>
        </div>
    </div>

    <div className="container pt-5 team">
        <div className="d-flex flex-column text-center mb-5">
            <h4 className="text-primary font-weight-bold">Các PT phổ biến</h4>
            <h4 className="display-4 font-weight-bold">Dịch vụ PT hướng dẫn</h4>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={team1} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{width:'40px', height:'40px'}} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Trainer Name</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={team2} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Trainer Name</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={team3} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Trainer Name</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <div className="card border-0 bg-secondary text-center text-white">
                    <img className="card-img-top" src={team4} alt=""/>
                    <div className="card-social d-flex align-items-center justify-content-center">
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0"classNamestyle={{width:'40px', height:'40px'}}href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="card-body bg-secondary">
                        <h4 className="card-title text-primary">Trainer Name</h4>
                        <p className="card-text">Trainer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <UserFooter/>
    </div>
   )
}