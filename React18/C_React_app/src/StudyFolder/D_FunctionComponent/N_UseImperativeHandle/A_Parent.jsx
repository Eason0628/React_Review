import { useRef } from "react"
import Child from "./B_Child"
function Index () {
    let a = useRef();
    const handleClick = () => {
        a.current.fn();
    }
    const handleClick2 = () => {
        a.current.focusFun();
    }
    return <>
        <button onClick={handleClick}>点击我</button>
        <Child ref={a} />
        <button onClick={handleClick2}>获取子组件输入焦点</button>
    </>
}
export default Index