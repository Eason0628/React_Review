import { useSelector, useDispatch } from "react-redux";
import { increment, modifyObj } from "../redux/counterSlice.js"
function StoreTest () {
    const count = useSelector((state) => {
        return state.counterSlice.count;
    });
    const obj = useSelector((state) => {
        return state.counterSlice.obj;
    });
    const dispatch = useDispatch();
                                                        
    return (
        <>
            <h1>StoreTest</h1>
            <button onClick={() => { dispatch(increment()) }}>+1</button>
            <button onClick={() => { dispatch(increment(5)) }}>+5</button>
            <button onClick={() => { dispatch(modifyObj({ name: "lisi" })) }}>修改obj</button>
            <p>count: {count}</p>
            <p>obj.name: {obj.name}</p>
        </>
    );
}
export default StoreTest;