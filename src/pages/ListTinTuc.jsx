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
import axios from "axios";
import response from '../utils/demo/tableData'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchTinTucs, getItemFromNextPageAfterDeleteTinTuc } from '../redux/actions/listTinTucAction'
import { UPDATE_GYM_TINTUC_LIST_PENDING } from '../redux/constants/listTinTucconstans'
import { useHistory } from "react-router-dom";

// make a copy of the data, for the second table
const response2 = response.concat([])

function ListTinTuc() {
  const list__TINTUC = useSelector((state) => state.listTINTUCGYM.list__TINTUC);
  console.log(list__TINTUC);

  // const response2 = list__TINTUC.concat([])
  const dispatch = useDispatch();
 // const list__TINTUC = useSelector(state => state.users);
  useEffect(() => {
    dispatch((actionFetchTinTucs));
  }, [dispatch]);
  const response2 = list__TINTUC.concat([])



  const history = useHistory();
  //Tạo một state mới để lưu ID của tin tức được chọn để chỉnh sửa
  const [selectedId, setSelectedId] = useState(null)

  //lưu ID của tin tức được chọn vào state selectedId và chuyển sang trang DetailsTinTuc
  const handleEdit = (id) => {
    setSelectedId(id)
    history.push(`/detailstintuc/${id}`)
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
  const totalResults = list__TINTUC.length

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
    setDataTable1(list__TINTUC.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1, list__TINTUC])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

    const handleDeletee = async (id) => {
    try {
      // xóa item từ API
      await axios.delete(
        `http://localhost:3002/api/tintucs/${id}`);
      // xóa item từ list__CLB state
      const newList = dataTable1.filter((item) => item.id !== id);
      setDataTable1(newList);
      // lưu mới list__CLB state
     // và thay đổi, re-render
      const response2 = await axios.get(
        `http://localhost:3002/api/tintucs`);
      dispatch({ type: UPDATE_GYM_TINTUC_LIST_PENDING, payload: response2.data });
      getItemFromNextPageAfterDeleteTinTuc(dataTable1, pageTable1, dataTable2, setDataTable1, setDataTable2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageTitle>ListTinTuc</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Tên chủ đề</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Nội dung</TableCell>
              <TableCell>Tùy chọn</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable1.map((News, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    {/* <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User avatar" /> */}
                    <div>
                      <p className="font-semibold">{News.TenChuDe}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400"id={News._id}>{News.TheLoaiTinTuc}</p>
                    </div>
                  </div>
                </TableCell>
                {/* <TableCell>
                  <span className="text-sm"> {News.TheLoaiTinTuc}</span>
                </TableCell> */}
                <TableCell>
                <img className=' w-40 mr-3' src={News.ImageTinTuc} alt="" />
                </TableCell>
                <TableCell>
                  <span className="text-sm">{News.NoiDungTinTuc.length > 50 ? News.NoiDungTinTuc.slice(0, 50)+'...' : News.NoiDungTinTuc}
                  </span>
                </TableCell>
                <TableCell>
                <Button layout="link" size="icon" aria-label="Edit"
                onClick={() => handleEdit(News._id)}
                >
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                      chỉnh sửa
                    </Button>
                    <Button layout="link" size="icon" aria-label="Delete  "
                    onClick={() => handleDeletee(News._id)}
                    >
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
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

export default ListTinTuc
