import React, { useEffect, useRef } from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
// import textarea from 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
import { Editor } from "@tinymce/tinymce-react";

import { MailIcon } from '../icons'

function FormPT() {

    return (
        <>
            <PageTitle>FormPT</PageTitle>
            <CTA />
            <SectionTitle>Elements</SectionTitle>

            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
            style={{
                paddingBottom: "65px",
                paddingTop: "25px"
            }}
            >
                <Label className="mb-4">
                    <span>Họ tên PT</span>
                    <Input className="mt-1" id="namePT" name="NamePT" placeholder="Nhập tên PT" />
                </Label>

                <Label className="mb-4">
                    <span>Số điện thoại</span>
                    <Input className="mt-1" type="tel" id="phonePT" name="PhonePT" placeholder="Nhập SĐT" />
                </Label>

                <Label className="mb-4">
                    <span>Email</span>
                    <Input className="mt-1" type="email" id="addressCLB" name="AddressCLB" placeholder="Nhập email" />
                </Label>
              

                <Label className="mb-4">
                    <span>Image</span>
                    <Input type="file" id="fileImagePT" name="FileImagePT" />
                </Label>
            </div>
     
            <div className="mb-8">
                <Button type ="submit">Tạo mới</Button>
            </div>

        </>
    )
}

export default FormPT
