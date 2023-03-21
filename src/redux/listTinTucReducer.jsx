import { produce } from "immer";
import * as actionsTypes from "./constants/listCLBcontans";
import { createStore } from 'redux';
import {
  DELETE_GYM_TINTUC_LIST_PENDING , UPDATE_GYM_TINTUC_LIST_PENDING
} from '../redux/constants/listTinTucconstans';
const initialState = {
  list__TINTUC: [],
};

const reducerListTINTUC = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === UPDATE_GYM_TINTUC_LIST_PENDING) { 
      //Step 2:
      // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
      //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
      draft.list__TINTUC = action.payload;
    }
    // if(action.type === "LOAD_TABLE_DATA"){
    //   return {
    //     ...state,
    //     tableData: action.data,
    //   };
    // }
    if(action.type === DELETE_GYM_TINTUC_LIST_PENDING) {
      const updatedList = state.list__TINTUC.filter(user => user.id !== action.payload);
      return {
        ...state,
        list__TINTUC: updatedList
      };
   
    }

  });
};


export default reducerListTINTUC;
