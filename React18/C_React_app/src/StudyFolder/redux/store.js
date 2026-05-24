import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import commentSlice from "./commentSlice";
import commentAsyncSlice from "./commentAsyncSlice";
import commentAsyncThunkSlice from "./commentOffcialAsyncSlice";
import commentCreateSelectorSlice from "./commentCreateSelectorSlice";
import api from "./RTK_Api";

export const store = configureStore({
  // 接收各种 reducer 函数
  reducer: {
    counterSlice,
    commentSlice,
    commentAsyncSlice,
    commentAsyncThunkSlice,
    commentCreateSelectorSlice,
    // api.reducerPath 是api的名称，用于在store中注册api,如果需要动态属性值需要用[api.reducerPath]来表示
    [api.reducerPath]: api.reducer, //api会返回一个reducer函数，用于在store中注册api的reducer
  },
  // RTK Query会自带一些中间件，用于处理api的请求和响应，以及缓存存，
  // middleware是一个数组，包含了一些中间件函数，用于处理api的请求和响应，以及缓存数据,
  // 借助中间件将RTQ Query数据缓存到store中，方便后续使用
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
