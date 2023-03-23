import React, { useState,useEffect  } from 'react'
import { useDispatch } from "react-redux";
import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import { Modal, Label, Input, ModalHeader, ModalBody, ModalFooter,
     Button,SectionTitle,Select } from '@windmill/react-ui'

import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { UPDATE_GYM_TINTUC_LIST_PENDING } from "../redux/constants/listTinTucconstans";
function DetailsTinTuc() {


    const [editingClub, setEditingClub] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false)

     const dispatch = useDispatch();
    const { id } = useParams(); // lấy dữ liệu từ 1 item bên list TinTuc
    // sử dụng ID để truy xuất dữ liệu của item đó
    const [TenChuDe, setTenChuDe] = useState("");
    const [TheLoaiTinTuc, setTheLoaiTinTuc] = useState("");
    const [ImageTinTuc, setImageTinTuc] = useState("");
    const [NoiDungTinTuc, setNoiDungTinTuc] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(`http://localhost:3002/api/tintucs/${id}`);
          const { TenChuDe, TheLoaiTinTuc, ImageTinTuc, NoiDungTinTuc } = result.data;
          setTenChuDe(TenChuDe || ''); // set một giá trị mặc định là giá trị lấy được từ API hoặc trống nếu không có giá trị trả về
          setTheLoaiTinTuc(TheLoaiTinTuc || '');
          setImageTinTuc(ImageTinTuc || '');
          setNoiDungTinTuc(NoiDungTinTuc || '');

        };
        fetchData();
      }, [id]);
 
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
            const response2 =  await axios.get(
                `http://localhost:3002/api/tintucs`);
              dispatch({ type: UPDATE_GYM_TINTUC_LIST_PENDING, payload: response2.data });
            // dispatch({
            //     type: UPDATE_GYM_TINTUC_LIST_PENDING,
            //     payload: result.data,
            // });
        } catch (err) {
            console.error(err);
        }
    };
    
    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <>
         
            <PageTitle>DetailsTinTuc</PageTitle>

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label className="mt-4">
                    <span>Tên chủ đề</span>
                    <Input
                        className="mt-1"
                        type="text"
                        placeholder="Tên chủ đề"
                        value = {TenChuDe}
                        // value={editingClub?.TenChuDe}
                        // onChange={(e) =>
                        //     setEditingClub({
                        //       ...editingClub,
                        //       TenChuDe: e.target.value,
                        //     })
                        //   }
                        onChange={(e) => setTenChuDe(e.target.value)}
                    />
                </Label>
                {/* <Label className="mt-4">
                    <span>Thể loại tin tức</span>
                    <Input
                        className="mt-1"
                        type="text"
                        placeholder="Thể loại tin tức"
                        value={TheLoaiTinTuc}
                        onChange={(e) => setTheLoaiTinTuc(e.target.value)}
                    />
                </Label> */}
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
                {/* <SectionTitle>Icons</SectionTitle> */}

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
            
        </>
    )
}

export default DetailsTinTuc;
