
import axios from 'axios';
import {
  ADD_PT_REQUEST,
  ADD_PT_SUCCESS,
  ADD_PT_FAIL,
} from '../constants/formPTconstans';
export const addFormPT = (itemPT) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_PT_REQUEST });

    const res = await axios.post('http://localhost:3002/api/pts', itemPT);

    dispatch({
      type: ADD_PT_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};