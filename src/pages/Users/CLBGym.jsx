import React, { useEffect, useState } from "react";
// import _ from 'lodash';
import { NavLink, useHistory, useNavigate } from "react-router-dom";
// import '../../assets/libUser/User_Gym/style.min.css'
import UserHeader from "../UI/UserHeader";
import UserFooter from "../UI/UserFooter";
// import '../../assets/libUser/User_Gym/style.min.css';
import carousel1 from "../../assets/libUser/img/carousel-1.jpg";
import carousel2 from "../../assets/libUser/img/carousel-2.jpg";
import './Css/CLBGym.css';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from "react-redux";
import { actionFetchUsers } from "../../redux/actions/listCLBAction";
import { Button } from "antd";
export default function CLBGym(props) {
    const [searchTenCLB, setSearchTenCLB] = useState("");
    const list__CLB = useSelector((state) => state.listCLBGYM.list__CLB);
    console.log(list__CLB);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((actionFetchUsers));
    }, [dispatch]);
    const history = useHistory();
    const [selectedKhoaTap, setSelectedKhoaTap] = useState(null);
    const handleMoveKhoaTap = (_id) => {
        const moveKhoaTap = list__CLB.find((item) => item._id === _id);
        console.log(moveKhoaTap);
        setSelectedKhoaTap(moveKhoaTap);
        history.push({
            pathname: `/clb-khoatap/${_id}`,
            state: { moveKhoaTap },
        });
    }
    const [filteredCLBs, setFilteredCLBs] = useState([]);

    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const filteredCLBs = list__CLB.filter((clb) =>
            clb.TenCauLacBo.toLowerCase().includes(searchText.toLowerCase()) ||
            clb.DiaChiCLB.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCLBs(filteredCLBs);
    };
    return (
        <div>
            <UserHeader />
            <div className="container-fluid page-header mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
                    style={{
                        minHeight: '400px'
                    }}
                >
                    <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Câu lạc bộ</h4>
                    <div className="d-inline-flex">
                        <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                        <p className="m-0 text-white px-2">/</p>
                        <p className="m-0 text-white">CLB</p>
                    </div>
                </div>
            </div>
            <div class="container bootdey">
                {/* <div className="search-container">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo Tên Câu lạc bộ hoặc Địa chỉ"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>Tìm kiếm</button>
                </div> */}

                <div className="row product-list">

                    {list__CLB.map((itemclb) => (
                        <div className="col-md-4 mt-6">

                            <div className="panel">
                                <div className="pro-img-box">
                                    <img src={itemclb.ImageCLB} alt=""
                                        style={{
                                            width: '440px',
                                            height: '375px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <button className="addtocart"
                                        onClick={() => handleMoveKhoaTap(itemclb._id)}
                                    >
                                        <span className="text-white">Xem</span>

                                    </button>
                                </div>

                                <div className="panel-body text-center"
                                    style={{
                                        paddingBottom: '20px',
                                        borderRadius: '15px',
                                    }}>
                                    <h4>
                                        <p className="pro-title"
                                            style={{
                                                fontSize: '25px',
                                                marginTop: '60px'
                                            }}
                                        >
                                            {itemclb.TenCauLacBo}
                                        </p>
                                    </h4>
                                    <p className="price"><span className='text-gray-500 font-weight-bold'>Địa chỉ:</span> <span
                                        className="text-gray-500"
                                    >{itemclb.DiaChiCLB}</span> </p>

                                    <p Style=
                                        {{ marginRight: '250px' }}
                                        className="price">
                                        <span className='text-gray-500 font-weight-bold'>Số điện thoại: </span>
                                        <span
                                            className="text-gray-500"
                                        > {itemclb.SoDienThoaiCLB}</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            <UserFooter />
        </div>
    )

}