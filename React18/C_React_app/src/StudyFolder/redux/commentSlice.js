import { createSlice } from "@reduxjs/toolkit";
export const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentArr: [1],
  },
  reducers: {
    setCommentArr: (state, action) => {
      state.commentArr = action.payload;
    },
  },
});
export const { setCommentArr } = commentSlice.actions;
export default commentSlice.reducer;
