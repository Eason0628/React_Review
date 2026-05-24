import { useSelector, useDispatch } from "react-redux";
import { handleSex } from "../redux/commentCreateSelectorSlice.js"
import axios from "axios";
import { useQueryCommentQuery, useGetListByIdQuery, useLazyGetListByIdQuery, useAddUserMutation } from "../redux/RTK_Api.js";

function StoreTestF () {
    // const { data, isSuccess } = useQueryCommentQuery();
    // 1.同步请求，页面加载时自动发送请求
    // const result = useGetListByIdQuery();
    // console.log("getListById:", result.data)

    // 2.异步请求，需要手动调用发送请求
    // const [trigger, { isLoading, isSuccess, data }] = useLazyGetListByIdQuery(1);

    // 3.修改数据
    const [addUser, { isLoading, isSuccess, data }] = useAddUserMutation();
    const handleAddUser = async () => {
        const result = await addUser({
            name: "张三",
            age: 18,
        })
        console.log(result)
    }

    return (
        <>
            <div>
                StoreTestF
            </div>
            {/* 同步请求测试静态标签
            {isSuccess && data.map((item) => (
                <div key={item.id}>
                    {item.name}
                </div>
            ))} */}

            {/* {isLoading ? "加载中..." : isSuccess ? <div>{data.id}</div> : "加载失败"} */}
            {/* <button onClick={() => trigger()}>发送异步请求</button> */}
            <button onClick={handleAddUser}>添加用户</button>
        </>
    );
}
export default StoreTestF;
