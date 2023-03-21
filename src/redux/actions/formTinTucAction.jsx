
import axios from 'axios';
import {
  ADD_TINTUC_REQUEST,
  ADD_TINTUC_SUCCESS,
  ADD_TINTUC_FAIL,
} from '../constants/formTinTucconstans';
export const addFormTinTuc = (itemTinTuc) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_PT_REQUEST });

    const res = await axios.post('http://localhost:3002/api/tintucs', itemTinTuc);

    dispatch({
      type: ADD_TINTUC_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TINTUC_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};