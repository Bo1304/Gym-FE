import React, { useEffect, useRef, useState } from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
// import textarea from 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch } from 'react-redux'
import { MailIcon } from '../icons'
import axios from 'axios'
import { UPDATE_GYM_TINTUC_LIST_PENDING } from '../redux/constants/listTinTucconstans'
import { addFormTinTuc } from '../redux/actions/formTinTucAction'

const FormTinTuc =() =>{

        const [TenChuDe, setTenChuDe] = useState('');
        const [TheLoaiTinTuc, setTheLoaiTinTuc] = useState('');
        const [ImageTinTuc, setImageTinTuc] = useState('');
        const [NoiDungTinTuc, setNoiDungTinTuc] = useState('')
        const dispatch = useDispatch();

        const handleSubmitTinTuc = async (e) => {
        e.preventDefault();
        const itemTinTuc = { TenChuDe, TheLoaiTinTuc, ImageTinTuc, NoiDungTinTuc };
        // Sử dụng hàm dispatch để gọi hàm addFormPT và truyền vào đối tượng itemTinTuc.
        //  Hàm addFormPT sẽ thêm đối tượng itemTinTuc vào cơ sở dữ liệu.
        await dispatch(addFormTinTuc(itemTinTuc));
        setTenChuDe('');
        setTheLoaiTinTuc('');
        setImageTinTuc('');
        setNoiDungTinTuc('');
        const resTinTuc = await axios.get('http://localhost:3002/api/tintucs');
        dispatch({
            type: UPDATE_GYM_TINTUC_LIST_PENDING,
            payload: resTinTuc.data
        });
        };
    return (
        <>
            <PageTitle>FormTinTuc</PageTitle>
            <CTA />
            <SectionTitle>Elements</SectionTitle>
            <form 
            onSubmit={handleSubmitTinTuc}
            >
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                    <span>Tên Chủ Đề</span>
                    <Input className="mt-1" id="nameChuDe" name="NameChuDe" placeholder="Nhập chủ đề"
                    value ={TenChuDe}
                    onChange = {(e) => setTenChuDe(e.target.value)}
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
                    <span>Image</span>
                    <Input type="text" id="fileImageTinTuc" name="FileImageTinTuc" 
                     value = {ImageTinTuc}
                     onChange={(e)=> setImageTinTuc(e.target.value)}
                    />
                </Label>
            </div>



            {/* <!-- Inputs with icons --> */}
            <SectionTitle>Icons</SectionTitle>

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label className="mt-4">
                  <div className="mb-4">
                  <span >Nội dung</span>
                  </div>
                    {/* <Textarea className="mt-1" rows="3" placeholder="Mô tả khóa tập ở đây" /> */}

                    {/* chỗ này là dùng api của tinyMCE */}
                    <Editor className="bg-slate-600" id="contentTinTuc" name= "ContentTinTuc"
                     apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc" 
                     value = {NoiDungTinTuc}
                     onEditorChange={(content) => setNoiDungTinTuc(content)}
                     />
                </Label>
            </div>

            <div className="mb-8">
                <Button type ="submit">Tạo mới</Button>
            </div>
            </form>
        </>
    )
}

export default FormTinTuc
