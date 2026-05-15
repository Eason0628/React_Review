import React from "react";
class Demo1 extends React.Component {
    render () {
        console.log(this.props)
        return <div>我是demo1 {this.props.a}</div>
    }
}
class Demo2 extends React.Component {
    render () {
        return <div>我是demo2</div>
    }
}

//高阶组件：就是一个函数，接收一个组件作为参数，返回一个新的组件,可以在组件中对原组件进行逻辑增强
function withLog (Wrapcomponent, msg) {
    return class extends React.Component {
        componentDidMount () {
            console.log(msg + "挂载了")
        }
        // 在高阶组件函数里，如果传递了props参数，那么在返回的组件里就要把props传递给被包裹的组件，否则被包裹组件就拿不到props了
        render () {
            return <Wrapcomponent {...this.props} />
        }
    }
}
const MyCom = withLog(Demo1, "Demo1: ")
const MyCom2 = withLog(Demo2, "Demo2: ")
class App extends React.Component {
    state = {
        msg: "我是⽗组件的数据"
    }
    render () {
        return (
            <div>
                <MyCom a={this.state.msg} c="1231231" />
                <MyCom2 b={this.state.msg} />
            </div>
        )
    }
}
export default App;