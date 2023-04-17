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
function DetailsTinTuc() {
    const location = useLocation();
    const tintuc = location.state?.tinTuc || null;
    console.log(tintuc);
    console.log(tintuc.TenChuDe);

    const dispatch = useDispatch();
    const { id } = useParams(); // lấy dữ liệu từ 1 item bên list TinTuc
    console.log(id)
    // sử dụng ID để truy xuất dữ liệu của item đó
    const [TenChuDe, setTenChuDe] = useState(tintuc.TenChuDe);
    const [TheLoaiTinTuc, setTheLoaiTinTuc] = useState(tintuc.TheLoaiTinTuc);
    const [ImageTinTuc, setImageTinTuc] = useState(tintuc.ImageTinTuc);
    const [NoiDungTinTuc, setNoiDungTinTuc] = useState(tintuc.NoiDungTinTuc);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const result = await axios.get(`http://localhost:3002/api/tintucs/${id}`);
    //       console.log(id)
    //       const { TenChuDe, TheLoaiTinTuc, ImageTinTuc, NoiDungTinTuc } = result.data;
    //       setTenChuDe(TenChuDe || ''); // set một giá trị mặc định là giá trị lấy được từ API hoặc trống nếu không có giá trị trả về
    //       setTheLoaiTinTuc(TheLoaiTinTuc || '');
    //       setImageTinTuc(ImageTinTuc || '');
    //       setNoiDungTinTuc(NoiDungTinTuc || '');

    //     };
    //     fetchData();
    //   }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.put(
                `http://localhost:3002/api/tintucs/${id}`,
                {
                    TenChuDe,
                    TheLoaiTinTuc,
                    ImageTinTuc,
                    NoiDungTinTuc,
                }
                //   editingClub
            );
            console.log(result.data);
            const response2 = await axios.get(
                `http://localhost:3002/api/tintucs`);
            dispatch({ type: UPDATE_GYM_TINTUC_LIST_PENDING, payload: response2.data });
          
            setTenChuDe('');
            setTheLoaiTinTuc('');
            setImageTinTuc('');
            setNoiDungTinTuc('');
        } catch (err) {
            console.error(err);
        }
    };

    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
    let location1 = useLocation()

    useEffect(() => {
        closeSidebar()
    }, [location1])

    return (
    
        <>
     
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
        >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <Header />
                <Main>
                    <Suspense fallback={<ThemedSuspense />}>
                        <PageTitle>DetailsTinTuc</PageTitle>

                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label className="mt-4">
                    <span>Tên chủ đề</span>
                    <Input
                        className="mt-1"
                        type="text"
                        placeholder="Tên chủ đề"
                        value = {TenChuDe}
                    
                        onChange={(e) => setTenChuDe(e.target.value)}
                    />
                </Label>

                    <Label className="mt-4">
                    <span>Thể Loại</span>
                    <Select className="mt-1" id="theLoaiTinTuc" name="TheLoaiTinTuc"
                     value = {TheLoaiTinTuc}
                     onChange={(e)=> setTheLoaiTinTuc(e.target.value)}
                    >
                        <option>Thể hình</option>
                        <option>Sức Khỏe</option>
                        <option>Yoga</option>
                    </Select>
                </Label>
                <Label className="mt-4">
                    <span>Đường dẫn hình ảnh</span>
                    <Input
                        className="mt-1"
                        type="text"
                        placeholder="Đường dẫn hình ảnh"
                        value={ImageTinTuc}
                        onChange={(e) => setImageTinTuc(e.target.value)}
                    />
                </Label>
              
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Label className="mt-4">
                        <div className="mb-4">
                            <span >Nội dung</span>
                        </div>
                        {/* <Textarea className="mt-1" rows="3" placeholder="Mô tả khóa tập ở đây" /> */}

                        {/* chỗ này là dùng api của tinyMCE */}
                        <Editor className="bg-slate-600" id="contentTinTuc" name="ContentTinTuc"
                            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
                            value={NoiDungTinTuc}
                            onEditorChange={(content) => setNoiDungTinTuc(content)}
                        />
                    </Label>
                </div>
                <Button onClick={handleUpdate} className="mt-4">
                    Cập nhật tin tức
                </Button>

            </div>
                    </Suspense>
                </Main>
            </div>
        </div>
        </>
    )
}
export default DetailsTinTuc;
