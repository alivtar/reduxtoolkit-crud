import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FakeData } from "../../data/FakeData";

export type UserType = {
  id: number | string;
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
    addUser: (state, action: PayloadAction<UserType>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
