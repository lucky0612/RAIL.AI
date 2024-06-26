import { createReducer } from "@reduxjs/toolkit";
import * as type from "../auth/authConstant";
const initialState = {
  name: "",
  authenticate: true,
  authToken: "",
  loading: false,
  merchant: false,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder

    // Handle the logic for the LOGIN REQUEST
    .addCase(type.LOGIN_FAILURE, (state, action) => {
      state.loading = true;
    });
});
export default authReducer;
