import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "",
    age: 0,
    email: "",
    login: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      console.log(action)
      const { name, age, email } = action.payload;
      state.profile = {
        name,
        age,
        email,
        isLogin: true,
      };
    },
    setLogout(state, action) {
      state.profile = {...initialState.profile};
    },
  },
});

export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;