import React, { useState, useEffect } from 'react'

import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import { UPDATE_GYM_PT_LIST_PENDING } from '../redux/constants/listPTconstans'
import { actionFetchHoaDons } from '../redux/actions/UserAction/ListHoaDonAction';
import { gYMServices } from '../Service/gYMServices';
import { useHistory } from 'react-router-dom';
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchHocViens } from '../redux/actions/listHocVienAction'
import { actionFetchKhoaTaps } from '../redux/actions/listKhoaTapAction'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  const list__HOADON = useSelector((state) => state.listHOADONGYM.list__HOADON);
  console.log(list__HOADON);
  console.log(list__HOADON.tongTien)
  
  
  const totalTongTien = list__HOADON.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.tongTien;
  }, 0);

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch((actionFetchHoaDons));
  }, [dispatch]);


  // hocvien
  const list__HOCVIEN = useSelector((state) => state.listHOCVIENGYM.list__HOCVIEN);
  const [totalClients, setTotalClients] = useState(0); 
  useEffect(() => {
    // Thêm useEffect mới để đếm số lượng phần tử trong mảng
    setTotalClients(list__HOCVIEN.length);
  }, [list__HOCVIEN]);

  useEffect(() => {
    dispatch((actionFetchHocViens));
  }, [dispatch]);

  // KhoaTap
  const list__KhoaTap = useSelector((state) => state.listKHOATAPGYM.list__KhoaTap);
  const [totalKT, setTotalKT] = useState(0); 
  useEffect(() => {
    // Thêm useEffect mới để đếm số lượng phần tử trong mảng
    setTotalKT(list__KhoaTap.length);
  }, [list__KhoaTap]);

  useEffect(() => {
    dispatch((actionFetchKhoaTaps));
  }, [dispatch]);
  return (
    <>
      
      <PageTitle>Dashboard</PageTitle>

<CTA />

{/* <!-- Cards --> */}
<div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
  <InfoCard title="Tổng số học viên" value={totalClients}>
    <RoundIcon
      icon={PeopleIcon}
      iconColorClass="text-orange-500 dark:text-orange-100"
      bgColorClass="bg-orange-100 dark:bg-orange-500"
      className="mr-4"
    />
  </InfoCard>

  <InfoCard title="Tổng doanh thu" value={` ${totalTongTien}`}>
    <RoundIcon
      icon={MoneyIcon}
      iconColorClass="text-green-500 dark:text-green-100"
      bgColorClass="bg-green-100 dark:bg-green-500"
      className="mr-4"
    />
  </InfoCard>

  <InfoCard title="Tổng khóa tập" value={totalKT}>
    <RoundIcon
      icon={CartIcon}
      iconColorClass="text-blue-500 dark:text-blue-100"
      bgColorClass="bg-blue-100 dark:bg-blue-500"
      className="mr-4"
    />
  </InfoCard>

  <InfoCard title="Pending contacts" value="">
    <RoundIcon
      icon={ChatIcon}
      iconColorClass="text-teal-500 dark:text-teal-100"
      bgColorClass="bg-teal-100 dark:bg-teal-500"
      className="mr-4"
    />
  </InfoCard>
</div>

     
    </>
  )
}

export default Dashboard
