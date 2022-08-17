import { configureStore } from "@reduxjs/toolkit";
import from "./features/postSlice";
export default configureStore({

      reducer: {
      
            post: postReducer;
      },
});