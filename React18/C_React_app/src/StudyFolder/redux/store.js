import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import commentSlice from "./commentSlice";
import commentAsyncSlice from "./commentAsyncSlice";
import commentAsyncThunkSlice from "./commentOffcialAsyncSlice";
export const store = configureStore({
  // 接收各种 reducer 函数
  reducer: {
    counterSlice,
    commentSlice,
    commentAsyncSlice,
    commentAsyncThunkSlice,
  },
});
