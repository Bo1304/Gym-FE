
import axios from 'axios';
import {
  ADD_CLB_REQUEST,
  ADD_CLB_SUCCESS,
  ADD_CLB_FAIL,
} from '../constants/formCLBcontans';
import {
  DELETE_GYM_CLB_LIST_PENDING
} from '../constants/listCLBcontans';

import { actionFetchUsers } from '../actions/listCLBAction';

export const FormRegisterUsers = (itemCLB) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_CLB_REQUEST });

    const res = await axios.post('http://localhost:3002/api/caulacbos', itemCLB);

    dispatch({
      type: ADD_CLB_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CLB_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};





