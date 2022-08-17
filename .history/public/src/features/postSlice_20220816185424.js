import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({

      name: "post",
      initialState: {
            value: [],
      },

      reducers: {
            addPost: (state, action) => {},
            addAllPost: (state, action) => {},

      
      },
});

export default postSlice