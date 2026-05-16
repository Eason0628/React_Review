import { useState } from "react";

function App () {
    const [count, setCount] = useState(0);

    function handleClick () {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);//setCount是异步的，多次setCount会被合并成一次更新，最终count只增加了1，而不是3
        console.log(count); //这里打印的是0
    }

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default App;