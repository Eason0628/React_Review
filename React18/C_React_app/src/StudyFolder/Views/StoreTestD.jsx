import { useSelector, useDispatch } from "react-redux";
import { setThunk } from "../redux/commentOffcialAsyncSlice.js"
import axios from "axios";
function StoreTestD () {
    const { arr, loading } = useSelector((state) => {
        return state.commentAsyncThunkSlice;
    });

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(setThunk("https://jsonplaceholder.typicode.com/comments"))}>获取数据</button>
            {loading ? <p>正在加载...</p> : arr.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </>
    );
}
export default StoreTestD;
