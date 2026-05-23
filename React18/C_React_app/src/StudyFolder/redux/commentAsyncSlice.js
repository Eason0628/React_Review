import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const commentAsyncSlice = createSlice({
  name: "commentAsyncSlice",
  initialState: {
    arr: [1],
  },
  reducers: {
    setArr(state, action) {
      state.arr = action.payload;
    },
  },
});

export const { setArr } = commentAsyncSlice.actions;

// 1.自定义异步action creator
// const setCommentAsync = async (dispatch) => {
//   const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
//   if (res.data.length > 0) {
//     console.log(res.data);
//     dispatch(setArr(res.data));
//   }
// };

// 2.自定义形参的异步action creator
const setCommentAsync = (url) => {
  return async (dispatch) => {
    const res = await axios.get(url);
    if (res.data.length > 0) {
      console.log(res.data);
      dispatch(setArr(res.data));
    }
  };
};

export { setCommentAsync };
export default commentAsyncSlice.reducer;
