# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Node:

1. 模块化的样式
   App.css默认是全局样式，如果想将其改成局部样式，可以将文件名修改成\*\*\*.module.css
   在引入的时候，模块化的样式会被当成一个对象，在引入的时候给对象命名，通过{styles.App}使用
   import styles from "./App.module.css";
   function App() {
   return (
   <>
   <div className={styles.App}>Hello，React！</div>
   </>
   );
   }

export default App;

2.  useMemo用来缓存值、计算结果

3.关于Reduxz:
redux⼏⼤核⼼概念
1.store:⽤来存数据的
2.reducer:是⼀个函数，⽤来处理数据的
3.action:是⼀个具有 type 字段的普通对象，⽤来描述要进⾏什么操作
4.Action Creator：是⼀个创建并返回⼀个 action 对象的函数。它的作⽤是让你不必每次都⼿动编写action 对象
5.Dispatch：Redux store 有⼀个⽅法叫 dispatch。更新 state 的唯⼀⽅法是调⽤ store.dispatch() 并传⼊⼀个 action 对象

使用逻辑：
1.store.js 引入configureStore定义reducers
2.slice是一个RTK提供的工具，用来区分Redux不同业务逻辑模块
定义counterSlice.js切片中定义共享数据和reducer，之后将reducer引入store.js中3.在根组件中使用provider包裹App组件,通过store属性 传入store.js 4.在需要使用数据的组件中引入useSelector,通过useSelector获取数据，以StoreTest.jsx为例

1.counterSlice.js 练习slice的使用
2.commentSlice.js 练习slice的使用
3.commentAsyncSlice.js 练习自定义asyncThunk
4.commentOffcialAsyncSlice.js 练习官方提供的asyncThunk
