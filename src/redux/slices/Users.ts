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
    updateUser: (
      state,
      action: PayloadAction<{ id: UserType["id"]; newUsername: string }>
    ) => {
      state.list = state.list.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            username: action.payload.newUsername,
          };
        }

        return user;
      });
    },
  },
});

export const { addUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
