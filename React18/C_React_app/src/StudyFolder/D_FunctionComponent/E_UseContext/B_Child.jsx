import GrandChild from "./C_GrandChild.jsx"
import MyContext from "./context.js";
import { useContext } from "react";
function App () {
    const { msg } = useContext(MyContext);
    return (
        <div>
            这是子组件，父组件传来的msg是：{msg}
            <GrandChild />
        </div>
    );
}

export default App;