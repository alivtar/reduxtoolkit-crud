import { createSlice } from "@reduxjs/toolkit";
import { FakeData } from "../../data/FakeData";

export type UserType = {
  id: number;
  name: string;
  username: string;
};

interface UsersState {
  list: UserType[];
}

const USERS_INITIAL_STATE: UsersState = {
  list: FakeData,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: USERS_INITIAL_STATE,
  reducers: {
    addUser: (state, action) => {},
  },
});

export default usersSlice.reducer;
