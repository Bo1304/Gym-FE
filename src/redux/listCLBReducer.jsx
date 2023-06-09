import { produce } from "immer";
//tạo ra một phiên bản mới của đối tượng (object) hoặc mảng (array) mà không làm thay đổi đối tượng hoặc mảng gốc.
//Immer sẽ tạo ra một pb mới của đối tượng gốc dựa trên các thay đổi mà chúng ta đã thực hiện trên đối tượng "draft".
import { createStore } from 'redux';
import {
  DELETE_GYM_CLB_LIST_PENDING , UPDATE_GYM_CLB_LIST_PENDING
} from '../redux/constants/listCLBcontans';
const initialState = {
  list__CLB: [],
};

const reducerListCLB = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === UPDATE_GYM_CLB_LIST_PENDING) { 
      //Step 2:
      // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
      //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
      draft.list__CLB = action.payload;
    }
    // if(action.type === "LOAD_TABLE_DATA"){
    //   return {
    //     ...state,
    //     tableData: action.data,
    //   };
    // }
    if(action.type === DELETE_GYM_CLB_LIST_PENDING) {
      const updatedList = state.list__CLB.filter(user => user.id !== action.payload);
      return {
        ...state,
        list__CLB: updatedList
      };
   
    }

  });
};


export default reducerListCLB;
