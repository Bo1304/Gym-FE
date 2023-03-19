import { produce } from "immer";
import * as actionsTypes from "./constants/listCLBcontans";
import { createStore } from 'redux';
const initialState = {
  add__CLB: [],

};

const reducerFormCLB = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === "ADD_CLB_REQUEST") { 
      //Step 2:
      // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
      //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
      draft.add__CLB = action.payload;
    }
    // if(action.type === "LOAD_TABLE_DATA"){
    //   return {
    //     ...state,
    //     tableData: action.data,
    //   };
    // }
    
      

  });
};


export default reducerFormCLB;