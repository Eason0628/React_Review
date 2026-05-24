import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Hello from "../Views/Hello.jsx";
import About from "../Views/About.jsx";
import Info from "../Views/Info.jsx";
import Test from "../Views/Test.jsx";
import StoreTest from "../Views/StoreTest.jsx";
import StoreTestB from "../Views/StoreTestB.jsx";
import StoreTestC from "../Views/StoreTestC.jsx";
import StoreTestD from "../Views/StoreTestD.jsx";
import StoreTestE from "../Views/StoreTestE.jsx";
import StoreTestF from "../Views/StoreTestF.jsx";

// 创建⼀个路由器实例
//createBrowserRouter 创建⼀个浏览器路由器对象，它接收⼀个路由配置数组作为参数。
const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />, //这⾥写jsx可以是⼀个组件，也可以是⼀段html代码
    children: [
      {
        path: "/info",
        element: <Info />,
        children: [
          {
            path: "/info/test",
            element: <Test />,
          },
        ],
      },
    ],
  },
  {
    // path: "/about/:id/:name",
    path: "/about",
    element: <About />,
  },
  {
    path: "*", //路由通配符，如果任何路由都匹配不上，就匹配这个，所以放在最后
    element: <h1>404</h1>,
  },
  {
    path: "/storetest",
    element: <StoreTest />,
  },
  {
    path: "/storetestb",
    element: <StoreTestB />,
  },
  {
    path: "/storetestc",
    element: <StoreTestC />,
  },
  {
    path: "/storetestd",
    element: <StoreTestD />,
  },
  {
    path: "/storeteste",
    element: <StoreTestE />,
  },
  {
    path: "/storetestf",
    element: <StoreTestF />,
  },
]);
export { router };

// // 在应⽤的根组件中使⽤ RouterProvider
// function App() {
//   //RouterProvider 组件⽤于包裹整个应⽤或路由部分，并接收之前创建的路由器对象。
//   return <RouterProvider router={router} />;
// }
// export default App;
