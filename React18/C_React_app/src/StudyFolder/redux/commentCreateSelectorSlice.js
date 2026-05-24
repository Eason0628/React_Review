import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
export const commentCreateSelectorSlice = createSlice({
  name: "commentCreateSelectorSlice",
  initialState: {
    arr: [1],
    loading: false,
    gender: 1,
  },
});

const handleSex = createSelector(
  [(state) => state.commentCreateSelectorSlice.gender], //取值的selector,是一个数组，不能直接取到state的属性，需要通过state.切片获取到属性的值
  (gender) => {
    // 函数代表取到的state的值，做响应式处理
    return gender === 1 ? "男" : "女";
  },
);

export { handleSex };
export default commentCreateSelectorSlice.reducer;
