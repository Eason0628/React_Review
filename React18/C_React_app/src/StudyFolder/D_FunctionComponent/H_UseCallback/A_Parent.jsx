import React, { useCallback, useState } from "react";
import Child from "./B_Child.jsx";
// 1.使用React.memo缓存子组件，避免每次渲染都重新创建子组件实例
const MemoizedChild = React.memo(Child)
function App () {

    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    function handleClick () {
        setCount(count + 1)
    }

    let fn = () => {
        console.log('函数被调用了')
    }
    // 2.使用useCallback缓存函数，只有当依赖项发生变化时才会重新创建fn函数，触发子组件重新渲染
    let memoizedFn = useCallback(fn, [num])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>改变count</button>
            <button onClick={() => setNum(num + 1)}>改变num</button>
            <MemoizedChild fn={memoizedFn} />
        </div>
    )
}
export default App;