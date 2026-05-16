import MyContext from "./context.js";
import { useContext } from "react";
function App () {
    const { msg } = useContext(MyContext);
    return (
        <div>
            这是孙子组件，父组件传来的msg是：{msg}
          
        </div>
    );
}

export default App;