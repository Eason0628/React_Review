import { useEffect, useState } from "react";

function App () {
    const [count, setCount] = useState(100);
    //1.useEffect: 组件挂载时执行一次，后续每次状态更新时也会执行,如果有依赖项数组，只有当依赖项数组中的状态更新时，才会执行useEffect中的代码
    // (挂载、更新->数组项变化时执行)
    useEffect(() => {
        console.log("useEffect is executed");
    }, []);//1.1依赖项数组为空，表示只在组件挂载时执行一次,依赖项数组不为空时，只有当依赖项数组中的状态更新时，才会执行useEffect中的代码


    function HandleClick () {
        setCount(100); //2.点击按钮时，如果count的值仍然是100状态没有发生变化，因此组件不会重新渲染，useEffect也不会执行
    }
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={HandleClick}>Add</button>
        </div>
    );
}

export default App;