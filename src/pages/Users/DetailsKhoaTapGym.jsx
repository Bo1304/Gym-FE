import React, { useEffect, useState } from "react";
import _ from 'lodash';
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Avatar,
    Pagination,
  } from '@windmill/react-ui'
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import about from "../../assets/libUser/img/about.jpg";
import tg1 from "../../assets/libUser/img/dexuat.jpg";
import tg2 from "../../assets/libUser/img/thoiLuong.jpg";
import tg3 from "../../assets/libUser/img/calories.jpg";
import tg4 from "../../assets/libUser/img/skill.jpg";
import tg5 from "../../assets/libUser/img/boxing.jpg";

import {Helmet} from 'react-helmet';
import { useDispatch } from "react-redux";
import axios from "axios";
import { Button } from "antd";
export default function DetailsKhoaTapGym(props) {
    const location = useLocation();
    const DetailsKT = location.state?.DetailsKT || null;
    console.log(DetailsKT._id);
    console.log(DetailsKT.TenKhoaTap);
    const Details_KhoaTap = DetailsKT._id;
    const dispatch = useDispatch();
    const { _id } = useParams(); // lấy dữ liệu từ 1 item bên list API cụ thể
    console.log(Details_KhoaTap)

    // xử lý lưu chi tiết khóa tập vào localstorage
    const [cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     setCart([...cart, item]);
    //     localStorage.setItem('Cart-Gym', JSON.stringify([...cart, item]));
        
    //   }
    const addToCart = (item) => {
        const existingCart = localStorage.getItem('Cart-Gym');
        const cartItems = existingCart ? JSON.parse(existingCart) : [];
      
        if (!cartItems.some((cartItem) => cartItem.TenKhoaTap === item.TenKhoaTap)) {
          cartItems.push(item);
          localStorage.setItem('Cart-Gym', JSON.stringify(cartItems));
        }
        setCart(cartItems);
      };
      
      useEffect(() => {
        const cartData = localStorage.getItem('Cart-Gym');
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      }, []);

   return (
   <div>
        <UserHeader/>
        <div className="container-fluid page-header mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" 
        style={{
            minHeight:'400px'
        }}
        >
            <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Chi tiết khóa tập</h4>
            <div className="d-inline-flex">
                <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Chi tiết khóa tập</p>
            </div>
        </div>
    </div>
    <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <img className="img-fluid mb-4 mb-lg-0" src={DetailsKT.ImageKhoaTap} alt="Image"
                style={{
                    // width:'310px',
                    // height:'292px',
                    // objectFit:'cover',
                }}
                />
            </div>
            <div className="col-lg-6">
                <h7 className="display-4 font-weight-bold mb-4">{DetailsKT.TenKhoaTap}</h7>
                <p className="mt-3">{DetailsKT.MotaKhoaTap}</p>
                <div className="TimeKhoaTap flex gap-20 mt-5">
                <Badge style={{
                    fontSize: '18px'
                }}>
                    Thời gian: {DetailsKT.ChonNgayTap.join(',  ')}
                </Badge>
                <Badge className="" style={{fontSize: '18px'}}>Thời gian: {DetailsKT.ThoiGianKhoaTap} tháng</Badge>
                </div>
             
                <hr/>
                <h2
                className="mt-3 text-right"
                >

                  {DetailsKT.GiaTien.toLocaleString('vi-VN',
                    {
                      style: 'currency', currency: 'VND'
                    }
                  )}
                </h2>
                <Button className="mt-6" style={{
                    color:'white',   
                    padding:'35px 100px',
                    backgroundColor:'red',
                    lineHeight:'0px'           
                }}   
                onClick={() => addToCart(DetailsKT)}    
                ><span style={{fontSize:'25px'}}>Đăng ký ngay</span></Button>
            </div>
        </div>
    </div>

    <div className="container py-5">
        <div className="row introduce_service">
            <div className="col-lg-3 col-md-6">
                <img className="img-fluid mb-4 mb-lg-0" src={tg2} alt="Image" />
                <div style=
                {{
                    textAlign: "center",
                }}
                >
                    <div className="title" style=
                    {{
                        fontWeight: "bold",
                    }}
                    >Thời lượng</div>
                    <b className="h2" style= {{
                        fontSize:'26px',
                    }}>{DetailsKT.GioBatDau} - {DetailsKT.GioKetThuc} </b>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <img className="img-fluid mb-4 mb-lg-0" src={tg3} alt="Image"/>
                <div style={{
                    textAlign: "center",
                }}>
                    <div className="title" style= {{
                        textAlign: "center",
                    }}>Calories</div>
                    <b className="h2" style={{
                        textAlign: "center",
                    }}>600 - 800</b>  
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <img className="img-fluid mb-4 mb-lg-0" src={tg4} alt="Image"/>
                <div style={{
                    textAlign: "center",
                }}>
                    <div className="title" style={{
                        fontWeight:'bold',
                    }}>Kỹ năng</div>
                <b className="h2" style={{
                    fontSize:'26px',
                }}>Dành cho mọi trình độ</b>  
                </div>           
            </div>
            <div className="col-lg-3 col-md-6">
                <img className="img-fluid mb-4 mb-lg-0" src={tg1} alt="Image"/>
                <div style={{
                    textAlign: 'center',
                }}>
                    <div className="title" style={{
                        fontWeight: 'bold',
                    }}>PT hướng dẫn</div>
                    <b className="h2" style={{
                        fontSize:'26px',
                    }}>{DetailsKT.idPT.TenPT}</b>
                </div>
            </div>
        </div>
    </div>
        <UserFooter/>
    </div>
   )
}