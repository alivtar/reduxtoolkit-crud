import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/Users";

const store = configureStore({
  reducer: {
    usersData: usersReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
