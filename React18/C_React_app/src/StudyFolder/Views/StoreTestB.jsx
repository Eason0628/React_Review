import { useSelector, useDispatch } from "react-redux";
import { setCommentArr } from "../redux/commentSlice.js"
import axios from "axios";
function StoreTestB () {
    const commentArr = useSelector((state) => {
        return state.commentSlice.commentArr;
    });

    const dispatch = useDispatch();

    async function getData () {
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments");
        if (res.data.length > 0) {
            console.log(res.data);
            dispatch(setCommentArr(res.data));
        }
    }

    return (
        <>
            <button onClick={getData}>获取数据</button>
            {commentArr.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </>
    );
}
export default StoreTestB;
