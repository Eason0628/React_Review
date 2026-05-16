import React, { useMemo, useState } from "react";
import Child from "./B_Child.jsx";
function App () {

    const [price, setPrice] = useState(100);
    const [count, setCount] = useState(1);
    const [color, setColor] = useState("蓝⾊")

    //1.如果不用useMemo，修改颜色时组件重新渲染，函数重新执行，子组件也重新渲染了
    //  使用useMemo后，修改颜色时，子组件不会重新渲染，因为count和price没有改变
    //2.useMemo监控某些值变了才执行特定函数/组件，避免响应式变化组件重新渲染导致函数重复运⾏问题
    const optimizedChild = useMemo(() => {
        return <Child price={price} count={count} />
    }, [count, price])

    return (
        <div>
            {color}
            {optimizedChild}
            <button onClick={() => setColor("红⾊")}>改颜⾊</button>
        </div>
    )
}
export default App;