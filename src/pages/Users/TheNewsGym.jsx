import React, { useEffect, useState } from "react";
import _ from 'lodash';
import { useHistory, NavLink, useNavigate, useLocation } from "react-router-dom";
import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/TheNews.css'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { actionFetchTinTucs } from "../../redux/actions/listTinTucAction";
import parse from 'html-react-parser';
import striptags from 'striptags';
import {Badge} from '@windmill/react-ui'
export default function TheNewsGym(props) {

    const list__TINTUC = useSelector((state) => state.listTINTUCGYM.list__TINTUC);

    console.log(list__TINTUC);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((actionFetchTinTucs));
    }, [dispatch]);

    const history = useHistory();
    const location = useLocation();
    const [selectedTinTuc, setSelectedTinTuc] = useState(null);
    const DetailsTinTuc = (_id) => {
        const detailsTT = list__TINTUC.find((item) => item._id === _id);
        setSelectedTinTuc(detailsTT);
        console.log(detailsTT);
        history.push({
          pathname: `/details=/${_id}`,
          state: { detailsTT },
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
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Tin tức</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">Blog</p>
                    </div>
                </div>
            </div>
            <div className="row ">
                {list__TINTUC.map((itemTinTuc) => (
                    <div className="col-md-4">
                        <div className="post-slide ">
                            <div className="post-img "
                            style={{
                                marginLeft:'-1px',
                                // marginRight:'3px',
                                objectFit: "cover", width: "100%", height: "50%"
                            }}
                            >
                                <img src={itemTinTuc.ImageTinTuc} 
                                style={{
                                    width: "456px",
                                    height:'304px'
                                }}
                                alt=""
                                />
                                <a href="#" className="over-layer"><i className="fa fa-link"></i></a>
                            </div>
                            <div className="post-content">
                                <h3 className="post-title">
                                    <a href="#">{itemTinTuc.TenChuDe}</a>
                                </h3>

                                {/* <p className="post-description">{itemTinTuc.NoiDungTinTuc.length > 100 ? itemTinTuc.NoiDungTinTuc.slice(0, 100) +'...' : itemTinTuc.NoiDungTinTuc}</p> */}
                               
                                <p className="post-description">
                                    {striptags(itemTinTuc.NoiDungTinTuc).length > 100
                                        ? parse(striptags(itemTinTuc.NoiDungTinTuc).slice(500, 600) + '...')
                                        : parse(striptags(itemTinTuc.NoiDungTinTuc))
                                    }
                                </p>
                                {/* <span className="post-date"><i className="fa fa-clock-o"></i>Out 27, 2019</span> */}
                                <Badge type='danger' className="post-date"><i className="fa fa-clock-o"></i>{itemTinTuc.TheLoaiTinTuc}</Badge>
                                <a style={{
                                    cursor:'pointer'
                                }} className="read-more mb-1"
                                 onClick={() => DetailsTinTuc(itemTinTuc._id)}
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