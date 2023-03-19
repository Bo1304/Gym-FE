import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as actionsTypes from "../constants/listCLBcontans";
import {UPDATE_GYM_CLB_LIST_PENDING} from "../constants/listCLBcontans"
// import {pageTable1, setPageTable1 , pageTable2, setPageTable2 
//   , dataTable1, setDataTable1,dataTable2, setDataTable2} from "../../pages/ListCLB"
import { gYMServices } from "../../Service/gYMServices";

export const actionFetchUsers =   async (dispatch) => {
    // thunk action: nhận vào 2 tham số là dispatch và getState
    // dispatch: hàm dùng để đưa các action vào store
    // getState: hàm dùng để lấy state từ store
    try {
      // const res = await axios({
      //   // url = domain + endpoint
      //   url: "https://63e70c7bb85592e9c949972a.mockapi.io/API-GYM",
      //   method: "GET",
    
      // });
      const res = await gYMServices.getlistCLB();
      //Step 1:
      //khi set data API xong thì đẩy thêm data lên reducer nữa, bằng cách dùng dispatch
      dispatch({
        type: UPDATE_GYM_CLB_LIST_PENDING,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    } 
  };

   // // func sau khi xoa thi item bat buoc la 3 item tren 1 trang thì trang 2 lùi về 1 item chuyển về trang 1
   export function getItemFromNextPageAfterDelete(dataTable1, pageTable1, dataTable2, setDataTable1, setDataTable2) {
    if (dataTable1.length < 3 && pageTable1 === 1 && dataTable2.length > 0) {
      const firstItemOfNextPage = dataTable2[0];
      const newDataTable2 = dataTable2.slice(1);
      setDataTable2(newDataTable2);
      setDataTable1([...dataTable1, firstItemOfNextPage]);
    }
  }
  
