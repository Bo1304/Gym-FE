import React, { useEffect, useRef } from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
// import textarea from 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
import { Editor } from "@tinymce/tinymce-react";

import { MailIcon } from '../icons'

function FormTinTuc() {

    return (
        <>
            <PageTitle>FormTinTuc</PageTitle>
            <CTA />
            <SectionTitle>Elements</SectionTitle>

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                    <span>Tên Chủ Đề</span>
                    <Input className="mt-1" id="nameChuDe" name="NameChuDe" placeholder="Nhập chủ đề" />
                </Label>

                {/* <Label className="mt-4">
          <span>Disabled</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label> */}


                <Label className="mt-4">
                    <span>Thể Loại</span>
                    <Select className="mt-1" id="theLoaiTinTuc" name="TheLoaiTinTuc">
                        <option>Thể hình</option>
                        <option>Sức Khỏe</option>
                        <option>Yoga</option>
                    </Select>
                </Label>

                <Label className="mt-4">
                    <span>Image</span>
                    <Input type="file" id="fileImageTinTuc" name="FileImageTinTuc" />
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
                     apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc" />
                </Label>
            </div>

            <div className="mb-8">
                <Button type ="submit">Tạo mới</Button>
            </div>

        </>
    )
}

export default FormTinTuc
