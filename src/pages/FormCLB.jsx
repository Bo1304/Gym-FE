import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
// import textarea from 'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js';
import { Editor } from "@tinymce/tinymce-react";
import { MailIcon } from '../icons'
import { useDispatch } from 'react-redux';
import { addFormCLB } from '../redux/actions/formCLBAction';
import { gYMServices } from '../Service/gYMServices';
import { UPDATE_GYM_CLB_LIST_PENDING } from '../redux/constants/listCLBcontans';



const FormCLB = () => {
  const [TenCauLacBo, setTenCauLacBo] = useState('');
  const [DiaChiCLB, setDiaChiCLB] = useState('');
  const [SoDienThoaiCLB, setSoDienThoaiCLB] = useState('');
  const [ImageCLB, setImageCLB] = useState('');



  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { TenCauLacBo, DiaChiCLB, SoDienThoaiCLB, ImageCLB };
    // Sử dụng hàm dispatch để gọi hàm addFormCLB và truyền vào đối tượng product.
    //  Hàm addFormCLB sẽ thêm đối tượng product vào cơ sở dữ liệu.
    await dispatch(addFormCLB(product));
    setTenCauLacBo('');
    setDiaChiCLB('');
    setSoDienThoaiCLB('');
    setImageCLB('');
    const reponseRender = await gYMServices.getlistCLB();
    dispatch({
      type: UPDATE_GYM_CLB_LIST_PENDING,
      payload: reponseRender.data
    });
  };
  




  return (
    <>
      <PageTitle>FormCLB</PageTitle>
      <CTA />
      <SectionTitle>Elements</SectionTitle>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
          style={{
            paddingBottom: "65px",
            paddingTop: "25px"
          }}
        >
          <Label className="mb-4">
            <span>Tên câu lạc bộ</span>
            <Input className="mt-1" id="TenCauLacBo" name="TenCauLacBo" placeholder="Nhập tên CLB"
              value={TenCauLacBo}
              onChange={(e) => setTenCauLacBo(e.target.value)}
            />
          </Label>

          <Label className="mb-4">
            <span>Địa chỉ</span>
            <Input className="mt-1" id="addressCLB"
              name="AddressCLB"
              value={DiaChiCLB}
              onChange={(e) => setDiaChiCLB(e.target.value)}
              placeholder="Nhập địa chỉ" />
          </Label>
          <Label className="mb-4">
            <span>Số điện thoại</span>
            <Input className="mt-1" type="tel" id="phoneNumberCLB" name="phoneNumberCLB"
              value={SoDienThoaiCLB}
              onChange={(e) => setSoDienThoaiCLB(e.target.value)}
              placeholder="Nhập SĐT" />
          </Label>

          <Label className="mb-4">
            <span>Image</span>
            <Input id="imageCLB" name="imageCLB"
              value={ImageCLB}
              onChange={(e) => setImageCLB(e.target.value)}
            />
          </Label>
        </div>

        <div className="mb-8">
          <Button type="submit">Tạo mới</Button>
        </div>
      </form>


    </>
  )
};

export default FormCLB;


