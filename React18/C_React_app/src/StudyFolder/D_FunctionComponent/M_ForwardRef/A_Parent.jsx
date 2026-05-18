import { useRef } from "react"
import Child from "./B_Child"
function Index () {
    let a = useRef();
    const handleClick = () => {
        console.log(a.current);
        a.current.focus();
    }
    return <>
        <button onClick={handleClick}>点击我</button>
        <Child ref={a} />
    </>
}
export default Index