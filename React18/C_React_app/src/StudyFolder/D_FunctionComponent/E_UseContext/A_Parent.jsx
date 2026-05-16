import Child from "./B_Child.jsx"
import MyContext from "./context.js";
import { useState } from "react";
function App () {
    const [msg, setMsg] = useState('这是父组件的msg');
    return (
        <MyContext.Provider value={{ msg, setMsg }}>
            <div>
                这是父组件
                <Child />
            </div>
        </MyContext.Provider>
    );
}

export default App;