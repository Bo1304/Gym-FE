import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import './LisKhoaTap.css'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
  Label, Modal, ModalHeader, ModalFooter,
  ModalBody, Input,

} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/demo/tableData'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchKhoaTaps } from '../redux/actions/listKhoaTapAction'
import { UPDATE_GYM_KHOATAP_LIST_PENDING } from '../redux/constants/listKhoaTapconstans'
import axios from 'axios'
// make a copy of the data, for the second table
const response2 = response.concat([])

function ListKhoaTap() {


  const list__KhoaTap = useSelector((state) => state.listKHOATAPGYM.list__KhoaTap);
  console.log(list__KhoaTap);

  // fetch dữ liệu từ action này sử dụng hook useDispatch để gửi action tới reducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((actionFetchKhoaTaps));
  }, [dispatch]);
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  const [editingClub, setEditingClub] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false)
  function openModal(club) {
    setIsModalOpen(true);
    setEditingClub(club);
  }
  function closeModal() {
    setIsModalOpen(false);
    setEditingClub(null);
  }
  const handleUpdateKhoaTap = async (id_KhoaTap) => {
    try {
      const res = await axios.put(
        `http://localhost:3002/api/khoataps/${id_KhoaTap}`,
        editingClub
      );
      const response2 = await axios.get(
        `http://localhost:3002/api/khoataps`);
      dispatch({ type: UPDATE_GYM_KHOATAP_LIST_PENDING, payload: response2.data });


      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle>ListKhoaTap</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8 w-100">

        <div className="containerItemKhoaHoc gap-4">
          {list__KhoaTap.map((item) => (
            <div class="pricing">
              <div class="plan popular">
                <span><SectionTitle key={item._id}>{item.TenKhoaTap}</SectionTitle></span>
                <SectionTitle>
                  <img src={item.ImageKhoaTap} style={{ objectFit: "cover", width: "100%", height: "50%" }} />
                </SectionTitle>
                <div class="price"><SectionTitle><h1
                  style={{
                    fontSize: 20,
                    marginRight: 20,

                  }}>
                  {item.GiaTien.toLocaleString('vi-VN',
                    {
                      style: 'currency', currency: 'VND'
                    }
                  )}
                </h1></SectionTitle></div>
                <ul class="features">
                  <li><i class="fas fa-check-circle"></i> <SectionTitle>Câu lạc bộ: {item.idCLB.TenCauLacBo}</SectionTitle></li>
                  <li><i class="fas fa-check-circle"></i> <SectionTitle>{item.ThoiGianKhoaTap} tháng</SectionTitle></li>
                  <li><i class="fas fa-check-circle"></i> <SectionTitle>{item.GioBatDau} - {item.GioKetThuc}</SectionTitle></li>
                  <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: {item.idPT.TenPT}</SectionTitle></li>
                  <li><i class="fas fa-check-circle"></i> <SectionTitle>Ngày tập: {item.ChonNgayTap.join(", ")}</SectionTitle></li>
                </ul>
                {/* <Button>
                  <SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle>
                </Button> */}

                <Button 
                  layout="link" size="icon" aria-label="Edit"
                  // onClick={openModal}
                  onClick={() => openModal(item)}
                >
                  {/* <EditIcon className="w-5 h-5" aria-hidden="true" /> */}
              
                   <h2 style ={{
                    marginTop: '10px',
                  
                  }}>
                   Update
                    </h2> 
               
                </Button>
              
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <ModalHeader>Cập nhật thông tin khóa tập</ModalHeader>
                  <ModalBody>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>
                          <span>Tên khóa tập</span>
                          <Input
                            className="mt-1"
                            value={editingClub?.TenKhoaTap}
                            onChange={(e) =>
                              setEditingClub({
                                ...editingClub,
                                TenKhoaTap: e.target.value,
                              })
                            }
                          />
                        </Label>
                        <Label>
                          <span>Mô tả</span>
                          <Input
                            className="mt-1"
                            value={editingClub?.MotaKhoaTap}
                            onChange={(e) =>
                              setEditingClub({
                                ...editingClub,
                                MotaKhoaTap: e.target.value,
                              })
                            }
                          />
                        </Label>
                      </div>
                      <div>
                        <Label>
                          <span>Giá tiền</span>
                          <Input
                            className="mt-1"
                            value={editingClub?.GiaTien}
                            onChange={(e) =>
                              setEditingClub({
                                ...editingClub,
                                GiaTien: e.target.value,
                              })
                            }
                          />
                        </Label>
                        <Label>
                          <span>Hình ảnh</span>
                          <Input
                            className="mt-1"
                            value={editingClub?.ImageKhoaTap}
                            onChange={(e) =>
                              setEditingClub({
                                ...editingClub,
                                ImageKhoaTap: e.target.value,
                              })
                            }
                          />
                        </Label>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      layout="outline"
                      onClick={() => {
                        closeModal();
                        // setClubInfo({
                        //   id: "",
                        //   cLBName: "",
                        //   cLBImage: "",
                        //   cLBAddress: "",
                        //   cLBPhone: "",
                        // });
                      }}
                    >
                      Hủy
                    </Button>
                    <Button
                      onClick={() => handleUpdateKhoaTap(editingClub._id)}
                    >
                      Cập nhật
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </div>

          ))}


        </div>



        {/* <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter> */}
      </TableContainer>


    </>
  )
}

export default ListKhoaTap
