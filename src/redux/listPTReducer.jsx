// import { produce } from "immer";
// import * as actionsTypes from "./constants/listPTconstans";
// import { createStore } from 'redux';
// import {
//   DELETE_GYM_PT_LIST_PENDING , UPDATE_GYM_PT_LIST_PENDING
// } from '../redux/constants/listPTconstans';
// const initialState = {
//   list__PT: [],
// };

// const reducerListPT = (state = initialState, action) => {
//   return produce(state, (draft) => {
//     if (action.type === UPDATE_GYM_PT_LIST_PENDING) { 
//       //Step 2:
//       // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
//       //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
//       draft.list__PT = action.payload;
//     }
//     // if(action.type === "LOAD_TABLE_DATA"){
//     //   return {
//     //     ...state,
//     //     tableData: action.data,
//     //   };
//     // }
//     if(action.type === DELETE_GYM_PT_LIST_PENDING) {
//       const updatedList = state.list__PT.filter(user => user.id !== action.payload);
//       return {
//         ...state,
//         list__PT: updatedList
//       };
   
//     }

//   });
// };


// export default reducerListPT;

import { produce } from "immer";
import {UPDATE_GYM_PT_LIST_PENDING} from "./constants/listPTconstans";
import { createStore } from 'redux';
const initialState = {
  list__PT: [],
  // selectedlistCLB: null,
  // isLoading: false,
  // error: null,
  // searchTerm: "",
  // tableData: [],
};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === UPDATE_GYM_PT_LIST_PENDING) { 
      //Step 2:
      // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
      //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
      draft.list__PT = action.payload;
    }
    // if(action.type === "LOAD_TABLE_DATA"){
    //   return {
    //     ...state,
    //     tableData: action.data,
    //   };
    // }
    
      

  });
};


export default reducer;