import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const commentAsyncThunkSlice = createSlice({
  name: "commentAsyncThunkSlice",
  initialState: {
    arr: [1],
    loading: false,
  },
  //使用RTK提供的createAsyncThunk函数创建一个异步action creator。createAsyncThunk接受两个参数：第一个参数是一个字符串，表示这个异步操作的名称；
  //    第二个参数是一个异步函数，执行具体的异步操作。在这个例子中，我们创建了一个名为setThunk的异步action creator，它会发送一个GET请求到指定的URL，并返回响应数据。

  //extraReducers是一个函数(处理createAsyncThunk的reducer)，接收一个builder对象作为参数。builder对象提供了addCase方法，用于处理异步action的不同状态（pending、fulfilled、rejected）。在这个例子中，我们使用addCase方法来处理setThunk.fulfilled状态，当setThunk异步操作成功完成时，将返回的数据存储到state.arr中。
  extraReducers: (builder) => {
    // 处理pending状态,发送请求时要执行的逻辑
    builder.addCase(setThunk.pending, (state) => {
      console.log("正在发送请求...");
      state.loading = true;
    });
    // 处理fulfilled状态
    builder.addCase(setThunk.fulfilled, (state, action) => {
      console.log("请求成功:", action.payload);
      state.arr = action.payload;
      state.loading = false;
    });
    // 处理rejected状态
    builder.addCase(setThunk.rejected, (state) => {
      console.log("请求失败:");
      state.loading = false;
    });
  },
});

const setThunk = createAsyncThunk("test/asyncThunk", async (url) => {
  const res = await axios.get(url);
  return res.data;
});

export { setThunk };
export default commentAsyncThunkSlice.reducer;
