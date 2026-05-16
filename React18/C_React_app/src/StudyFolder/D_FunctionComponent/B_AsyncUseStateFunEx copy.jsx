import { useState } from "react";

function App () {
    const [count, setCount] = useState(0);

    function funA () {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }
    function funB () {
        setTimeout(() => {
            setCount((prevCount) => { return prevCount + 1 });
        }, 1000);
    }

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={funA}>AddA</button>//异步更新有更新合并问题(闭包问题)，1秒内连点三次最终count值只会加1
            <button onClick={funB}>AddB</button>//异步更新，使用函数式更新，解决了闭包问题，1秒内连点三次最终count值会加3
        </div>
    );
}

export default App;