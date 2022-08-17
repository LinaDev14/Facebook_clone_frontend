import { configureStore } from "@reduxjs/toolkit";
import  from "./features"
export default configureStore({

      reducer: {
      
            post: postReducer;
      },
});