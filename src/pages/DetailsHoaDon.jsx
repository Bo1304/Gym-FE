import React, { useContext, Suspense, useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import {
    Modal, Label, Input, ModalHeader, ModalBody, ModalFooter,
    Button, SectionTitle, Select
} from '@windmill/react-ui'
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { UPDATE_GYM_TINTUC_LIST_PENDING } from "../redux/constants/listTinTucconstans";
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import '../pages/Users/Css/DetailsHD.css'
import { UPDATE_GYM_HOADON_LIST_PENDING } from '../redux/constants/listHoaDonconstans';
import Swal from 'sweetalert2';
import {
    Badge,
} from '@windmill/react-ui'
function DetailsHoaDon() {
    const location = useLocation();
    const detailsHoaDon = location.state?.detailsHoaDon || null;
    console.log(detailsHoaDon);


    const idDetailsHD = detailsHoaDon._id
    console.log(idDetailsHD)

    const dispatch = useDispatch();

    // sử dụng ID để truy xuất dữ liệu của item đó
    // const [TenChuDe, setTenChuDe] = useState(detailsHoaDon.TenChuDe);
    // const [TheLoaiTinTuc, setTheLoaiTinTuc] = useState(detailsHoaDon.TheLoaiTinTuc);
    // const [ImageTinTuc, setImageTinTuc] = useState(detailsHoaDon.ImageTinTuc);
    // const [NoiDungTinTuc, setNoiDungTinTuc] = useState(detailsHoaDon.NoiDungTinTuc);


    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    let location1 = useLocation()

    useEffect(() => {
        closeSidebar()
    }, [location1])


    const [DetailsHDon, setDetailsHDon] = useState(null);

    useEffect(() => {
        const fetchDetailsHoaDon = async () => {
            try {
                const response = await axios.get(`http://localhost:3002/api/chitiethoadon/${detailsHoaDon._id}`);
                setDetailsHDon(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetailsHoaDon();
    }, []);


    const handleUpdateStatusHoaDon = async (id_HD) => {
        try {
            const thoiKhoaBieu = DetailsHDon.map(item => ({
                idHocVien: item.idHoaDon.idHocVien.toString(),
                idKhoaTap: item.idKhoaTap._id.toString(),
            }));

            const res = await axios.put(
                `http://localhost:3002/api/hoadon/updateHoaDonAsyncTKB/${id_HD}`,
                { thoiKhoaBieu }
            );

            const response2 = await axios.get(
                `http://localhost:3002/api/hoadon/getHoaDons`
            );
            dispatch({
                type: UPDATE_GYM_HOADON_LIST_PENDING,
                payload: response2.data,
            });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Đã duyệt hóa đơn',
                showConfirmButton: false,
                timer: 1000
            })
        } catch (error) {
            console.log(error);
        }
    };

    console.log(DetailsHDon)
    //  console.log(DetailsHDon.idHoaDon.idHocVien_id);
    // console.log(DetailsHDon.idKhoaTap._id);


    return (
        <>
            <div
                className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}>
                <Sidebar />
                <div className="flex flex-col flex-1 w-full">
                    <Header />
                    <Main>
                        <Suspense fallback={<ThemedSuspense />}>
                            <PageTitle>Chi tiết hóa đơn</PageTitle>

                            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                <div class="d-flex">

                                    <section class="invoice-list-page"
                                        style={{
                                            paddingTop: '0px'
                                        }}
                                    >
                                        <div class="invoice-list-page__content">
                                            <div class="container">
                                                {DetailsHDon?.map((itemdetailHD) => (
                                                    <div class="invoice-item">
                                                        <div class="d-flex flex-row align-items-center">

                                                            <div class="col">
                                                                <span class="id">#<span>{itemdetailHD.idKhoaTap.TenKhoaTap}</span></span>

                                                            </div>
                                                            <div class="col text-truncate">
                                                                <span class="date flex"> Ngày cập nhật:  {new Date(itemdetailHD.idHoaDon.ngayTao).toLocaleDateString("be-BY").split('/').reverse().join('/')}
                                                                </span>
                                                                <span class="date"> Thời gian: {itemdetailHD.idKhoaTap.GioBatDau}-{itemdetailHD.idKhoaTap.GioKetThuc} </span>
                                                            </div>
                                                            <div class="col">

                                                                <span class="company">{itemdetailHD.idKhoaTap.ChonNgayTap.join('--')}</span>
                                                            </div>
                                                            <div class="col text-end">
                                                                <span class="amount">
                                                                    {itemdetailHD.donGia.toLocaleString('vi-VN',
                                                                        {
                                                                            style: 'currency', currency: 'VND'
                                                                        }
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div class="col-3 text-center">
                                                                {/* <span class="status status--sent">{itemdetailHD.idHoaDon.trangThai}</span> */}

                                                                {itemdetailHD.idHoaDon.trangThai === "Đã thanh toán" ? (
                                                                    <Badge type="success" className="status ">
                                                                        {itemdetailHD.idHoaDon.trangThai}
                                                                    </Badge>
                                                                ) : (
                                                                    <Badge type="danger" className="status ">
                                                                        {itemdetailHD.idHoaDon.trangThai}
                                                                    </Badge>
                                                                )}



                                                                {/* <span class="status status--sent">{itemdetailHD.idHoaDon.idHocVien}</span>
                                                                <span class="status status--sent">{itemdetailHD.idKhoaTap._id}</span> */}
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))}


                                            </div>
                                            <Button className='float-right mr-5 mt-3'
                                                onClick={() => handleUpdateStatusHoaDon(idDetailsHD)}
                                            >Duyệt thanh toán</Button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </Suspense>
                    </Main>
                </div>
            </div>
        </>
    )
}

export default DetailsHoaDon;
