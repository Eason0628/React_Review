import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api", //1.reducerPath 是api的名称，用于在store中注册api
  //2.baseQuery用来配置基础请求方式，fetchBaseQuery可以不用axios，其内置了fetch函数，fetch是浏览器原生的函数，用于发送http请求
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  //3.endpoints 是api的配置，用于配置api的请求方式
  endpoints: (build) => ({
    //4.queryComment是方法名，用build构建一个查询方法，默认是get请求
    queryComment: build.query({
      query: () => `/comments`,
      transformResponse: (response) => { //C.transformResponse 用于在返回数据之前对数据进行处理,最终以transformResponse返回的数据为准，不会影响缓存
        // return response.data;
        return [1, 2, 3];
      },
    }),
    //5.查询时需要使用query方法
    getListById: build.query({
      query: (m) => ({
        method: "post",
        url: "/posts",
        body: { postId: m },
      }),
      providesTags: ["Users"], //B加⼀个标记，对应的是mutation⾥的标记
    }),
    //6.修改时需要使用mutation方法
    addUser: build.mutation({
      query: (obj) => ({
        url: "/users",
        method: "post",
        body: obj,
      }),
      invalidatesTags: ["Users"], //A 添加⼀个标记，只要标记为Users的缓存就会失效，相当于为了在添加用户后，刷新用户列表，类似更改之后重写查询的操作由RTK Query自动处理
    }),
  }),
});

console.log(api); //4.api是一个对象，包含了api的所有方法，包括reducer;
// 重要的是会帮我们根据定义的queryComment方法，生成useQueryCommentQuery hook
// useQueryCommentQuery 是一个hook函数，用于在组件中调用api的queryComment方法，获取数据.
// 自动生成的hook还会返回一个对象，包含了请求的状态、数据、错误等信息。
const {
  useQueryCommentQuery,
  useGetListByIdQuery,
  useLazyGetListByIdQuery,
  useAddUserMutation,
} = api;

//useLazyGetListByIdQuery是一个异步函数，用于在组件中异步调用api的getListById方法，获取数据
export {
  useQueryCommentQuery,
  useGetListByIdQuery,
  useLazyGetListByIdQuery,
  useAddUserMutation, //build.mutation()方法会自动生成useAddUserMutation hook，修改数据
};

export default api;

//
// RTK Query 是 Redux Toolkit 中的⼀个⾼级数据获取和缓存⼯具，专⻔⽤来⾃动化 API 请求和缓存数据的管
// 理⼯作。RTK Query 减少了很多⼿动编写和管理 API 请求状态逻辑的需要，简化了操作，并允许开发者将注
// 意⼒更多地集中在业务逻辑上，⽽⾮数据获取的细节上。
