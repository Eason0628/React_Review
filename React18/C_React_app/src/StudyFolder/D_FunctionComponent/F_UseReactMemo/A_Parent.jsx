import React, { useState } from "react";
import Child from "./B_Child.jsx"

function App () {
    const [msg, setMsg] = useState('这是父组件的数据');
    const [count, setCount] = useState(0);
    console.log('父组件渲染了');
    return (
        <div>
            这是父组件
            <button onClick={() => setMsg('这是父组件的数据A')}>点击改变数据</button>
            <MemoizedChild b={count} />
        </div>
    );
}
// React.memo是一个高阶组件，用于优化函数组件的性能。
// 它会对组件的 props 进行浅比较，如果 props 没有发生变化，则不会重新渲染组件，从而提高性能。
const MemoizedChild = React.memo(Child);
export default App;