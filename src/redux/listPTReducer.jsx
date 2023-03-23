

import { produce } from "immer";
//tạo ra một phiên bản mới của đối tượng (object) hoặc mảng (array) mà không làm thay đổi đối tượng hoặc mảng gốc.
//Immer sẽ tạo ra một pb mới của đối tượng gốc dựa trên các thay đổi mà chúng ta đã thực hiện trên đối tượng "draft".
import {UPDATE_GYM_PT_LIST_PENDING} from "./constants/listPTconstans";
import { createStore } from 'redux';
const initialState = {
  list__PT: [],

};

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    if (action.type === UPDATE_GYM_PT_LIST_PENDING) { 
      //Step 2:
      // cái này là dispatch data lên rồi nè. sau đó if điều kiện r set lại state,
      //vì draft là data thay đổi liên tục nên dùng draft thay vì state .
      draft.list__PT = action.payload;
    }
 
    
      

  });
};


export default reducer;