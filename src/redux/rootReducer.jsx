
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import categoryReducer from "./categoryReducer";
// import productReducer from "./productReducer";
// import userReducer from "./userReducer";

import listCLBReducer from "./listCLBReducer";
import formCLBReducer from "./formCLBReducer";
import listPTReducer from "./listPTReducer"
import listHOCVIENReducer from "./listHocVienReducer"
import listTINTUCReducer from "./listTinTucReducer"
// export { rootReducer };
// ES6 object literal
export const rootReducer = combineReducers({
//   category: categoryReducer,
//   product: productReducer,
//   user: userReducer,
  listCLBGYM: listCLBReducer,
  formCLBGYM: formCLBReducer,
  listPTGYM: listPTReducer,
  listHOCVIENGYM: listHOCVIENReducer,
  listTINTUCGYM: listTINTUCReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;

// export default rootReducer;