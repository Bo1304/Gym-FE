import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

import {UPDATE_GYM_HOCVIEN_LIST_PENDING} from "../constants/listHocVienconstans";

export const actionFetchHocViens =   async (dispatch) => {
    // thunk action: nhận vào 2 tham số là dispatch và getState
    // dispatch: hàm dùng để đưa các action vào store
    // getState: hàm dùng để lấy state từ store
    try {
      const res = await axios({
        // url = domain + endpoint
        url: "http://localhost:3002/api/hocviens",
        method: "GET",
       
      });
      //Step 1:
      //khi set data API xong thì đẩy thêm data lên reducer nữa, bằng cách dùng dispatch
      dispatch({
        type: UPDATE_GYM_HOCVIEN_LIST_PENDING,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    } 
  };

