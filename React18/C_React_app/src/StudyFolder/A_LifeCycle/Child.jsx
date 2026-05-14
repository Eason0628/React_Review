import React from "react";
class Child extends React.Component {
    constructor() {
        super();
        console.log("Child constructor")
    }
    componentDidUpdate () {
        //组件更新完毕的时候执⾏
        console.log("Child componentDidUpdate")
    }
    componentDidMount () {
        //组件挂载完毕的时候执⾏
        console.log("Child componentDidMount")
    }
    componentWillUnmount () {
        //组件即将卸载的时候执⾏
        console.log("Child componentWillUnmount")
    }

    render () {
        console.log("Child render")
        return <div>
            我是Child组件
        </div>
    }
}
export default Child;
