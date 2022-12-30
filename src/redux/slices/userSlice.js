import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  firstName: "",
  secondName: "",
  email: "",
  phoneNubmer: "",
  birthDate: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.id = action.payload.id;
      state.phoneNubmer = action.payload.phoneNubmer;
      state.birthDate = action.payload.birthDate;
      state.image = action.payload.image;
    },
    removeUser(state) {
      state.id = null;
      state.email = "";
      state.firstName = "";
      state.secondName = "";
      state.phoneNubmer = "";
      state.birthDate = "";
      state.image = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
