import React, { useState, useEffect } from 'react'

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
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'
import { useDispatch, useSelector } from 'react-redux'
import response from '../utils/demo/tableData'
import { actionFetchHocViens } from '../redux/actions/listHocVienAction'
// make a copy of the data, for the second table
const response2 = response.concat([])

function ListHocVien() {
  const list__HOCVIEN = useSelector((state) => state.listHOCVIENGYM.list__HOCVIEN);
  console.log(list__HOCVIEN);

  // const response2 = list__HOCVIEN.concat([])
  const dispatch = useDispatch();
 // const list__HOCVIEN = useSelector(state => state.users);
  useEffect(() => {
    dispatch((actionFetchHocViens));
  }, [dispatch]);
  const response2 = list__HOCVIEN.concat([])

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
  const totalResults = list__HOCVIEN.length

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
    setDataTable1(list__HOCVIEN.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, list__HOCVIEN])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  return (
    <>
      <PageTitle>ListHocVien</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Họ tên</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Giới Tính</TableCell>
              <TableCell>Ngày Sinh</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ngày đăng ký</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" /> */}
                        {/* // chỗ để set img avatar */}
                    <div>
                      <p className="font-semibold">{user.HoTenHocVien}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400" id={user._id}>{user.HoTenHocVien}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm"> {user.SDTHocVien}</span>
                </TableCell>
                <TableCell>
                <span className="text-sm">{user.GioiTinhHocVien === 1 ? 'nam' : 'nữ'}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.NgaySinhHocVien).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{user.EmailHocVien}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.NgayDangKy).toLocaleDateString()}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>

     
    </>
  )
}

export default ListHocVien
