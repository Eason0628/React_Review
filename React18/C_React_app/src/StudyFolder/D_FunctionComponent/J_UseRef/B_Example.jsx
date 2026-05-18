function App () {
    let a = useRef()
    let num = useRef();
    useEffect(() => {
        num.current = setInterval(() => {
            console.log(num.current)
            num.current++
            console.log("组件⼀共存在了" + num.current + "s")
        }, 1000)
        return () => clearInterval(num.current)
    }, [])
    return <div>
        <h1 ref={a}>我是app</h1>
        <button >按钮</button>
    </div>
}
export default App;

// 1.createRef会在组件每次渲染的时候重新创建
// 2.useRef只会在组件⾸次渲染时创建
// 3.useRef之所以出现，就是因为在函数式组件中使⽤createRef创建ref时存在弊端（组件每次更新，ref对象就会被重新创建）