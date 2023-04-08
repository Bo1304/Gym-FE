import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useHistory, useLocation, useNavigate, useParams } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';

import './Css/TheNews.css';

import { Helmet } from 'react-helmet';
import axios from "axios";
import { useDispatch } from "react-redux";

export default function KhoaTapGym(props) {
    const location = useLocation();
    const moveKhoaTap = location.state?.moveKhoaTap || null;
    console.log(moveKhoaTap._id);
    console.log(moveKhoaTap.TenCauLacBo);
    const idKhoaBy_CLB = moveKhoaTap._id;
    const dispatch = useDispatch();
    const { _id } = useParams(); // lấy dữ liệu từ 1 item bên list API cụ thể
    console.log(idKhoaBy_CLB)

    const [khoaTap, setKhoaTap] = useState(null);

    useEffect(() => {
        const fetchKhoaTapByIdCLB = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/khoataps/getKhoaTapByIdCLB/${idKhoaBy_CLB}`);
                setKhoaTap(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchKhoaTapByIdCLB();
    }, []);
    console.log(moveKhoaTap);

    // lấy id KhoaTap
    const history = useHistory();
    const [selected_Id_KhoaTap, setSelected_Id_KhoaTap] = useState(null);
    const handleDetailsKhoaTap = (_id) => {
        const DetailsKT = khoaTap.find((item) => item._id === _id);
        console.log(DetailsKT);
        setSelected_Id_KhoaTap(DetailsKT);
        history.push({
          pathname: `/details-khoatap/${_id}`,
          state: { DetailsKT },
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
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Khóa tập</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">khóa tập</p>
                    </div>
                </div>
            </div>

            <div className="row ">
            {khoaTap?.map((itemkhoatap) => (
                <div className="col-md-4">
                    <div className="post-slide  pb-3">
                        <div className="post-img "
                            style={{
                                marginLeft: '-1px',                          
                                objectFit: "cover", width: "100%", height: "30%"
                            }}>
                            <img src= {
                                itemkhoatap.ImageKhoaTap
                            }
                              alt=""
                              style={{
                                width:'100%',
                                height:'292px',
                                objectFit:'cover',
                              }}
                            />
                            <a href="#" className="over-layer"><i className="fa-solid fa-plus-large"></i></a>
                        </div>
                        <div className="post-content"
                        style={{
                            paddingBottom:'60px',
                        }}>
                            <h3 className="post-title text-center ">
                                <a style={{cursor:'pointer'}}>    
                                  {itemkhoatap.TenKhoaTap}                           
                                </a>
                            </h3>                  
                            <p className="post-description">
                          
                            </p>
                        
                            <a style={{
                                cursor: 'pointer',
                                marginRight:' 85px',
                                padding:'15px 97px'
                            }} className="read-more mb-1"
                            onClick={() => handleDetailsKhoaTap(itemkhoatap._id)}
                            >Xem thêm</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <UserFooter />
        </div>
    )
}