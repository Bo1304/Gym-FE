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
} from '@windmill/react-ui'
import { EditIcon, TrashIcon } from '../icons'

import response from '../utils/demo/tableData'
// make a copy of the data, for the second table
const response2 = response.concat([])

function ListHoaDon() {
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

  return (
    <>
      <PageTitle>ListHoaDon</PageTitle>

      <CTA />

      <SectionTitle>Simple table</SectionTitle>
      <TableContainer className="mb-8">
        <div className="containerItemKhoaHoc gap-4">
          <div class="pricing">
            <div class="plan popular">
              <span><SectionTitle>Tên khóa tập</SectionTitle></span>
              <SectionTitle><img src="https://www.citigym.com.vn/storage/uploads/rin-1822-375x440.jpg" /></SectionTitle>
              <div class="price"><SectionTitle><h1
                style={{
                  fontSize: 20,
                  marginRight: 50,
                  
                }}
              >$10</h1></SectionTitle></div>
              <ul class="features">
                <li><i class="fas fa-check-circle"></i> <SectionTitle>2 tháng</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>8:00 - 10:00</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: Lý Bo</SectionTitle></li>

              </ul>
              <button><SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle></button>
            </div>
          </div>

          <div class="pricing">
            <div class="plan popular">
              <span><SectionTitle>Tên khóa tập</SectionTitle></span>
              <SectionTitle><img src="https://www.citigym.com.vn/storage/uploads/rin-1822-375x440.jpg" /></SectionTitle>
              <div class="price"><SectionTitle><h1
                style={{
                  fontSize: 20
                }}
              >$10</h1></SectionTitle></div>
              <ul class="features">
                <li><i class="fas fa-check-circle"></i> <SectionTitle>2 tháng</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>8:00 - 10:00</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: Lý Bo</SectionTitle></li>

              </ul>
              <button><SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle></button>
            </div>
          </div>

          <div class="pricing">
            <div class="plan popular">
              <span><SectionTitle>Tên khóa tập</SectionTitle></span>
              <SectionTitle><img src="https://www.citigym.com.vn/storage/uploads/rin-1822-375x440.jpg" /></SectionTitle>
              <div class="price"><SectionTitle><h1
                style={{
                  fontSize: 20
                }}
              >$10</h1></SectionTitle></div>
              <ul class="features">
                <li><i class="fas fa-check-circle"></i> <SectionTitle>2 tháng</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>8:00 - 10:00</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: Lý Bo</SectionTitle></li>

              </ul>
              <button><SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle></button>
            </div>
          </div>
          <div class="pricing">
            <div class="plan popular">
              <span><SectionTitle>Tên khóa tập</SectionTitle></span>
              <SectionTitle><img src="https://www.citigym.com.vn/storage/uploads/rin-1822-375x440.jpg" /></SectionTitle>
              <div class="price"><SectionTitle><h1
                style={{
                  fontSize: 20
                }}
              >$10</h1></SectionTitle></div>
              <ul class="features">
                <li><i class="fas fa-check-circle"></i> <SectionTitle>2 tháng</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>8:00 - 10:00</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: Lý Bo</SectionTitle></li>

              </ul>
              <button><SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle></button>
            </div>
          </div>

          <div class="pricing">
            <div class="plan popular">
              <span><SectionTitle>Tên khóa tập</SectionTitle></span>
              <SectionTitle><img src="https://www.citigym.com.vn/storage/uploads/rin-1822-375x440.jpg" /></SectionTitle>
              <div class="price"><SectionTitle><h1
                style={{
                  fontSize: 20
                }}
              >$10</h1></SectionTitle></div>
              <ul class="features">
                <li><i class="fas fa-check-circle"></i> <SectionTitle>2 tháng</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>8:00 - 10:00</SectionTitle></li>
                <li><i class="fas fa-check-circle"></i> <SectionTitle>PT hướng dẫn: Lý Bo</SectionTitle></li>

              </ul>
              <button><SectionTitle>  <EditIcon className="w-5 h-5" aria-hidden="true" />Chỉnh sửa</SectionTitle></button>
            </div>
          </div>
          
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

export default ListHoaDon
