function Demo () {
    let a = useRef()
    let get = () => {
        console.log(a.current.innerHTML)//hello
    }
    // useRef 是⼀个React的Hook，它可以在函数组件中创建⼀个引⽤（ref）对象，主要⽤途有以下⼏种：
    // 1.访问DOM元素：可以⽤来直接操作DOM元素，⽐如获取输⼊框的值，设置焦点或测量DOM元素尺⼨等。
    // 2.存储可变值：useRef 可以存储任意可变值，并且不会触发组件的重新渲染
    return (
        <>
            <div ref={a} >hello</div>
            <button onClick={get}>获取</button>
        </>
    )
}
//总结 use两个作用:
// 作用1：获取标注的对象数据
// 作用2：想保存数据，但是被保存的数据不想在页面展示
