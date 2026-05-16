import { useState } from "react";

function App () {
    const [count, setCount] = useState(0);

    function handleClick () {
        //使用函数式更新，确保每次更新都基于最新的状态值
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        console.log(count); //更改数据后马上获取数据是获取不到的，因为修改后页面要更新，但是修改后马上获取数据页面还没有更新
    }

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default App;