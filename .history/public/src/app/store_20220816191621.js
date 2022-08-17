import { configureStore } from "@reduxjs/toolkit";
import postRefrom "./features/postSlice";
export default configureStore({

      reducer: {
      
            post: postReducer;
      },
});