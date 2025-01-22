import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 token: "",
};

export const UserSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   addToken: (state, action) => {
     state.value = (action.payload);
     console.log ("from reducer :" +state.value);
   },
 },
});

export const { addToken } = UserSlice.actions;
export default UserSlice.reducer;