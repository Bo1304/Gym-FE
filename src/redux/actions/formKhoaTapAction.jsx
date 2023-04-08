import axios from 'axios';
import {
  ADD_KHOATAP_REQUEST,
  ADD_KHOATAP_SUCCESS,
  ADD_KHOATAP_FAIL,
} from '../constants/formKhoaTapconstans';
export const addFormKhoaTap = (itemKHOATAP) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_PT_REQUEST });

    const res = await axios.post('http://localhost:3002/api/khoataps', itemKHOATAP);

    dispatch({
      type: ADD_KHOATAP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_KHOATAP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};