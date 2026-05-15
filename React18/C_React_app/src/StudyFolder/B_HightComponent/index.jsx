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
function withLog (Wrapcomponent) {
    return class extends React.Component {
        componentDidMount () {
            console.log("挂载了")
        }
        render () {
            return <Wrapcomponent {...this.props} />
        }
    }
}
const MyCom = withLog(Demo1)
const MyCom2 = withLog(Demo2)
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