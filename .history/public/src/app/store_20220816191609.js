import { configureStore } from "@reduxjs/toolkit";
import  from "./features/post"
export default configureStore({

      reducer: {
      
            post: postReducer;
      },
});