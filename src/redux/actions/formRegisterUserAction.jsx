
import axios from 'axios';
import {
    ADD_USER_REGISTER_REQUEST,
    ADD_USER_REGISTER_SUCCESS,
    ADD_USER_REGISTER_FAIL,
} from '../constants/formRegisterUserconstans';
export const addFormHV = (itemHocVien) => async (dispatch) => {
  try {
    // dispatch({ type: ADD_PT_REQUEST });

    const res = await axios.post('http://localhost:3002/api/hocviens', itemHocVien);

    dispatch({
      type: ADD_USER_REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};