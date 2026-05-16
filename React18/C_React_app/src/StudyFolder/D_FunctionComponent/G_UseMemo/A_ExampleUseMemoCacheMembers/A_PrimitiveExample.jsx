import React, { useState, useEffect } from "react";
function App () {
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(100)
    const [color, setColor] = useState("红⾊")
    let total = () => {
        console.log("函数运⾏了")//修改颜⾊的时候函数也会重新执⾏，这是不合理的
        return count * price
    }
    return (
        <div>
            <h1>{total()}</h1>
            <button onClick={() => setColor("红⾊")}>改颜⾊</button>
            <button onClick={() => setPrice(200)}>改价格</button>
            <h1>我是app</h1>
        </div>
    )
}
export default App;