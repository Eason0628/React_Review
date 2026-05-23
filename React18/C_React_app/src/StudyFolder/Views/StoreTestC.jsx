import { useSelector, useDispatch } from "react-redux";
import { setCommentAsync } from "../redux/commentAsyncSlice.js"
import axios from "axios";
function StoreTestC () {
    const arr = useSelector((state) => {
        return state.commentAsyncSlice.arr;
    });

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(setCommentAsync("https://jsonplaceholder.typicode.com/comments"))}>获取数据</button>
            {arr.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </>
    );
}
export default StoreTestC;
