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
import { actionFetchHoaDons } from '../redux/actions/UserAction/ListHoaDonAction';
import { UPDATE_GYM_PT_LIST_PENDING } from '../redux/constants/listPTconstans'
import { gYMServices } from '../Service/gYMServices';
import { useHistory } from 'react-router-dom';

function ListHoaDon() {
  const list__HOADON = useSelector((state) => state.listHOADONGYM.list__HOADON);
  console.log(list__HOADON);
  const history = useHistory();
  const [selectedDetailsHoaDon, setselectedDetailsHoaDon] = useState(null);

  const detailsHD = (_id) => {
    const detailsHoaDon = dataTable1.find((item) => item._id === _id);
    console.log(detailsHoaDon);
    setselectedDetailsHoaDon(detailsHoaDon);
    history.push({
      pathname: `/details-hoadon/${_id}`,
      state: { detailsHoaDon },
    });
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((actionFetchHoaDons));
  }, [dispatch]);
  const response2 = list__HOADON.concat([])

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


  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 3
  const totalResults = list__HOADON.length

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



  useEffect(() => {
    setDataTable1(list__HOADON.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, list__HOADON])


  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])


  return (
    <>
      <PageTitle>Danh Sách Hóa Đơn</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Tên học viên</TableCell>
              <TableCell>Ngày tạo</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Tổng tiền</TableCell>
              <TableCell>Email</TableCell>

              <TableCell>Tùy chọn</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((itemhoadon) => (
              <TableRow >
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" /> */}
                    <div>
                      <p className="font-semibold">{itemhoadon.idHocVien.HoTenHocVien}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400" id={itemhoadon._id}>
                        {itemhoadon.idHocVien.GioiTinhHocVien === 1 ? "Nam" : "Nữ"}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="font-semibold">{new Date(itemhoadon.ngayTao).toLocaleDateString("be-BY").split('/').reverse().join('/')}</p>


                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{item.imageCLB}</span> */}
                  {itemhoadon.trangThai === "Đã thanh toán" ? (
                    <Badge className="text-sm">{itemhoadon.trangThai}</Badge>
                  ) : (
                    <Badge type="danger" className="text-sm ">
                      {itemhoadon.trangThai}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {/* <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span> */}
                  <span className="text-sm">
                    {itemhoadon.tongTien.toLocaleString('vi-VN',
                      {
                        style: 'currency', currency: 'VND'
                      }
                    )}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="text-sm">{itemhoadon.idHocVien.EmailHocVien}</span>
                </TableCell>
                <TableCell>
                  {/* Nút sửa */}

                  <Button
                    layout="link" size="icon" aria-label="Edit"
                    // onClick={openModal}
                    // onClick={() => openModal(itemhoadon)}
                    onClick={() => detailsHD(itemhoadon._id)}
                  >
                    <EditIcon className="w-5 h-5" aria-hidden="true" />

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

export default ListHoaDon
