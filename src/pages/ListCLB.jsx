import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import useRequest, { response } from "../CustomHooks/useRequest";

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'

import CTA from '../components/CTA'
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
  Modal, ModalHeader, ModalFooter,
  ModalBody, Label, Input,
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'
import ReactPaginate from 'react-paginate';
 import { actionFetchUsers } from '../redux/actions/listCLBAction';

import Swal from 'sweetalert2';
//import withReactContent from 'sweetalert2-react-content';

// const MySwal = withReactContent(Swal);
import { getItemFromNextPageAfterDelete } from '../redux/actions/listCLBAction';
import {UPDATE_GYM_CLB_LIST_PENDING} from "../redux/constants/listCLBcontans";
import { gYMServices } from '../Service/gYMServices';

function ListCLB() {

  // const  HandleClick = () =>{
  //   MySwal.fire({
  //     title: 'Success',
  //     type: 'success',
  //     text: 'hello world',
  //   });
  // }

  // state để lưu thông tin của CLB đang được sửa, giá trị ban đầu null nheeee
  const [editingClub1, setEditingClub1] = useState(null);
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

  
  // lấy data api xuống từ store
  const list__CLB = useSelector((state) => state.listCLBGYM.list__CLB);
  console.log(list__CLB);
  const dispatch = useDispatch();


  const response2 = list__CLB.concat([])
//   // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

//   // setup data for every table
 const [dataTable1, setDataTable1] = useState([])
 const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 3
  const totalResults = list__CLB.length

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // call API here
  }, [currentPage]);

  
  function onPageChangeTable1(p) {
    setPageTable1(p)
    setCurrentPage(p.selected + 1);
  }

 
  function onPageChangeTable2(p) {
    setPageTable2(p)
    setCurrentPage(p.selected + 1);
  }
 

 
  useEffect(() => {
    setDataTable1(list__CLB.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, list__CLB])

 
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  const [clubInfo, setClubInfo] = useState({
    id: "",
    TenCauLacBo: "",
    DiaChiCLB: "",
    SoDienThoaiCLB: "",
    ImageCLB: "",
  });

  // vấn đề hàm DELETE này đc viết để xử lý vấn đề khi xóa mà nó không render lại giao diện và không cập nhật lại ds khi xóa
  //CỤ THỂ: hàm này sử dụng axios.delete để xóa item tương ứng với id truyền vào từ server API. 
  // Sau khi xóa item thành công, hàm này tiếp tục cập nhật lại danh sách dataTable1 
  // bằng cách lọc bỏ item đã xóa khỏi danh sách cũ và gán danh sách mới này vào state bằng setDataTable1(newList).
  // Sau đó, hàm này cũng gửi một request axios.get tới server API để lấy danh sách mới từ server 
  // và cập nhật lại state bằng cách gọi hàm dispatch({ type: UPDATE_GYM_CLB_LIST_PENDING, payload: response2.data });.
  const handleDeletee = async (_id) => {
    try {
      // xóa item từ API
      await gYMServices.deleteListCLB(_id);
      // xóa item từ list__CLB state
      const newList = dataTable1.filter((item) => item._id !== _id);
      setDataTable1(newList);
      // lưu mới list__CLB state
     // và thay đổi, re-render
      const response2 = await gYMServices.getlistCLB();
      dispatch({ type: UPDATE_GYM_CLB_LIST_PENDING, payload: response2.data });
      getItemFromNextPageAfterDelete(dataTable1, pageTable1, dataTable2, setDataTable1, setDataTable2);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCLB = async (id_CLB) => {
    try {
      const res = await axios.put(
        `http://localhost:3002/api/caulacbos/${id_CLB}`,
        editingClub
      );
      const response2 = await gYMServices.getlistCLB();
      dispatch({ type: UPDATE_GYM_CLB_LIST_PENDING, payload: response2.data });
    
  
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageTitle>ListCLB</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Câu lạc bộ</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Tùy chọn</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((item) => (
              <TableRow >
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" /> */}
                    <div>
                      <p className="font-semibold">{item.TenCauLacBo}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400" id={item.id} >{item.TenCauLacBo}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <img className=' w-40 mr-3' src={item.ImageCLB} alt="" />

                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{item.imageCLB}</span> */}
                  <span className="text-sm"> {item.DiaChiCLB}</span>
                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span> */}
                  <span className="text-sm">{item.SoDienThoaiCLB}</span>
                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{user.job}</span> */}


                  {/* Nút sửa */}

                  <Button
                    layout="link" size="icon" aria-label="Edit"
                   // onClick={openModal}
                    onClick={() => openModal(item)}
                    >
                    <EditIcon className="w-5 h-5" aria-hidden="true" />
                  
                  </Button>
                  {/* <div>
                    <Button onClick={openModal}>Open modal</Button>
                  </div> */}
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <ModalHeader>Sửa thông tin CLB</ModalHeader>
                    <ModalBody>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>
                            <span>Tên CLB</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.TenCauLacBo}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  TenCauLacBo: e.target.value,
                                })
                              }
                            />
                          </Label>
                          <Label>
                            <span>Địa chỉ</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.DiaChiCLB}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  DiaChiCLB: e.target.value,
                                })
                              }
                            />
                          </Label>
                        </div>
                        <div>
                          <Label>
                            <span>Số điện thoại</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.SoDienThoaiCLB}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  SoDienThoaiCLB: e.target.value,
                                })
                              }
                            />
                          </Label>
                          <Label>
                            <span>Hình ảnh</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.ImageCLB}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  ImageCLB: e.target.value,
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
                         onClick={() => handleUpdateCLB(editingClub._id)}
                      >
                        Cập nhật
                      </Button>
                    </ModalFooter>
                  </Modal>
                  <Button
                  size="icon" aria-label="Delete"
                    layout="link"
                    onClick={() => handleDeletee(item._id)} >
                     <TrashIcon className="w-5 h-5" aria-hidden="true" />                   
                  </Button>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination
          totalResults={totalResults}
          resultsPerPage={resultsPerPage}
          onChange={setPageTable1}      
          label="Table navigation"
        />
      </TableContainer>
    </>
  )

}



export default ListCLB;