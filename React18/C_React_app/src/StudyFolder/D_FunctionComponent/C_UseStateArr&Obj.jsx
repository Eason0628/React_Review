import { useState } from "react";

function App () {
    const [user, setUser] = useState({ name: "张三", age: 18 });
    const [arr, setArr] = useState([1, 2, 3]);
    function funA () {
        setUser({ ...user, age: user.age + 1 });//更新对象时需要使用展开运算符，来保留对象的其他属性，否则会被覆盖掉
    }
    function funB () {
        setArr([...arr, 4]);//更新数组时，需要使用展开运算符，来保留数组的其他元素，否则会被覆盖掉
    }

    return (
        <div>
            <h1>name: {user.name}</h1>
            <h1>age: {user.age}</h1>
            <h1>arr: {arr.join(",")}</h1>
            <button onClick={funA}>AddAge</button>
            <button onClick={funB}>AddArrItem</button>
        </div>
    );
}

export default App;