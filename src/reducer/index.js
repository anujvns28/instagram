import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slice/auth";


const rootReducer = combineReducers({
  auth : authSlice,
});

export default rootReducer;