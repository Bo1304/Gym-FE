
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

export const addFormCLB = (itemCLB) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_CLB_REQUEST });

    const res = await axios.post('https://63e70c7bb85592e9c949972a.mockapi.io/API-GYM', itemCLB);

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

// export const handleDelete = async (CLBid, dispatch) => {
//   try {
//     await axios({
//       method: "DELETE",
//       url: `https://63e70c7bb85592e9c949972a.mockapi.io/API-GYM/${CLBid}`,

//     });
//     dispatch({
//       type: DELETE_GYM_CLB_LIST_PENDING,
//       payload: CLBid
//     })

//     actionFetchUsers();
//   } catch (error) {
//     console.log(error);
//   }
// };



