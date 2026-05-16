import React, { useState, useMemo } from "react";
function App () {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(100)
    const [color, setColor] = useState("红⾊")
    let total = () => {
        console.log("函数运⾏了")
        return count * price
    }

    // useMemo监控某些值变了才执行特定函数，避免响应式变化组件重新渲染导致函数重复运⾏问题
    let myTotal = useMemo(total, [count, price])
    // 或者这样
    // let myTotal = useMemo(() => {
    //     console.log("函数运⾏了")
    //     return count * price
    // }, [count, price])

    return (
        <div>
            <h1>{myTotal}</h1>
            <button onClick={() => setColor("红⾊")}>改颜⾊</button>
            <button onClick={() => setPrice(200)}>改价格</button>
            <h1>我是app</h1>
        </div>
    )
}
export default App;