import React, { useEffect, useRef, useState } from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
// import textarea from 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
import { Editor } from "@tinymce/tinymce-react";
import { addFormPT } from '../redux/actions/formPTAction'
import { MailIcon } from '../icons'
import {UPDATE_GYM_PT_LIST_PENDING} from '../redux/constants/listPTconstans'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const FormPT =() => {
    const [TenPT, setTenPT] = useState('');
    const [SoDienThoaiPT, setSoDienThoaiPT] = useState('');
    const [EmailPT, setEmailPT] = useState('');
    const [ImagePT, setImagePT] = useState('');
    const dispatch = useDispatch();

    const handleSubmitPT = async (e) => {
      e.preventDefault();
      const itemPT = { TenPT, SoDienThoaiPT, EmailPT, ImagePT };
      // Sử dụng hàm dispatch để gọi hàm addFormPT và truyền vào đối tượng itemPT.
      //  Hàm addFormPT sẽ thêm đối tượng itemPT vào cơ sở dữ liệu.
      await dispatch(addFormPT(itemPT));
      setTenPT('');
      setSoDienThoaiPT('');
      setEmailPT('');
      setImagePT('');
      const resPT = await axios.get('http://localhost:3002/api/pts');
      dispatch({
        type: UPDATE_GYM_PT_LIST_PENDING,
        payload: resPT.data
      });
    };

    return (
        <>
            <PageTitle>FormPT</PageTitle>
            <CTA />
            <SectionTitle>Elements</SectionTitle>
            <form onSubmit={handleSubmitPT}>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            style={{
                paddingBottom: "65px",
                paddingTop: "25px"
            }}
            >
                <Label className="mb-4">
                    <span>Họ tên PT</span>
                    <Input className="mt-1" id="namePT" name="NamePT" placeholder="Nhập tên PT" 
                    value ={TenPT}
                    onChange = {(e) => setTenPT(e.target.value)}
                    />
                </Label>

                <Label className="mb-4">
                    <span>Số điện thoại</span>
                    <Input className="mt-1" type="tel" id="phonePT" name="PhonePT" placeholder="Nhập SĐT" 
                    value = {SoDienThoaiPT}
                    onChange = {(e) => setSoDienThoaiPT(e.target.value)}
                    />
                </Label>

                <Label className="mb-4">
                    <span>Email</span>
                    <Input className="mt-1" type="email" id="addressCLB" name="AddressCLB" placeholder="Nhập email" 
                     value = {EmailPT}
                     onChange = {(e) => setEmailPT(e.target.value)}
                    />
                </Label>
              

                <Label className="mb-4">
                    <span>Image</span>
                    <Input type="text" id="fileImagePT" name="FileImagePT" 
                     value = {ImagePT}
                     onChange = {(e) => setImagePT(e.target.value)}
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

export default FormPT
