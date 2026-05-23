import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    obj: { name: "zhangsan", age: 18 },
  },
  //调用时，如() => { dispatch(increment(5)) }}，如果调用处传入了参数,则action.payload就会有值,如果没有传入参数,则action.payload为undefined
  reducers: {
    increment(state, action) {
      if (action.payload) {
        state.count += action.payload;
        return;
      } else {
        state.count++;
      }
    },
    modifyObj(state, { payload }) {
      state.obj.name = payload.name;
    },
  },
});
// 1.counterSlice的返回值中有reducer和actions属性,actions属性中包含了我们定义的increment函数, reducer属性中包含了一个reducer函数
// 2.在切片中定义的reducer函数(处理共享数据用的，如initialState中定义的count,obj),都可以被counterSlice.actions拿到，拿到后向外暴漏。
export const { increment, modifyObj } = counterSlice.actions;
export default counterSlice.reducer;
