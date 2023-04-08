import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/DetailsTheNews.css'

import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { actionFetchTinTucs } from "../../redux/actions/listTinTucAction";
export default function DetailsTheNew(props) {
    const list__TINTUC = useSelector((state) => state.listTINTUCGYM.list__TINTUC);
    console.log(list__TINTUC);
  
    // const response2 = list__TINTUC.concat([])
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch((actionFetchTinTucs));
    }, [dispatch]);

    const location2 = useLocation();
    const detailsTT = location2.state?.detailsTT || null;
    console.log(detailsTT);
    console.log(detailsTT.TenChuDe);

    return (
        <div>
            <UserHeader />
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
                    style={{
                        minHeight: '400px'
                    }}
                >
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Chi tiết tin tức</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Chi tiết tin tức</p>
                    </div>
                </div>
            </div>

            <div className='md:my-[3rem] my-[0.5rem] md:w-[80%] mx-auto' id='moive-news'>

                <div className='md:flex'>
                    <div className='p-4 '>
                        {/* <img className='w-full' src="https://s3img.vcdn.vn/123phim/2020/07/gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland-15937528932506.png" alt="" /> */}
                        <h2 className='font-bold my-2'
                        style={{
                            marginLeft:'195px'
                        }}
                        >{detailsTT.TenChuDe}</h2>
                        <div className='ContentTheNews mt-5'
                        style={{
                            marginLeft:'200px'
                        }}
                        dangerouslySetInnerHTML={{ __html: detailsTT.NoiDungTinTuc }}>
                        </div>
                      
                    </div>

                    <div className='p-4 mr-8 ' style={{
                        width:'60%',
                    }}>
                         {list__TINTUC.map((itemTinTuc) => (
                        <div className='flex mb-4'>
                            <img className='w-20 h-20' src={itemTinTuc.ImageTinTuc} alt="" />
                            <p style={{
                                marginLeft:'20px',
                                fontSize:'15px'
                            }}>{itemTinTuc.TenChuDe}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>


            <UserFooter />
        </div>
    )
}