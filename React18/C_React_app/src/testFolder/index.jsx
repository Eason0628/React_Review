import React from "react";
import Child from "./Child.jsx";
class Index extends React.Component {
    constructor() {
        super();
        console.log("Index constructor")
    }
    state = {
        msg: "hello",
        info: "hahahaha",
        flag: true
    }
    componentDidUpdate () {
        //组件更新完毕的时候执⾏
        console.log("componentDidUpdate")
    }
    componentDidMount () {
        //组件挂载完毕的时候执⾏
        console.log("componentDidMount")
    }
    componentWillUnmount () {
        //组件即将卸载的时候执⾏
        console.log("componentWillUnmount")
    }
    fn = () => {
        this.setState({
            flag: false
        })
    }
    change = () => {
        this.setState({
            info: "呵呵呵呵"
        })
    }
    render () {
        console.log("render")
        return <div>
            <h1>我是App组件{this.state.msg}</h1>
            <button onClick={this.fn}>按钮</button>
            <button onClick={this.change}>改info</button>
            <Child />
        </div>
    }
}
export default Index;
