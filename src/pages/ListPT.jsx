import React, { useState, useEffect } from 'react'
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
import { actionFetchPTs, getItemFromNextPageAfterDeletePT } from '../redux/actions/listPTAction';
import {UPDATE_GYM_PT_LIST_PENDING} from '../redux/constants/listPTconstans'
import { gYMServices } from '../Service/gYMServices';

function ListPT() {
  const list__PT = useSelector((state) => state.listPTGYM.list__PT);
  console.log(list__PT);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((actionFetchPTs));
  }, [dispatch]);
  const response2 = list__PT.concat([])

  // const [editingClub1, setEditingClub1] = useState(null);
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
  const resultsPerPage = 3
  const totalResults = list__PT.length

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // call API here
  }, [currentPage]);

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
    setCurrentPage(p.selected + 1);
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
    setCurrentPage(p.selected + 1);
  }
 

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(list__PT.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, list__PT])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])


   const [clubInfo, setClubInfo] = useState({
    id: "",
    TenPT: "",
    SoDienThoaiPT: "",
    EmailPT: "",
    ImagePT: "",
  });
  const handleDeletee = async (id) => {
    try {
      // xóa item từ API
      await axios.delete(
        `http://localhost:3002/api/pts/${id}`);
      // xóa item từ list__CLB state
      const newList = dataTable1.filter((item) => item.id !== id);
      setDataTable1(newList);
      // lưu mới list__CLB state
     // và thay đổi, re-render
      const response2 = await axios.get(
        `http://localhost:3002/api/pts`);
      dispatch({ type: UPDATE_GYM_PT_LIST_PENDING, payload: response2.data });
      getItemFromNextPageAfterDeletePT(dataTable1, pageTable1, dataTable2, setDataTable1, setDataTable2);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateCLB = async (id_CLB) => {
    try {
      const res = await axios.put(
        `http://localhost:3002/api/pts/${id_CLB}`,
        editingClub
      );
      const response2 =  await axios.get(
        `http://localhost:3002/api/pts`);
      dispatch({ type: UPDATE_GYM_PT_LIST_PENDING, payload: response2.data });
      // dispatch({
      //   type: "UPDATE_GYM_PT_LIST_PENDING",
      //   payload: res.data,
      // });
  
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <>
      <PageTitle>Danh Sách PT</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Tên PT</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Email</TableCell>
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
                      <p className="font-semibold">{item.TenPT}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400" id={item._id}>{item.TenPT}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <img className=' w-40 mr-3' src={item.ImagePT} alt="" />

                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{item.imageCLB}</span> */}
                  <span className="text-sm"> {item.EmailPT}</span>
                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span> */}
                  <span className="text-sm">{item.SoDienThoaiPT}</span>
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
                              value={editingClub?.TenPT}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  TenPT: e.target.value,
                                })
                              }
                            />
                          </Label>
                          <Label>
                            <span>Địa chỉ</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.SoDienThoaiPT}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  SoDienThoaiPT: e.target.value,
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
                              value={editingClub?.EmailPT}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  EmailPT: e.target.value,
                                })
                              }
                            />
                          </Label>
                          <Label>
                            <span>Hình ảnh</span>
                            <Input
                              className="mt-1"
                              value={editingClub?.ImagePT}
                              onChange={(e) =>
                                setEditingClub({
                                  ...editingClub,
                                  ImagePT: e.target.value,
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
          onChange={onPageChangeTable1}
          label="Table navigation"
        />
      </TableContainer>


    </>
  )
}

export default ListPT
