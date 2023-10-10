import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const customReducer = createReducer(initialState, {
  setUser: (state, action) => {
    state.user = action.payload;
  },
});
