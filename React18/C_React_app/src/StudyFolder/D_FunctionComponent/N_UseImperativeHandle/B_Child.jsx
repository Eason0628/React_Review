import { forwardRef, useImperativeHandle, useRef } from "react"
function Child (props, ref) {

    function fun () {
        console.log("Child function fun is called");
    }

    // 1.父组件获取子组件的方法，需要在子组件中使用useImperativeHandle方法
    // 在useImperativeHandle函数中除了接收父组件传递的ref之外还要返回一个对象，对象中包含需要暴露给父组件的方法

    // 2.如果父组件即想获得子组件的元素又想获得子组件的方法，获得子组件方法使用useImperativeHandle函数
    //   如果还想获取子组件的元素，需要在子组件中使用useRef方法创建一个ref对象，并将这个ref对象传递给子组件元素的ref属性，同时在useImperativeHandle函数中做处理
    let a = useRef();
    // ref:⽗组件传递过来的ref
    // createHandle：是⼀个函数，返回⼀个对象，这个对象就是⽗组件可以通过ref.current拿到的对象。所有你希望共享给⽗组件的数据或者⽅法，就写到这⾥
    useImperativeHandle(ref, () => ({
        fn: fun,
        focusFun: fun2
    }));

    function fun2 () {
        a.current.focus();
    }
    return <>
        <input ref={a} />
    </>
}

//3. 注意子组件需要使用forwardRef函数进行包裹，才能在子组件中接收父组件传递的ref
export default forwardRef(Child)    
