import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",  
  firstName: "",
  secondName: "",
  phoneNubmer: "",
  birthDate: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.phoneNubmer = action.payload.phoneNubmer;
      state.birthDate = action.payload.birthDate;
    },
    removeUser(state) {
      state.email = "";      
      state.password = "";
      state.firstName = "";
      state.secondName = "";
      state.phoneNubmer = "";
      state.birthDate = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
