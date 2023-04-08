import React, { useEffect } from 'react'

import CTA from '../components/CTA'
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { Button } from '@windmill/react-ui'
import { UPDATE_GYM_KHOATAP_LIST_PENDING } from '../redux/constants/listKhoaTapconstans'
import { MailIcon } from '../icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { addFormKhoaTap } from '../redux/actions/formKhoaTapAction'
import TextArea from 'antd/es/input/TextArea'


const FormKhoaTap = () => {
  const [TenPTs, setTenPTs] = useState([]);
  //sử dụng lấy giá trị cbx pt
  useEffect(() => {
    const fetchPTs = async () => {
      const res = await axios.get('http://localhost:3002/api/pts');
      setTenPTs(res.data);
    };
    fetchPTs();
  }, []);
  // sử dụng lấy giá trị cbx clb
  const [TenCauLacBos, setTenCauLacBos] = useState([]);

  useEffect(() => {
    const fetchCLBs = async () => {
      const res = await axios.get('http://localhost:3002/api/caulacbos');
      setTenCauLacBos(res.data);
    };
    fetchCLBs();
  }, []);

  const [TenKhoaTap, setTenKhoaTap] = useState('');
  const [MotaKhoaTap, setMotaKhoaTap] = useState('');
  const [GiaTien, setGiaTien] = useState('');
  const [idPT, setTenPT] = useState('');
  const [idCLB, setTenCLB] = useState('');
  const [ChonNgayTap, setChonNgayTap] = useState('');
  const [GioBatDau, setGioBatDau] = useState('');
  const [GioKetThuc, setGioKetThuc] = useState('');
  const [ImageKhoaTap, setImageKhoaTap] = useState('');
  const [ThoiGianKhoaTap, setThoiGianKhoaTap] = useState('');
  const [idCauLacBo, setTenCauLacBo] = useState('');
  const dispatch = useDispatch();

  const handleSubmitKhoaTap = async (e) => {
    e.preventDefault();
    const itemKHOATAP = { TenKhoaTap, MotaKhoaTap, GiaTien, ChonNgayTap, idPT, idCLB,
      GioBatDau, GioKetThuc, ImageKhoaTap, ThoiGianKhoaTap ,idCauLacBo
    };
    // Sử dụng hàm dispatch để gọi hàm addFormKhoaTap và truyền vào đối tượng itemKT.
    //  Hàm addFormKhoaTap sẽ thêm đối tượng itemKT vào cơ sở dữ liệu.
    await dispatch(addFormKhoaTap(itemKHOATAP));
    setTenKhoaTap('');
    setMotaKhoaTap('');
    setGiaTien('');
    setTenPT('');
    setTenCLB('');
    setChonNgayTap('');
    setGioBatDau('');
    setGioKetThuc('');
    setImageKhoaTap('');
    setThoiGianKhoaTap('');
    setTenCauLacBo('');
    const resKT = await axios.get('http://localhost:3002/api/khoataps');
    dispatch({
      type: UPDATE_GYM_KHOATAP_LIST_PENDING,
      payload: resKT.data
    });
    // console.log("them thanh cong")
  };
  return (
    <>
      <PageTitle>FormKhoaTap</PageTitle>
      <CTA />
      <SectionTitle>Elements</SectionTitle>
      <form onSubmit={handleSubmitKhoaTap}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
          style={{
            paddingBottom: "65px",
            paddingTop: "25px"
          }}
        >
          <Label className="mb-4">
            <span>Tên Khóa Tập</span>
            <Input className="mt-1" id="namePT" name="NamePT" placeholder="Nhập tên khóa tập"
              value={TenKhoaTap}
              onChange={(e) => setTenKhoaTap(e.target.value)}
            />
          </Label>

          {/* <Label className="mb-4">
            <span>Mô tả</span>
            <TextArea className="mt-1" type="text" id="phonePT" name="PhonePT" placeholder="Nhập SĐT" 
            rows="3"
            value = {MotaKhoaTap}
            onChange = {(e) => setMotaKhoaTap(e.target.value)}
            />
        </Label> */}
          <Label className="mt-4">
            <span>Mô tả</span>
            <Textarea className="mt-1" rows="3" id="descriptionKhoaTap" name="DescriptionKhoaTap"
              placeholder="Mô tả khóa tập ở đây"
              value={MotaKhoaTap}
              onChange={(e) => setMotaKhoaTap(e.target.value)}
            />
          </Label>

          <Label className="mb-4">
            <span>Giá tiền</span>
            <Input className="mt-1" type="number" id="addressCLB" name="AddressCLB" placeholder="Nhập giá"
              value={GiaTien}
              onChange={(e) => setGiaTien(e.target.value)}
            />
          </Label>
          <Label className="mt-4">
            <span>Chọn PT hướng dẫn tập</span>      
            <Select className="mt-1" id="tenPT" name="TenPT"
              value={idPT}
              onChange={(e) => setTenPT(e.target.value)}
            >
              <option value="" disabled selected hidden >Vui lòng chọn PT</option>
              {TenPTs.map(pt => (               
                <option key={pt._id} value={pt._id}>                 
                  {pt.TenPT}
                </option>
              ))}
            </Select>
          </Label>
          <Label className="mt-4">
            <span>Chọn CLB</span>      
            <Select className="mt-1" id="tenPT" name="TenPT"
              value={idCLB}
              onChange={(e) => setTenCLB(e.target.value)}
            >
              <option value="" disabled selected hidden >Vui lòng chọn CLB</option>
              {TenCauLacBos.map(clb => (
                
                <option key={clb._id} value={clb._id}>
                  
                  {clb.TenCauLacBo}
                </option>
              ))}
            </Select>
          </Label>
          <Label className="mt-4">
            <span>Chọn ngày</span>
            <div className="flex justify-evenly ">
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_1" name="MaThu[]"
                    value="Mon"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);

                      } else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_1">Thứ 2</label>
                </div>
              </div>
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_2" name="MaThu[]"
                    value="Tue"
                    onChange={(e) => {
                      //thêm vào mảng ChonNgayTap thông qua hàm setChonNgayTap
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);
                      }//khi checkbox không được chọn nữa, giá trị của nó sẽ được loại bỏ khỏi mảng ChonNgayTap thông qua hàm filter.
                      else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_2">Thứ 3</label>
                </div>
              </div>
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_3" name="MaThu[]"
                    value="Wed"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);
                      } else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_3">Thứ 4</label>
                </div>
              </div>
            </div>

            <div className="flex justify-evenly mt-6">
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_4" name="MaThu[]"
                    value="Thu"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);
                      } else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_4">Thứ 5</label>
                </div>
              </div>
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_5" name="MaThu[]"
                    value="Fri"
                    onChange={(e) => {
                      //thêm vào mảng ChonNgayTap thông qua hàm setChonNgayTap
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);
                      } //khi checkbox không được chọn nữa, giá trị của nó sẽ được loại bỏ khỏi mảng ChonNgayTap thông qua hàm filter.
                      else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_5">Thứ 6</label>
                </div>
              </div>
              <div className="form-check form-check-inline">
                <div className="custom-control custom-checkbox">
                  <Input type="checkbox" className="custom-control-input" id="MaThu_6" name="MaThu[]"
                    value="Sat"
                    onChange={(e) => {
                      //thêm vào mảng ChonNgayTap thông qua hàm setChonNgayTap
                      if (e.target.checked) {
                        setChonNgayTap([...ChonNgayTap, e.target.value]);
                      } //khi checkbox không được chọn nữa, giá trị của nó sẽ được loại bỏ khỏi mảng ChonNgayTap thông qua hàm filter.
                      else {
                        setChonNgayTap(
                          ChonNgayTap.filter((day) => day !== e.target.value)
                        );
                      }
                    }}
                  />
                  <label className="custom-control-label" for="MaThu_6">Thứ 7</label>
                </div>
              </div>
            </div>

          </Label>
          <Label className="mt-4">
            <span>Thời gian</span>
            <Select className="mt-1" id="timeKhoaTap" name="TimeKhoaTap"
              onChange={(e) => {
                const value = e.target.value;
                const [gioBatDau, gioKetThuc] = value.split(' - ');
                setGioBatDau(gioBatDau);
                setGioKetThuc(gioKetThuc);
              }}
            >
              <option value="" disabled selected hidden >Chọn thời gian</option>
              <option value="8:00 - 10:00">8:00 - 10:00</option>
              <option value="10:00 - 12:00">10:00 - 12:00</option>
              <option value="13:00 - 15:00">13:00 - 15:00</option>
              <option value="15:00 - 17:00">15:00 - 17:00</option>
            </Select>
          </Label>

          <Label className="mb-4">
            <span>Image</span>
            <Input type="text" id="fileImagePT" name="FileImagePT"
              value={ImageKhoaTap}
              onChange={(e) => setImageKhoaTap(e.target.value)}
            />
          </Label>
          <Label className="mb-4">
            <span>Thời gian (tháng)</span>
            <Input type="number" id="fileImagePT" name="FileImagePT"
              value={ThoiGianKhoaTap}
              onChange={(e) => setThoiGianKhoaTap(e.target.value)}
            />
          </Label>

          {/* <span>Chọn câu lạc bộ</span>      
            <Select className="mt-1" id="tenCLB" name="tenCLB"
              value={idCauLacBo}
              onChange={(e) => setTenCauLacBo(e.target.value)}
            >
              {TenCauLacBos.map(clb => (
                <option key={clb._id} value={clb._id}>
                  
                  {clb.TenCauLacBo}
                </option>
              ))}
            </Select> */}
        </div>

        <div className="mb-8">
          <Button type="submit">Tạo mới</Button>
        </div>
      </form>
    </>
  )
}

export default FormKhoaTap
