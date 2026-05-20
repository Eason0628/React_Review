import { Link, useNavigate } from "react-router-dom";
function Hello () {
    const navigate = useNavigate();

    function handleClick () {
        navigate("/about/", { state: { id: 123, name: "zhangsan" } });
    }
    return (
        <div>
            <h1>Hello Component</h1>
            {/* <button onClick={() => navigate("/about?id=1234&name=John Doe")}> */}
            {/* <button onClick={() => navigate("/about/123/zhangsan")}> */}
            <button onClick={handleClick}>
                Go to About
            </button>

            {/* 对应的Link标签这样写 */}
            <Link to="/about" state={{ id: 123, name: "zhangsan" }}>Go to About</Link>

        </div>
    );
}
export default Hello;