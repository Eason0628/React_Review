import { forwardRef } from "react"
function Child (props, ref) {
    return <>
        <input ref={ref} />
    </>
}
//forwardRef是一个高阶组件，普通函数只有props，没有ref，forwardRef可以让函数组件接收ref参数，并且把ref转发给组件内部的元素
//正常情况下函数主键没有ref参数，但是forwardRef可以让函数组件接收ref参数
export default forwardRef(Child)