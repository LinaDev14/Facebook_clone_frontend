import { configureStore } from "@reduxjs/toolkit";
import { post}
export default configureStore({

      reducer: {
      
            post: postReducer;
      },
});