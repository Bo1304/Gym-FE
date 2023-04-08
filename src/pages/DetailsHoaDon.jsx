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


    //   const handleUpdateStatusHoaDon = async (id_HD) => {
    //     try {
    //       const res = await axios.put(
    //         `http://localhost:3002/api/hoadon/updateHoaDonAsyncTKB/${id_HD}`,
           
    //       );
    //       const thoiKhoaBieu = [];
    //       for (let i = 0; i < DetailsHDon.length; i++) {
    //         const item = DetailsHDon[i];
    //         thoiKhoaBieu.push({
    //             idHocVien: DetailsHDon[i].idHoaDon.idHocVien.toString(),
    //             idKhoaTap: DetailsHDon[i].idKhoaTap._id.toString()
    //         });
    //         console.log(DetailsHDon[i].idHoaDon.idHocVien)
    //         console.log(DetailsHDon[i].idKhoaTap._id)
    //     }
    //       const response2 =  await axios.get(
    //         `http://localhost:3002/api/hoadon/getHoaDons`);
    //       dispatch({ type: UPDATE_GYM_HOADON_LIST_PENDING, payload: response2.data }); 
    //     } catch (error) {
    //       console.log(error);
    //     }
        
    //   };
   
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
                                        paddingTop:'0px'
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
                                                                <span class="status status--sent">{itemdetailHD.idHoaDon.trangThai}</span>
                                                                <span class="status status--sent">{itemdetailHD.idHoaDon.idHocVien}</span>
                                                                <span class="status status--sent">{itemdetailHD.idKhoaTap._id}</span>
                                                            </div>
                                                            {/* <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                ))}
                                                {/* <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>XM9141</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 20 Sep 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">Alex Grim</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 1,142.35</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--pending">Pending</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>HJ2248</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 28 Apr 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">Alysa Werner</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 102.04</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--sent">Sent</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>RT2080</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 12 Oct 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">John Morrison</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 836.04</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--pending">Pending</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>RT3080</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 19 Aug 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">Jensen Huang</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 1,800.90</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--sent">Sent</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>XM9141</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 20 Sep 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">Alex Grim</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 1,142.35</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--pending">Pending</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>RT2080</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 12 Oct 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">John Morrison</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 836.04</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status">Draft</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="invoice-item">
                                                    <div class="d-flex flex-row align-items-center">
                                                        <div class="col">
                                                            <span class="id">#<span>HJ2248</span></span>
                                                        </div>
                                                        <div class="col text-truncate">
                                                            <span class="date">Due 28 Apr 2022</span>
                                                        </div>
                                                        <div class="col">
                                                            <span class="company">Alysa Werner</span>
                                                        </div>
                                                        <div class="col text-end">
                                                            <span class="amount">$ 102.04</span>
                                                        </div>
                                                        <div class="col-3 text-center">
                                                            <span class="status status--sent">Sent</span>
                                                        </div>
                                                        <div class="col-1 text-end">
                                                            <button class="btn btn-arrow">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                                                                    <polyline points="9 18 15 12 9 6"></polyline>
                                                                </svg></button>
                                                        </div>
                                                    </div>
                                                </div> */}

                                            </div>
                                            <Button className='float-right mr-5 mt-3'
                                             onClick={() => handleUpdateStatusHoaDon(idDetailsHD)}
                                            >Đã thanh toán</Button>
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
