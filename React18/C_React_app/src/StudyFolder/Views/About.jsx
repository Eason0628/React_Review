import { use } from "react";
import { Link } from "react-router-dom";
import { useSearchParams, useParams, useLocation } from "react-router-dom";
function About () {
    // 1.about?id=1234&name=John Doe这种传值方式通过useSearchParams()来获取参数
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id")); //1234
    console.log(searchParams.get("name")); //John 

    // 2.about/123/zhangsan这种传值方式通过useParams()来获取参数
    const params = useParams();
    console.log(params.id); //123
    console.log(params.name); //zhangsan

    // 3.通过navigate传递的参数通过useLocation()来获取参数   onClick={() => { navigate("/about/"), { state: { id: 123, name: "zhangsan" } } }}
    const location = useLocation();
    console.log(location.state); // { id: 123, name: 'zhangsan' }
    return (
        <div>
            <h1> About Component</h1>
            <Link to="/">Go to Hello</Link>
        </div>
    )
}
export default About;
